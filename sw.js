const CACHE_NAME = 'guruagasthiya-v3-9-1-professional';
const APP_SHELL = ['./','./index.html','./guruagasthiya.html','./manifest.webmanifest','./kp-icon-192.png','./kp-icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('guru-agasthiya-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e => {
 if(e.request.method!=='GET') return;
 const u=new URL(e.request.url); if(u.origin!==self.location.origin) return;
 if(e.request.mode==='navigate'||/\\.html?$/.test(u.pathname)){
   e.respondWith(fetch(e.request).then(r=>{if(r.ok)caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone()));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./guruagasthiya.html')))); return;
 }
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
