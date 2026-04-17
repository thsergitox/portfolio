import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CEJsXefB.mjs';
import { manifest } from './manifest_Bcl74U_7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/_---lang_/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/_---lang_/blog.astro.mjs');
const _page4 = () => import('./pages/_---lang_/contact.astro.mjs');
const _page5 = () => import('./pages/_---lang_/cv.astro.mjs');
const _page6 = () => import('./pages/_---lang_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/[...lang]/blog/[slug].astro", _page2],
    ["src/pages/[...lang]/blog/index.astro", _page3],
    ["src/pages/[...lang]/contact.astro", _page4],
    ["src/pages/[...lang]/cv.astro", _page5],
    ["src/pages/[...lang]/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "72b0bd4c-87a8-44a0-b781-4a4db2f36be0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
