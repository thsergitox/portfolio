import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import test from 'node:test';

import { getProfile } from '../src/features/cv/index.ts';

test('all localized profiles expose equivalent current career facts', () => {
  for (const lang of ['es', 'en', 'pt'] as const) {
    const profile = getProfile(lang);
    assert.equal(profile.education[0].term, 9);
    assert.equal(profile.experience[1].end, '2026-05');
    assert.ok(profile.projects.length >= 6);
    assert.ok(profile.leadership.length >= 2);
    assert.equal(profile.pdf.href, `/cv/sergio-pezo-cv-${lang}.pdf`);
  }
});

test('every localized profile points to an existing PDF', async () => {
  for (const lang of ['es', 'en', 'pt'] as const) {
    const href = getProfile(lang).pdf.href;
    await access(new URL(`../public${href}`, import.meta.url));
  }
});
