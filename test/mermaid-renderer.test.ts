import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';

import { renderMermaidBlocks } from '../src/features/blog/mermaid-renderer.ts';

test('replaces Mermaid source only after a successful render', async () => {
  const dom = new JSDOM('<main><pre data-language="mermaid"><code><span>flowchart LR</span>\n<span>A--&gt;B</span></code></pre></main>');
  let source = '';
  await renderMermaidBlocks(dom.window.document, async (_id, value) => {
    source = value;
    return { svg: '<svg role="img"></svg>' };
  });

  assert.equal(source, 'flowchart LR\nA-->B');
  assert.equal(dom.window.document.querySelectorAll('figure.mermaid-diagram').length, 1);
  assert.equal(dom.window.document.querySelector('pre'), null);
});

test('keeps readable source when Mermaid rejects the diagram', async () => {
  const dom = new JSDOM('<pre><code class="language-mermaid">invalid</code></pre>');
  await renderMermaidBlocks(dom.window.document, async () => { throw new Error('invalid'); });

  assert.equal(dom.window.document.querySelector('pre')?.textContent, 'invalid');
  assert.equal(dom.window.document.querySelector('figure'), null);
});

test('does not render an already processed diagram twice', async () => {
  const dom = new JSDOM('<pre><code class="language-mermaid">flowchart LR\nA-->B</code></pre>');
  let calls = 0;
  const render = async () => { calls += 1; return { svg: '<svg></svg>' }; };

  await renderMermaidBlocks(dom.window.document, render);
  await renderMermaidBlocks(dom.window.document, render);

  assert.equal(calls, 1);
});
