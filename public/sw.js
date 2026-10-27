const VERSION = 'freedomsquaretbilisi-2026-10-26';
const SHELL = VERSION + '-shell';
const ASSETS = VERSION + '-assets';
const PRECACHE = ['/','/en/','/ru/','/favicon.svg','/site.webmanifest','/icon-192.png','/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('freedomsquaretbilisi-')&&!key.startsWith(VERSION)).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin) return;
  if(request.mode==='navigate') {
    event.respondWith((async()=>{
      try {
        const response = await fetch(request);
        if(response.status===200 && response.headers.get('Content-Type')?.includes('text/html') && !response.headers.get('X-Robots-Tag')?.includes('noindex')) {
          const cache = await caches.open(SHELL);
          await cache.put(request,response.clone());
        }
        return response;
      } catch {
        const cache = await caches.open(SHELL);
        const cached = await cache.match(request);
        return cached || new Response('Offline / ოფლაინ / Офлайн: this page is not saved. Reconnect and try again.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}});
      }
    })());
    return;
  }
  if (!/\.(?:css|js|svg|png|jpg|jpeg|webmanifest|txt)$/.test(url.pathname)) return;
  event.respondWith((async()=>{
    try {
      // Network first avoids holding old settings scripts indefinitely.
      const response = await fetch(request);
      if(response.status===200) { const cache = await caches.open(ASSETS); await cache.put(request,response.clone()); }
      return response;
    } catch {
      const cache = await caches.open(ASSETS);
      return await cache.match(request) || new Response(null,{status:503,headers:{'Cache-Control':'no-store'}});
    }
  })());
});
