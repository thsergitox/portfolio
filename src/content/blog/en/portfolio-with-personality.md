---
title: "A portfolio with personality"
description: "Notes on building a portfolio around color, story, and a more human visual rhythm."
date: 2026-04-16
locale: en
cover: "/blog/palette-board.svg"
tags:
  - design
  - portfolio
  - astro
---

I want this portfolio to feel like a conversation: clear, honest, and unmistakably mine.

![Portfolio palette](/blog/palette-board.svg)

The design direction is simple: blue as identity, light beige as breathing room, brown as contrast, and a warmer beige for cards and transitions.

## Publishing stories with photos

Astro's **content collections** are a great fit for this. I can keep every story inside `src/content/blog` and write in plain Markdown.

To add a photo inside a post, I just use standard Markdown image syntax:

```md
![My photo in Campinas](/blog/my-photo.jpg)
```

If I later want embedded UI components or richer storytelling blocks, MDX is the natural upgrade path.
