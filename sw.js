// Nombre del cache y archivos a almacenar
const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install: se activa al instalar el SW y se usa para almacenar archivos en caché.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate: se activa al actualizar el SW, limpiando cachés antiguos.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Cache antiguo eliminado:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch: intercepta las solicitudes y las responde desde el caché si es posible.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Sync: intenta reenviar solicitudes cuando el dispositivo vuelve a estar en línea.
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Código para sincronizar datos aquí
      fetch('/sync-endpoint').then(response => {
        console.log('Datos sincronizados:', response);
      })
    );
  }
});

// Push: se activa cuando se recibe una notificación push.
self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'Mensaje Push recibido';
  event.waitUntil(
    self.registration.showNotification('Notificación', {
      body: data,
      icon: '/icons/icon-192x192.png'
    })
  );
});
