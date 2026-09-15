import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const pagePath = new URL('../src/pages/index.astro', import.meta.url);
const robotsPath = new URL('../public/robots.txt', import.meta.url);
const sitemapPath = new URL('../public/sitemap.xml', import.meta.url);

test('publishes Sergio Pezo identity metadata for search engines', async () => {
  const page = await readFile(pagePath, 'utf8');

  assert.match(page, /Sergio Sebastián Pezo Jiménez \| Ingeniero de software/);
  assert.match(page, /<link rel="canonical" href="https:\/\/pezo\.dev\/" \/>/);
  assert.match(page, /"@type": "Person"/);
  assert.match(page, /"name": "Sergio Sebastián Pezo Jiménez"/);
  assert.match(page, /"name": "Universidad Nacional de Ingeniería"/);
  assert.match(page, /"name": "Universidade Estadual de Campinas"/);
  assert.match(page, /<script type="application\/ld\+json" is:inline set:html=/);
});

test('publishes crawlable robots and sitemap files', async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(robotsPath, 'utf8'),
    readFile(sitemapPath, 'utf8'),
  ]);

  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/pezo\.dev\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/pezo\.dev\/<\/loc>/);
});

test('centers the placeholder content and photo on mobile', async () => {
  const page = await readFile(pagePath, 'utf8');

  assert.match(page, /@media \(max-width: 650px\)[\s\S]*?\.copy \{ text-align: center; \}/);
  assert.match(page, /@media \(max-width: 650px\)[\s\S]*?\.progress \{ margin-inline: auto; \}/);
  assert.match(page, /@media \(max-width: 650px\)[\s\S]*?img \{[\s\S]*?justify-self: center;/);
});
