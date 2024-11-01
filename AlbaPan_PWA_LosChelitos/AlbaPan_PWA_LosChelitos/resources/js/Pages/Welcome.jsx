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
          <link rel="manifest" href="/manifest.json"/>
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
            <section className='somos'>
              <h2>¿Quiénes Somos?</h2>
               < div class="cuadro-texto">
                    <p><em>La panadería es una empresa familiar con una rica historia que se remonta a hace 43 años. Fundada sobre la pasión y el conocimiento transmitidos por el señor Samuel Alba Barriga, uno de los primeros maestros panaderos de la ciudad de Acámbaro, Guanajuato, México, la familia ha mantenido viva la tradición de la panadería artesanal desde sus inicios.</em></p>

                    <p><em>El señor, conocido por su dedicación y habilidad, estableció la panadería con el firme propósito de ofrecer a la comunidad productos frescos y de alta calidad, elaborados con técnicas tradicionales. A lo largo de los años, su legado ha sido conservado, asegurándose que cada pieza de pan que sale del horno refleje el mismo cuidado y artesanía que él inculcó.</em></p>

                    <p><em>Con el paso del tiempo, han integrado nuevas tecnologías y métodos modernos para mejorar la producción, sin perder de vista sus raíces. Este equilibrio entre tradición y modernidad les permite seguir ofreciendo los mismos sabores auténticos que sus clientes han amado por décadas, mientras innovan para satisfacer las necesidades del presente.</em></p>

                    <p><em>Hoy, la panadería sigue siendo un pilar en la ciudad, un lugar donde las generaciones se encuentran para disfrutar de un pan que cuenta una historia de tradición, esfuerzo y amor por el oficio.</em></p>
                    
                </ div>

                <div className='Fondo'>
                  <img src="/images/ALBAPANFONDO.PNG" alt="" />
                </div>

            </section>

            <section class="contenedor">
    <div class="mision">
        <h2>Misión</h2>
        <p><em>"Ofrecer productos de panadería artesanal de alta calidad, elaborados con técnicas tradicionales y modernizadas, que preservan el legado de nuestro fundador mientras integramos nuevas tecnologías. Nos comprometemos a satisfacer las necesidades de nuestros clientes con productos frescos y auténticos, fomentando un ambiente acogedor y promoviendo la responsabilidad social y ambiental."</em></p>
    </div>

    <div class="vision">
        <h2>Visión</h2>
        <p><em>"Ser una panadería líder en nuestra comunidad y más allá, reconocida por mantener viva la tradición del pan artesanal mientras nos adaptamos a las innovaciones tecnológicas. Aspiramos a ser un referente en sostenibilidad, calidad y responsabilidad social, contribuyendo activamente al bienestar de la comunidad."</em></p>
    </div>

    <div class="valores">
        <h2>Valores</h2>
        <p><em>
            • Tradición: Respetamos y mantenemos vivas las técnicas y recetas transmitidas por generaciones.<br />
            • Innovación: Integramos tecnologías modernas sin perder la esencia de la panadería artesanal.<br />
            • Calidad: Nos esforzamos por ofrecer productos frescos, auténticos y de la más alta calidad.<br />
            • Sostenibilidad: Nos comprometemos con prácticas responsables que minimicen el impacto ambiental y fomenten el uso de recursos sostenibles.<br />
        </em></p>
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
            
                <li>Sucursal</li>
                <li>Contáctanos</li>
              </ul>
            </div>
            <div className="column">
              <h3>Invitados</h3>
              <ul>
                <li>Mi Cuenta</li>
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