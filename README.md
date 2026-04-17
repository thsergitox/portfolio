# Sergio Pezo Portfolio

Portfolio personal construido con Astro, con enfoque minimalista, soporte multiidioma y blog con content collections.

## Stack

- Astro 5 (TypeScript)
- Astro Content Collections para blog Markdown
- i18n custom (es, en, pt)
- CSS global en layout compartido
- SEO: @astrojs/sitemap, hreflang, Open Graph, JSON-LD
- Deploy: Vercel (adapter `@astrojs/vercel`)
- Correo transaccional: Resend

## Lo que ya incluye

- Home con hero, secciones de presentacion y ultima historia destacada.
- Blog en 3 idiomas, con listado y detalle por slug.
- CV con experiencia, educacion, proyectos, skills, idiomas y modal PDF.
- Navegacion mobile con animacion suave para mostrar/ocultar menu.
- Copys actualizados en blog y home (tono mas directo y natural).

## Rutas principales

El proyecto usa `src/pages/[...lang]/` para internacionalizacion:

- Espanol (default, sin prefijo): `/`, `/blog`, `/cv`
- Ingles: `/en`, `/en/blog`, `/en/cv`
- Portugues: `/pt`, `/pt/blog`, `/pt/cv`

## Estructura del proyecto

```text
/
├── public/                     # Assets estaticos (foto, favicon, cv.pdf, etc.)
├── src/
│   ├── components/
│   │   └── LanguageSelector.astro
│   ├── content/
│   │   └── blog/
│   │       ├── es/
│   │       ├── en/
│   │       └── pt/
│   ├── i18n/
│   │   └── locales.ts          # Traducciones y helpers de idioma
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/[...lang]/
│   │   ├── index.astro
│   │   ├── blog/index.astro
│   │   ├── blog/[slug].astro
│   │   └── cv.astro
│   ├── content.config.ts       # Schema de coleccion blog
│   └── data.ts                 # Data del CV por idioma
└── package.json
```

## Comandos

Ejecutar desde la raiz del proyecto:

| Comando | Descripcion |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Levanta entorno local en `localhost:4321` |
| `npm run build` | Genera build de produccion en `dist/` |
| `npm run preview` | Sirve build local para validacion |
| `npm run astro -- check` | Revisa tipos, rutas y diagnosticos Astro |

## Internacionalizacion

- Idioma por defecto: `es`.
- Idiomas soportados: `es`, `en`, `pt`.
- Todas las traducciones viven en `src/i18n/locales.ts`.
- Helpers clave: `getLangFromUrl()`, `useTranslations()`, `localizePath()`.

## Blog y contenido

- La coleccion `blog` esta definida en `src/content.config.ts`.
- Campos: `title`, `description`, `date`, `locale`, `draft`, `cover`, `tags`.
- Publica nuevos posts en:
  - `src/content/blog/es/`
  - `src/content/blog/en/`
  - `src/content/blog/pt/`

## Contacto y leads

- Modal global `ContactModal.astro` llamable desde cualquier parte con `href="#contacto"` (es), `#contact` (en), `#contato` (pt) o con `data-open-contact` en cualquier `<a>` o `<button>`.
- CTA flotante sticky en todas las páginas.
- Endpoint server: `src/pages/api/contact.ts` valida, aplica honeypot y envía vía Resend.
- Variables en Vercel (`.env.example` incluido):
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`

## SEO incluido

- `astro.config.mjs` con `site` + `@astrojs/sitemap` multi-idioma (`es-PE`, `en-US`, `pt-BR`).
- Componente `src/components/SEO.astro`: canonical, hreflang, Open Graph, Twitter cards.
- JSON-LD `Person` + `WebSite` a nivel layout; `BlogPosting` por post.
- `public/robots.txt`, `public/og-default.png` (1200x630).
- Easter eggs: `public/humans.txt`, `public/.well-known/security.txt`, `public/llms.txt`.

## Checklist antes de publicar cambios

1. `npm run astro -- check`
2. `npm run build`
3. Revisar manualmente rutas: `/`, `/en`, `/pt`, `/blog`, `/cv`
4. Probar abrir modal (`/#contacto`) y envío del formulario en preview.
