import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import '../../css/nuevo/nuevo.css'


export default function Nuevo()  {
  return (

    <AuthenticatedLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-dark-800 dark:text-dark-200" style={{ margin: 0, textAlign: 'center' }}>
            Nuevos Productos
        </h2>
    }
>


      <body>
      <div>
    <div className="main">
      <div className="product">
      <img src="/images/20210810_163950.jpg" alt="Producto 1" />
        <h2>Nombre del producto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Detalles del producto</a>
        <button>Lo Quiero</button>
      </div>
      <div className="product">
      <img src="/images/20210810_163952.jpg" alt="Producto 2" />
        <h2>Nombre del producto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Detalles del producto</a>
        <button>Lo Quiero</button>
      </div>

      <div className="product">
      <img src="/images/20210810_164012.jpg" alt="Producto 3" />
        <h2>Nombre del producto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Detalles del producto</a>
        <button>Lo Quiero</button>
      </div>

      <div className="product">
      <img src="/images/20210810_164018.jpg" alt="Producto 4" />
        <h2>Nombre del producto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Detalles del producto</a>
        <button>Lo Quiero</button>
      </div>
    </div>

      <div className="info-container">
        <div className="icon-text"><div className="icon">🏠</div><div className="text">PICK UP EN TIENDA</div></div>
        <div className="icon-text"><div className="icon">🎂</div><div className="text">GARANTÍA DE SATISFACCIÓN</div></div>
        <div className="icon-text"><div className="icon">📞</div><div className="text">SERVICIO AL CLIENTE</div></div>
        <div className="icon-text"><div className="icon">💳</div><div className="text">PAGO SEGURO</div></div>
      </div>

      <div className="footer">
        <div className="column">
          <h3>Alba Pan</h3>
          <ul><li>Especiales</li><li>Noticias</li><li>Sucursal</li><li>Contáctanos</li></ul>
        </div>
        <div className="column">
          <h3>Invitados</h3>
          <ul><li>Mi Cuenta</li><li>Atención a clientes</li><li>Facturación</li></ul>
        </div>
        <div className="column">
          <h3>Legales</h3>
          <ul><li>Aviso de Privacidad</li><li>Términos y Condiciones</li></ul>
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
      <div className="footer-note">© 2024 Alba Pan Todos los Derechos Reservados</div>
    </div>
      </body>

    

    </AuthenticatedLayout>
  );
};

