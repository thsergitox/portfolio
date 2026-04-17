import 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" }
});
function sanitize(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POST = async ({ request, clientAddress }) => {
  let payload;
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const form = await request.formData();
      payload = Object.fromEntries(form.entries());
    }
  } catch {
    return json({ ok: false, error: "invalid_payload" }, 400);
  }
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return json({ ok: true });
  }
  const name = sanitize(payload.name, 120);
  const email = sanitize(payload.email, 200);
  sanitize(payload.company, 160);
  sanitize(payload.projectType, 40);
  const message = sanitize(payload.message, 4e3);
  sanitize(payload.locale, 10) || "es";
  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!EMAIL_REGEX.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (message.length < 10) {
    return json({ ok: false, error: "message_too_short" }, 400);
  }
  {
    console.warn("[contact] TURNSTILE_SECRET_KEY not set in production — skipping captcha verification");
  }
  {
    console.error("[contact] Missing RESEND_API_KEY");
    return json({ ok: false, error: "service_unavailable" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
