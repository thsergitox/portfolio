# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro portfolio site with localized routes. Keep page entry points in `src/pages/[...lang]/`, shared layouts in `src/layouts/`, and reusable UI in `src/components/`. Store translations in `src/i18n/locales.ts` and blog content in `src/content/blog/`, with language variants under `en/` and `pt/`. Put static assets such as icons in `public/`.

## Build, Test, and Development Commands
Run commands from the repository root.

- `npm install`: install Astro, React, and related dependencies.
- `npm run dev`: start the local dev server on `localhost:4321`.
- `npm run build`: create the production build in `dist/`.
- `npm run preview`: serve the built site locally for verification.
- `npm run astro -- check`: run Astro's project checks for routes, content, and types.

## Coding Style & Naming Conventions
Use TypeScript, Astro, and TSX with 2-space indentation. Prefer `.astro` files for static UI and `.tsx` only for interactive behavior such as `LanguageSelector.tsx`. Use `PascalCase` for components and layouts, `camelCase` for functions and variables, and kebab-case or content slugs for Markdown files, for example `src/content/blog/en/first-story.md`. Keep translation keys consistent with the existing dotted pattern like `nav.blog` or `projects.1.title`.

## Testing Guidelines
There is no dedicated automated test suite yet. Before opening a PR, run `npm run astro -- check`, then `npm run build`, and manually verify the main localized routes: `/`, `/en`, `/pt`, `/blog`, and `/proyectos`. When adding content collections or dynamic routes, confirm the generated pages and language switching behavior in the browser.

## Commit & Pull Request Guidelines
Follow the Conventional Commit style already present in the history: `feat: ...`, `refactor: ...`, `fix: ...`. Keep subjects imperative and specific. Pull requests should include a short description of the change, note any affected locales or routes, and attach screenshots for visible UI updates. Link the relevant issue when one exists.

## Content & Localization Notes
Spanish is the default locale. Add new UI strings to all three language objects in `src/i18n/locales.ts`, and keep route naming aligned with the current localized structure such as `/proyectos`, `/en/projects`, and `/pt/projetos`.
