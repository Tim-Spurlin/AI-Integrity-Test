self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ai-integrity-v1').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/wasm/rust_wasm.wasm',
      '/styles/global.css',
      // Add more assets as needed
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});