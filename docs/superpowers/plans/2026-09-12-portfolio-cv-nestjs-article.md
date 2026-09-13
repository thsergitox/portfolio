# Portfolio CV and NestJS Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a complete, factually aligned trilingual CV experience and a polished trilingual NestJS/WebSocket authentication article with rendered Mermaid diagrams.

**Architecture:** Move CV content into a focused feature module with one locale file per language and keep Astro pages presentational. Treat Mermaid rendering as a small isolated browser module used only by article pages; keep article prose in Astro content collections. Generate one immutable PDF per locale from the canonical 2026 CV sources.

**Tech Stack:** Astro 5, TypeScript, Markdown content collections, Mermaid, Node test runner, jsdom, LaTeX.

**Spec:** `docs/superpowers/specs/2026-09-12-portfolio-cv-nestjs-article-design.md`

## Global Constraints

- `/home/sergi/Documents/me/cv/2026/completo/cv.tex` is canonical: ninth term and CoFoundy through May 2026.
- Spanish, English, and Portuguese must describe equivalent facts.
- Do not expose authorization headers, tokens, secrets, or real identifiers.
- Describe middleware as connection authentication and the guard as authorization/presence enforcement.
- Keep the current portfolio identity; do not redesign unrelated pages.
- Do not run `npm run build` after changes.
- Preserve the user's existing untracked `CONTACT-SETUP.md`.

---

### Task 1: Localized CV domain and page

**Files:**
- Create: `src/features/cv/types.ts`
- Create: `src/features/cv/shared.ts`
- Create: `src/features/cv/locales/es.ts`
- Create: `src/features/cv/locales/en.ts`
- Create: `src/features/cv/locales/pt.ts`
- Create: `src/features/cv/index.ts`
- Create: `test/cv-profile.test.ts`
- Modify: `src/data.ts`
- Modify: `src/pages/[...lang]/cv.astro`
- Modify: `src/i18n/locales.ts`

**Interfaces:**
- Produces: `getProfile(lang: Lang): CvProfile`.
- `CvProfile` contains contact data, summary, `experience`, `education`, `projects`, `awards`, `leadership`, `skillGroups`, `spokenLanguages`, and `pdf` metadata.

- [ ] **Step 1: Write the failing profile behavior test**

```ts
import test from 'node:test';
import assert from 'node:assert/strict';
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
```

- [ ] **Step 2: Run RED**

Run: `node --experimental-strip-types --test test/cv-profile.test.ts`  
Expected: FAIL because `src/features/cv/index.ts` does not exist.

- [ ] **Step 3: Implement the typed locale modules and presentational page**

Define explicit interfaces in `types.ts`, shared contact fields in `shared.ts`, complete localized content in each locale module, and dispatch by `Lang` in `index.ts`. Turn `src/data.ts` into a compatibility re-export. Render experience, education, projects, awards, leadership, skills, languages, and localized PDF actions in `cv.astro`.

- [ ] **Step 4: Run GREEN**

Run: `node --experimental-strip-types --test test/cv-profile.test.ts`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/cv src/data.ts src/pages/'[...lang]'/cv.astro src/i18n/locales.ts test/cv-profile.test.ts
git commit -m "feat: publish complete localized CV profiles"
```

### Task 2: Localized CV documents and PDF assets

**Files:**
- Modify: `/home/sergi/Documents/me/cv/2026/complete/cv.tex`
- Create: `/home/sergi/Documents/me/cv/2026/completo-pt/cv.tex`
- Create: `/home/sergi/Documents/me/cv/2026/completo-pt/cv.pdf`
- Create: `public/cv/sergio-pezo-cv-es.pdf`
- Create: `public/cv/sergio-pezo-cv-en.pdf`
- Create: `public/cv/sergio-pezo-cv-pt.pdf`
- Delete: `public/cv.pdf`

**Interfaces:**
- Consumes: PDF paths produced by Task 1.
- Produces: three downloadable PDF resources with consistent facts.

- [ ] **Step 1: Add a failing asset behavior to `test/cv-profile.test.ts`**

```ts
import { access } from 'node:fs/promises';

