// src/serviceWorkerRegistration.js

// Este archivo es responsable de registrar un service worker
// Puedes copiar el contenido básico de aquí y adaptarlo según tus necesidades

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] es el localhost en IPv6
    window.location.hostname === '[::1]' ||
    // Comprueba si se está ejecutando en un puerto de localhost
    window.location.port === '3000'
  );
  
  export function register(config) {
    if ('serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto es solo para desarrollo. Puedes ver los service workers de localhost en
          // http://localhost:3000/service-worker.js
          checkValidServiceWorker(swUrl, config);
        } else {
          // Registra el service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installing = registration.installing;
          if (installing == null) {
            return;
          }
          installing.onstatechange = () => {
            if (installing.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Hay un nuevo service worker disponible, notifica al usuario
                console.log(
                  'Nuevo contenido disponible; recargue la página.'
                );
              } else {
                // El contenido se ha almacenado en caché por primera vez.
                console.log('Contenido almacenado en caché para uso sin conexión.');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error al registrar el service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then(response => {
        // Asegúrate de que el service worker existe
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No hay ningún service worker, así que desregistrar
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
          });
        } else {
          // Hay un service worker, registra uno válido
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No se pudo conectar con el servidor. Probando contenido de caché.'
        );
      });
  }
  