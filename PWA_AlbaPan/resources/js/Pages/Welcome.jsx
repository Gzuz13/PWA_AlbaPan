import React from 'react';
import '../../css/welcome.css';
import { Link } from '@inertiajs/react';


function App() {
  return (
    <>
      <html lang="es">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>AlbaPan</title>

        </head>
        <body>
          <header className="header">
            <div className="header-container">
              <img src="/path/to/your/images/logo.png" alt="Logo AlbaPan" className="logo" />

              <div className="header-actions">
                <Link
                    href={route('login')}
                >
                    Iniciar Sesion
                </Link>
                 <Link
                    href={route('register')}
                >
                    Register
                </Link>
              </div>
            </div>
          </header>

          <div>
            <h1>Nuestros Especiales del Mes</h1>
            <div className="specials">
              {/* Aquí puedes añadir contenido especial */}
            </div>
            <section>
              <h2>¿Quiénes Somos?</h2>
              <p><em>Lorem ipsum dolor sit amet...</em></p>
              <div>
                <img src="/path/to/your/images/about-image1.png" alt="Imagen 1" />
                <img src="/path/to/your/images/about-image2.png" alt="Imagen 2" />
              </div>
            </section>
            <section>
              <div>
                <h2>Misión</h2>
                <p><em>Lorem ipsum dolor sit amet...</em></p>
              </div>
              <div>
                <h2>Visión</h2>
                <p><em>Lorem ipsum dolor sit amet...</em></p>
              </div>
            </section>
            <section>
              <h2>Opiniones</h2>
              {/* Espacio para opiniones de clientes */}
            </section>
          </div>

          <main>
            {/* Aquí puedes añadir otros componentes o contenido */}
          </main>

          <div className="info-container">
            <div className="icon-text">
              <div className="icon">🏠</div>
              <div className="text">PICK UP EN TIENDA</div>
            </div>
            <div className="icon-text">
              <div className="icon">🎂</div>
              <div className="text">GARANTÍA DE SATISFACCIÓN</div>
            </div>
            <div className="icon-text">
              <div className="icon">📞</div>
              <div className="text">SERVICIO AL CLIENTE</div>
            </div>
            <div className="icon-text">
              <div className="icon">💳</div>
              <div className="text">PAGO SEGURO</div>
            </div>
          </div>

          <div className="footer">
            <div className="column">
              <h3>Alba Pan</h3>
              <ul>
                <li>Especiales</li>
                <li>Noticias</li>
                <li>Sucursal</li>
                <li>Contáctanos</li>
              </ul>
            </div>
            <div className="column">
              <h3>Invitados</h3>
              <ul>
                <li>Mi Cuenta</li>
                <li>Atención a clientes</li>
                <li>Facturación</li>
              </ul>
            </div>
            <div className="column">
              <h3>Legales</h3>
              <ul>
                <li>Aviso de Privacidad</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
            <div className="column">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <div className="icon">⚪</div>
                <div className="icon">⚪</div>
                <div className="icon">⚪</div>
                <div className="icon">⚪</div>
                <div className="icon">⚪</div>
              </div>
            </div>
          </div>
          <div className="footer-note">
            © 2024 Alba Pan Todos los Derechos Reservados
          </div>
        </body>
      </html>
    </>
  );
}

export default App;