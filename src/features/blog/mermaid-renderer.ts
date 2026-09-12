export type MermaidRender = (id: string, source: string) => Promise<{ svg: string }>;

export async function renderMermaidBlocks(root: ParentNode, render: MermaidRender): Promise<void> {
  const blocks = Array.from(root.querySelectorAll<HTMLElement>('pre > code.language-mermaid'));

  await Promise.all(blocks.map(async (code, index) => {
    const pre = code.parentElement;
    if (!pre || pre.dataset.mermaidState) return;
    pre.dataset.mermaidState = 'rendering';

    try {
      const { svg } = await render(`mermaid-${Date.now()}-${index}`, code.textContent ?? '');
      const document = (root as Document).createElement ? root as Document : code.ownerDocument;
      const figure = document.createElement('figure');
      figure.className = 'mermaid-diagram';
      figure.setAttribute('aria-label', 'Architecture diagram');
      figure.innerHTML = svg;
      pre.replaceWith(figure);
    } catch {
      delete pre.dataset.mermaidState;
    }
  }));
}
