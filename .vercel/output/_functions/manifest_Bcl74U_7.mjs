import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_nfpGb9yF.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DF4KIhCm.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sergi/Documents/projects/portfolio/","cacheDir":"file:///home/sergi/Documents/projects/portfolio/node_modules/.astro/","outDir":"file:///home/sergi/Documents/projects/portfolio/dist/","srcDir":"file:///home/sergi/Documents/projects/portfolio/src/","publicDir":"file:///home/sergi/Documents/projects/portfolio/public/","buildClientDir":"file:///home/sergi/Documents/projects/portfolio/dist/client/","buildServerDir":"file:///home/sergi/Documents/projects/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://pezo.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...lang]/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...lang]/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/contact.astro",{"propagation":"none","containsHead":true}],["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/cv.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/[...lang]/blog/[slug]@_@astro":"pages/_---lang_/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/[...lang]/blog/index@_@astro":"pages/_---lang_/blog.astro.mjs","\u0000@astro-page:src/pages/[...lang]/contact@_@astro":"pages/_---lang_/contact.astro.mjs","\u0000@astro-page:src/pages/[...lang]/cv@_@astro":"pages/_---lang_/cv.astro.mjs","\u0000@astro-page:src/pages/[...lang]/index@_@astro":"pages/_---lang_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bcl74U_7.mjs","/home/sergi/Documents/projects/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B4lRtSIN.mjs","/home/sergi/Documents/projects/portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/sergi/Documents/projects/portfolio/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C9P3iBLC.mjs","/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DapaXmXl.js","/home/sergi/Documents/projects/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/sergi/Documents/projects/portfolio/src/pages/[...lang]/contact.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"contact-form\"),t=n?.querySelector(\"[data-status]\")??null,s=n?.querySelector(\".contact-submit\")??null;if(n&&t&&s){const i=s.dataset.sendLabel??\"Send\",d=s.dataset.sendingLabel??\"Sending…\",l=t.dataset.success??\"\",a=t.dataset.error??\"\",f=t.dataset.verifyError??a,u=t.dataset.verifyMissing??a,c=t.dataset.captchaEnabled===\"true\";n.addEventListener(\"submit\",async y=>{y.preventDefault(),t.textContent=\"\",t.classList.remove(\"is-success\",\"is-error\");const g=new FormData(n),o=Object.fromEntries(g.entries());if(c&&!(typeof o[\"cf-turnstile-response\"]==\"string\"?o[\"cf-turnstile-response\"].trim():\"\")){t.textContent=u,t.classList.add(\"is-error\");return}s.disabled=!0,s.textContent=d;try{const e=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)}),r=await e.json().catch(()=>({}));if(!e.ok||!r.ok){const m=typeof r?.error==\"string\"?r.error:\"request_failed\";throw new Error(m)}t.textContent=l,t.classList.add(\"is-success\"),n.reset()}catch(e){const r=e instanceof Error?e.message:\"request_failed\";t.textContent=r===\"captcha_failed\"?f:a,t.classList.add(\"is-error\")}finally{s.disabled=!1,s.textContent=i;const e=window.turnstile;if(c&&e&&typeof e.reset==\"function\")try{e.reset()}catch{}}})}"]],"assets":["/_astro/_slug_.CznS5yd5.css","/cv.pdf","/favicon.svg","/humans.txt","/llms.txt","/og-default.png","/photo.jpeg","/robots.txt","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","/blog/palette-board.svg"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en","pt"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"M6DTInsXev5stYXXv+4bGicZjxr1lE0v453n1/3NVOw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
