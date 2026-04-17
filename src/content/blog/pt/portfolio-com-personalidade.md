---
title: "Portfólio com personalidade"
description: "Notas sobre construir um portfólio com cor, narrativa e presença própria."
date: 2026-04-16
locale: pt
cover: "/blog/palette-board.svg"
tags:
  - design
  - portfolio
  - astro
---

Quero que este portfólio pareça uma conversa: claro, honesto e com identidade visual própria.

![Paleta do portfólio](/blog/palette-board.svg)

A direção visual é simples: azul para identidade, bege claro para respirar, marrom para contraste e um bege mais quente para os cartões.

## Como publicar histórias com fotos

No Astro, **content collections** funcionam muito bem para isso. Posso guardar cada história em `src/content/blog` e escrever tudo em Markdown puro.

Para colocar uma foto dentro do post, basta usar a sintaxe normal do Markdown:

```md
![Minha foto em Campinas](/blog/minha-foto.jpg)
```

Se depois eu quiser componentes embutidos ou blocos mais ricos, MDX é o próximo passo natural.
