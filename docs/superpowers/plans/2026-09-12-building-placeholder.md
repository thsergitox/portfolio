# Building Placeholder Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing portfolio with one static “Sergio Pezo is building” page.

**Architecture:** Remove all feature routes and shared application layers. Keep a single dependency-free Astro page and only the assets/configuration required to serve it.

**Tech Stack:** Astro 5, semantic HTML, scoped CSS.

**Spec:** `docs/superpowers/specs/2026-09-12-building-placeholder-design.md`

## Global Constraints

- Preserve `.git`, `.gitignore`, `package.json`, lockfile, Astro configuration, TypeScript configuration, `public/photo.jpeg`, and the favicon.
- Do not modify or close PR #2.
- Do not add JavaScript or animated progress.
- Do not run `npm run build`.

### Task 1: Remove the previous portfolio

**Files:** Delete previous `src/` implementation, blog/CV assets, root documents, and setup notes not required by the placeholder.

- [ ] Remove tracked product files while preserving minimal runtime files.
- [ ] Confirm the deletion list does not include the photo or favicon.

### Task 2: Add the placeholder

**Files:** Create `src/pages/index.astro`; simplify `astro.config.mjs`, `package.json`, and `tsconfig.json` only as required.

- [ ] Add semantic name, status, photo, and static progress markup.
- [ ] Add responsive CSS using the approved color palette.
- [ ] Run `npm run astro -- check`.

### Task 3: Verify

- [ ] Inspect desktop and mobile layouts in a local browser.
- [ ] Confirm there is no horizontal overflow and the progress value is static.
- [ ] Commit with a conventional message.

