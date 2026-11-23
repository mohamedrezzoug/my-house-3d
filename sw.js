const C='myhouse3d-v6';
const A=['./','index.html','lib/three.module.js','lib/three.core.js','lib/OrbitControls.js','lib/pdf.min.mjs','lib/pdf.worker.min.mjs','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// الشبكة أولاً (باش تبان التحديثات دائماً)، والكاش كاحتياط بلا إنترنت
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));
});
