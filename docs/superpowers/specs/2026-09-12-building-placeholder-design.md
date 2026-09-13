# Diseño: página temporal “is building”

## Objetivo

Reemplazar temporalmente el portfolio por una única pantalla mínima mientras
Sergio redefine qué quiere comunicar profesionalmente.

## Interfaz

- Una sola ruta pública: `/`.
- Nombre visible: `Sergio Pezo`.
- Texto secundario exacto: `is building`.
- Foto existente `public/photo.jpeg` al costado del texto en escritorio y debajo
  en móvil.
- Barra de progreso estática, detenida cerca del inicio y sin animación.
- Paleta heredada: azul `#46708e`, beige `#e3cbaf`, beige claro `#e3dad5`, marrón
  `#b19074` y tinta `#2d2520`.
- Sin navegación, enlaces, blog, CV, formularios, idiomas ni llamadas a la acción.

## Alcance técnico

Se conservarán solamente Git, configuración mínima de Astro, dependencias,
`public/photo.jpeg`, el favicon y la página única. El historial anterior seguirá
recuperable en Git y el PR #2 permanecerá intacto.

## Validación

- `npm run astro -- check` sin errores.
- Inspección en navegador de `/` en escritorio y móvil.
- Ausencia de overflow horizontal.
- Barra con `aria-valuenow` fijo y respeto a `prefers-reduced-motion`.

