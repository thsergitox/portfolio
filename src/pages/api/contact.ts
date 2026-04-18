import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

function sanitize(value: unknown, max: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token: string, secret: string, remoteIp?: string | null) {
  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteIp) body.append('remoteip', remoteIp);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      body,
    });
    const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    return { success: Boolean(data.success), errors: data['error-codes'] ?? [] };
  } catch (err) {
    console.error('[contact] Turnstile verify error:', err);
    return { success: false, errors: ['network_error'] };
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: Record<string, unknown>;
  try {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else {
      const form = await request.formData();
      payload = Object.fromEntries(form.entries());
    }
  } catch {
    return json({ ok: false, error: 'invalid_payload' }, 400);
  }

  if (typeof payload.website === 'string' && payload.website.trim().length > 0) {
    return json({ ok: true });
  }

  const name = sanitize(payload.name, 120);
  const email = sanitize(payload.email, 200);
  const company = sanitize(payload.company, 160);
  const message = sanitize(payload.message, 4000);
  const locale = sanitize(payload.locale, 10) || 'es';

  if (!name || !email || !message) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }
  if (!EMAIL_REGEX.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }
  if (message.length < 10) {
    return json({ ok: false, error: 'message_too_short' }, 400);
  }

  const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = sanitize(payload['cf-turnstile-response'], 2048);
    if (!token) {
      return json({ ok: false, error: 'captcha_missing' }, 400);
    }
    let remoteIp: string | null = null;
    try {
      remoteIp = clientAddress ?? null;
    } catch {
      remoteIp = null;
    }
    const verify = await verifyTurnstile(token, turnstileSecret, remoteIp);
    if (!verify.success) {
      console.warn('[contact] Turnstile failed:', verify.errors);
      return json({ ok: false, error: 'captcha_failed' }, 400);
    }
  } else if (import.meta.env.PROD) {
    console.warn('[contact] TURNSTILE_SECRET_KEY not set in production — skipping captcha verification');
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL ?? 'sergiopezoj@gmail.com';
  const from = import.meta.env.CONTACT_FROM_EMAIL ?? 'Sergio Pezo <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('[contact] Missing RESEND_API_KEY');
    return json({ ok: false, error: 'service_unavailable' }, 500);
  }

  const resend = new Resend(apiKey);

  const subject = `Nuevo lead · ${name}${company ? ' · ' + company : ''}`;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#2d2520;line-height:1.6">
      <h2 style="margin:0 0 12px;color:#46708e">Nuevo mensaje desde pezo.dev</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ''}
      <p><strong>Idioma:</strong> ${escapeHtml(locale)}</p>
      <hr style="border:0;border-top:1px solid #e3dad5;margin:18px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;
  const text = [
    `Nuevo mensaje desde pezo.dev`,
    `Nombre: ${name}`,
    `Email: ${email}`,
    company ? `Empresa: ${company}` : null,
    `Idioma: ${locale}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return json({ ok: false, error: 'send_failed' }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return json({ ok: false, error: 'unexpected' }, 500);
  }
};
