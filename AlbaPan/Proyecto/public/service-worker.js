// Nombre del cache y archivos a almacenar
const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',

];  


// Install: se activa al instalar el SW y se usa para almacenar archivos en caché.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Network response was not ok for ${url}`);
                }
                return cache.add(url);
              })
              .catch(error => {
                console.error(`Error al fetch para ${url}:`, error);
              });
          })
        );
      })
      .catch(error => {
        console.error('Error al agregar recursos a la caché:', error);
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
        if (response) {
          return response; // Retorna el recurso en caché
        }
        return fetch(event.request).catch(() => {
          // Manejo de error si fetch falla
          console.error('Error al recuperar el recurso:', event.request);
          throw new Error('No se pudo recuperar el recurso');
        });
      })
  );
});


// Sync: intenta reenviar solicitudes cuando el dispositivo vuelve a estar en línea.
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Abrimos IndexedDB y leemos los datos almacenados
      new Promise((resolve, reject) => {
        const dbRequest = indexedDB.open('laravel_react', 1);
        
        dbRequest.onsuccess = event => {
          const db = event.target.result;
          const tx = db.transaction('datosOffline', 'readonly');
          const store = tx.objectStore('datosOffline');
          const getRequest = store.getAll();
          
          getRequest.onsuccess = () => {
            const datosOffline = getRequest.result;

            // Enviamos cada entrada al servidor
            Promise.all(
              datosOffline.map(data =>
                fetch('/sync-endpoint', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                })
              )
            ).then(() => {
              // Después de enviar los datos, limpia el almacenamiento
              const txDelete = db.transaction('datosOffline', 'readwrite');
              const storeDelete = txDelete.objectStore('datosOffline');
              storeDelete.clear();
              resolve();
            }).catch(error => {
              console.error('Error al sincronizar datos:', error);
              reject(error);
            });
          };
        };

        dbRequest.onerror = error => {
          console.error('Error al abrir IndexedDB:', error);
          reject(error);
        };
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
      icon: '/icons/ALBAPAN-192x192.png'
    })
  );
});
