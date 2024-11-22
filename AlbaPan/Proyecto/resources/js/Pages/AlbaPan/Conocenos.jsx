import React from "react";
import Layout from '@/Layouts/Layout'

import "../../../css/conocenos/conocenos.css";  // Asegúrate de que esta ruta sea correcta

export default function Conocenos() {
  return (
    <Layout>
      <head>
      <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#ffd700"/>
            <meta name="robots" content="index, follow"/>


            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="AlbaPan"/>


            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" sizes="192x192" href="/icons/ALBAPAN-192X192.png"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>


            <meta property="og:title" content="AlbaPan"/>
            <meta property="og:description" content="Panadería, Pan, Pasteles, Pan Fresco, AlbaPan, Productos de Panadería, Panadería en Línea, Pedidos de Pan, PWA panadería"/>
            <meta property="og:image" content="/images/ALBAPAN.png"/>
            <meta property="og:url" content="https://www.facebook.com/profile.php?id=100071772542007&mibextid=JRoKGix"/>
</head>
      </head>
      <br />

    <div className="container">
      <h2 className="text-xl font-semibold leading-tight text-dark-800 dark:text-dark-200" style={{ margin: 0, textAlign: 'center' }}>
        Acerca de Nosotros
      </h2>
      <br />

      <div className="contact-form">
        <h1>Contáctanos</h1>
        <p>
          Aquí encontrarás nuestra información de contacto. Si tienes algún mensaje para nosotros, estaremos encantados de contestarte en el menor tiempo posible. Déjanos saber tus comentarios a través del siguiente formulario.
        </p>
        <form>
          <input type="text" id="name" name="name" className="full-width" placeholder="Ingresa tu nombre" />
          <input type="text" id="street" name="street" className="full-width" placeholder="Ingresa tu calle" />
          <div className="city-postal-container">
            <div className="half-width">
              <input type="text" id="city" name="city" className="full-width" placeholder="Ingresa tu ciudad" />
            </div>
            <div className="half-width">
              <input type="text" id="postal-code" name="postal-code" className="full-width" placeholder="Ingresa código postal" />
            </div>
          </div>
          <input type="text" id="phone" name="phone" className="full-width" placeholder="Ingresa tu teléfono" />
          <input type="email" id="email" name="email" className="full-width" placeholder="Ingresa tu email" />
          <textarea id="ideas" name="ideas" className="full-width" placeholder="Escribe tus ideas aquí"></textarea>
          <label htmlFor="file">Añade algún documento extra</label>
          <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.jpg,.png" className="full-width" />
          <div className="terms">
            <label>
              <input type="checkbox" id="terms" name="terms" />
              Acepto los términos y condiciones que conlleva llenar con información falsa
            </label>
          </div>
          <button type="submit">ENVIAR</button>
        </form>
        <div className="additional-contact">
          <p>Teléfono: 11 111 111 11</p>
          <p>E-MAIL: info@company.com</p>
          <p>HELPDESK: <a href="https://helpdesk.com" target="_blank" rel="noopener noreferrer">https://helpdesk.com</a></p>
        </div>
      </div>

      <div className="section-title">Nuestra Ubicación</div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.635167775748!2d14.41144031571762!3d50.08120397942557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e1d9b7b7b7%3A0x400af0f6614e7b7b!2sNárodní%20divadlo!5e0!3m2!1ses!2scz!4v1633024823456!5m2!1ses!2scz"
          width="400"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="section-title">Nuestras Redes Sociales</div>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
        </a>
        
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
        </a>
      </div>

      <div className="info-container">
        <div className="icon-text"><div className="icon">🏠</div><div className="text">PICK UP EN TIENDA</div></div>
        <div className="icon-text"><div className="icon">🎂</div><div className="text">GARANTÍA DE SATISFACCIÓN</div></div>
        <div className="icon-text"><div className="icon">📞</div><div className="text">SERVICIO AL CLIENTE</div></div>
        <div className="icon-text"><div className="icon">💳</div><div className="text">PAGO SEGURO</div></div>
      </div>

      
          
        
      
      
    </div>
    </Layout>
  );
}
