if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-8ce990e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"c0e0241ee8fe4834a1113e94cd5c7083"},{url:"assets/[...all].c04801a4.js",revision:"a6e189bbe584e978b2b9e8d032a77aa2"},{url:"assets/[name].c1240214.js",revision:"9220399cf008dc7e2e7be58fac73dbdb"},{url:"assets/404.ea8f9019.js",revision:"e1438ad07de8aa8af3ff32d6e7c9769b"},{url:"assets/about.82a3de8f.js",revision:"64449313604f2e5422de776aaa4454fb"},{url:"assets/app.4f9a4fd7.js",revision:"bed42166f685a131f376be0389ce39e4"},{url:"assets/app.bc75b169.css",revision:"57e9c7b93cf4810c20fee9637c51e198"},{url:"assets/home.95871df3.js",revision:"f21f3b1c603225414e7405be902fda96"},{url:"assets/README.80dd52b7.js",revision:"0fdba30553293aaa4328198a4a51c125"},{url:"assets/vendor.2f217308.js",revision:"c49ab2bc3403c29ada041113523c182c"},{url:"assets/virtual_pwa-register.eafcfa93.js",revision:"00c0b49622f8216843c2e814a0e5c842"},{url:"index.html",revision:"3c43df596e7d2988bbb02dd69edf02a2"},{url:"readme.html",revision:"712b938847ff37216caae6f2f95dbab4"},{url:"upload.html",revision:"cc6e8c870fe4bf9d18a101b006751659"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
