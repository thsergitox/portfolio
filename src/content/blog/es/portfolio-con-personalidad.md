---
title: "Portfolio con personalidad"
description: "Cómo estoy pensando este portfolio: color, relato, foto y una web que se sienta mía."
date: 2026-04-16
locale: es
cover: "/blog/palette-board.svg"

tags:
  - diseño
  - portfolio
  - astro
---

Quiero que este portfolio se sienta como una conversación: claro, honesto y con una identidad visual reconocible.

![Paleta del portfolio](/blog/palette-board.svg)

La base está en una paleta muy concreta:

- azul para personalidad;
- beige claro para dar aire al fondo;
- marrón para contraste cálido;
- beige medio para suavizar tarjetas y detalles.

## ¿Cómo publicar historias con fotos?

En Astro, la forma más directa es usar **content collections** con archivos Markdown dentro de `src/content/blog`.

Luego, para añadir una foto dentro de un post, basta con usar Markdown normal:

```md
![Mi foto en Campinas](/blog/mi-foto.jpg)
```

Si más adelante quiero meter componentes, galerías custom o embeds más complejos, puedo saltar a MDX sin rehacer toda la estructura.
