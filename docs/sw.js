if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7aceb332"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BPKhGdin.js",revision:null},{url:"assets/index-C1FzKA1m.css",revision:null},{url:"index.html",revision:"d10623be57275f96e813b9dd92c59602"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/192.png",revision:"e4b9b98e4e6fc84a0e742988c534ef3f"},{url:"icons/512.png",revision:"24bf9d36a780d94ec4f506e8873e941c"},{url:"manifest.webmanifest",revision:"a9ab6e5bde140d3f2fe332030ed7d795"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination||"style"===e.destination),new e.StaleWhileRevalidate({cacheName:"assets-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
