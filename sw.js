const C='myhouse3d-v3',A=['./','index.html','lib/three.module.js','lib/three.core.js','lib/OrbitControls.js','lib/pdf.min.mjs','lib/pdf.worker.min.mjs','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