test('every localized profile points to an existing PDF', async () => {
  for (const lang of ['es', 'en', 'pt'] as const) {
    const href = getProfile(lang).pdf.href;
    await access(new URL(`../public${href}`, import.meta.url));
  }
});
```

- [ ] **Step 2: Run RED**

Run: `node --experimental-strip-types --test test/cv-profile.test.ts`  
Expected: FAIL with `ENOENT` for the first localized asset.

- [ ] **Step 3: Prepare and compile PDFs without a post-change site build**

Create corrected English and complete Portuguese LaTeX inputs in a temporary directory, compile them there with `latexmk -pdf`, inspect page count and extracted text, then copy the verified sources/assets into their final paths. Copy the canonical Spanish PDF unchanged.

- [ ] **Step 4: Run GREEN and inspect documents**

Run: `node --experimental-strip-types --test test/cv-profile.test.ts`  
Run: `pdfinfo public/cv/sergio-pezo-cv-{es,en,pt}.pdf | grep Pages`  
Run: `pdftotext public/cv/sergio-pezo-cv-pt.pdf - | sed -n '1,80p'`  
Expected: tests pass; each PDF has content and the Portuguese extract is localized.

- [ ] **Step 5: Commit tracked assets**

```bash
git add public/cv public/cv.pdf
git commit -m "feat: add localized CV downloads"
```

### Task 3: Resilient Mermaid renderer

**Files:**
- Create: `src/features/blog/mermaid-renderer.ts`
- Create: `src/components/MermaidRenderer.astro`
- Create: `test/mermaid-renderer.test.ts`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `src/pages/[...lang]/blog/[slug].astro`

**Interfaces:**
- Produces: `renderMermaidBlocks(root: ParentNode, render: MermaidRender): Promise<void>`.
- `MermaidRender` accepts source and returns SVG markup.

- [ ] **Step 1: Install test/runtime dependencies before implementation**

Run: `npm install mermaid && npm install --save-dev jsdom @types/jsdom`

- [ ] **Step 2: Write the failing DOM behavior tests**

Cover successful replacement, failure fallback, and idempotent second initialization using a real jsdom document and a deterministic local renderer function.

- [ ] **Step 3: Run RED**

Run: `node --experimental-strip-types --test test/mermaid-renderer.test.ts`  
Expected: FAIL because the renderer module does not exist.

- [ ] **Step 4: Implement minimal rendering and Astro lifecycle integration**

Convert `pre > code.language-mermaid` into an accessible figure only after successful SVG generation. Preserve the original `<pre>` on errors. Initialize Mermaid on initial load and `astro:page-load`; disable animation when reduced motion is requested.

- [ ] **Step 5: Run GREEN**

Run: `node --experimental-strip-types --test test/mermaid-renderer.test.ts`  
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json src/features/blog src/components/MermaidRenderer.astro src/pages/'[...lang]'/blog/'[slug]'.astro test/mermaid-renderer.test.ts
git commit -m "feat: render accessible Mermaid diagrams"
```

### Task 4: Trilingual technical article and editorial presentation

**Files:**
- Delete: `src/content/blog/es/portfolio-con-personalidad.md`
- Delete: `src/content/blog/en/portfolio-with-personality.md`
- Delete: `src/content/blog/pt/portfolio-com-personalidade.md`
- Delete: `public/blog/palette-board.svg`
- Create: `src/content/blog/es/por-que-nestjs-encaja-conmigo.md`
- Create: `src/content/blog/en/why-nestjs-fits-me.md`
- Create: `src/content/blog/pt/por-que-nestjs-combina-comigo.md`
- Create: `public/blog/nestjs-websocket-architecture.svg`
- Modify: `src/pages/[...lang]/blog/[slug].astro`
- Modify: `src/pages/[...lang]/blog/index.astro`
- Modify: `src/i18n/locales.ts`

**Interfaces:**
- Consumes: Mermaid renderer from Task 3.
- Produces: one equivalent article per locale and a shared architectural cover.

- [ ] **Step 1: Write the three evidence-based articles**

Use the approved 12-section narrative. Include sanitized excerpts from `WsAuthService`, `SocketAuthMiddleware`, `afterInit`, `WsJwtGuard`, the folder tree, Mermaid architecture and sequence diagrams, trade-offs, and the production logging warning.

- [ ] **Step 2: Replace the old content and create the cover**

Remove all three placeholder posts and the palette image. Add an SVG cover whose content is meaningful without animation.

- [ ] **Step 3: Implement editorial layout**

Add article table-of-contents navigation, filename treatments, readable code blocks, diagram surfaces, responsive two-column layout, visible focus, and reduced-motion styling. Update blog landing copy in all locales.

- [ ] **Step 4: Commit**

```bash
git add src/content/blog public/blog src/pages/'[...lang]'/blog src/i18n/locales.ts
git commit -m "feat: publish NestJS WebSocket architecture article"
```

### Task 5: Final verification

**Files:**
- Modify only files required to fix verification findings.

- [ ] **Step 1: Run all behavior tests**

Run: `node --experimental-strip-types --test test/*.test.ts`  
Expected: PASS with no warnings.

- [ ] **Step 2: Run Astro static checks**

Run: `npm run astro -- check`  
Expected: zero errors. Do not run `npm run build`.

- [ ] **Step 3: Start dev server and inspect localized routes**

Run: `npm run dev -- --host 127.0.0.1`  
Inspect `/cv`, `/en/cv`, `/pt/cv`, all three blog indexes, and all three article routes at desktop and mobile widths. Verify Mermaid SVGs, PDF links, keyboard focus, fallback markup, and console output.

- [ ] **Step 4: Review repository state**

Run: `git status --short` and `git diff --check`. Confirm `CONTACT-SETUP.md` remains untouched and no generated site output is tracked.

- [ ] **Step 5: Commit verification fixes if any**

```bash
git add <only-fixed-files>
git commit -m "fix: resolve portfolio verification findings"
```
