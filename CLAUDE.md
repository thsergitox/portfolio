# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based portfolio website with internationalization support for Spanish (default), English, and Portuguese. The project uses React components for interactive elements and follows a minimalist design philosophy.

## Commands

### Development
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Dependencies
- `npm install` - Install all dependencies

## Architecture

### Technology Stack
- **Framework**: Astro with React integration
- **Languages**: TypeScript, TSX for React components, Astro components
- **Internationalization**: Custom i18n implementation with 3 languages (es, en, pt)
- **Routing**: Dynamic language-based routing with `[...lang]` pattern

### Project Structure
- `src/pages/[...lang]/` - Dynamic routes for language-specific pages
- `src/i18n/locales.ts` - Centralized translations and i18n utilities
- `src/components/` - Shared Astro and React components
- `src/layouts/` - Page layout templates
- `src/content/` - Content collections (blog posts)
- `public/` - Static assets

### Key Architectural Patterns

#### Internationalization
- Spanish is the default locale with no URL prefix
- English and Portuguese use `/en/` and `/pt/` prefixes
- All translations are centralized in `src/i18n/locales.ts`
- Use `useTranslations()` helper for accessing translations
- Language switching handled by `LanguageSelector.tsx` component

#### Content Management
- Blog posts use Astro's content collections defined in `src/content.config.ts`
- Content schema includes: title, date, slug (optional), excerpt

#### Routing Structure
- Home: `/` (es), `/en`, `/pt`
- Blog: `/blog`, `/en/blog`, `/pt/blog`
- Projects: `/proyectos`, `/en/projects`, `/pt/projetos`
- CV: `/cv`, `/en/cv`, `/pt/cv`

## Development Guidelines

### Adding New Pages
1. Create page in `src/pages/[...lang]/` directory
2. Add translations for new content to `src/i18n/locales.ts`
3. Follow existing patterns for language routing

### Working with Components
- Astro components (`.astro`) for static content
- React components (`.tsx`) for interactive elements
- Import and use existing layouts from `src/layouts/`

### Adding Translations
1. Add new keys to all language objects in `src/i18n/locales.ts`
2. Use consistent key naming: `section.item` pattern
3. Access translations using the `useTranslations()` helper