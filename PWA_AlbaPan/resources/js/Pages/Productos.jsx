import React from 'react';
import '../../css/productos.css';


function App() {
  return (
    <>


      <nav className="nav">
        <button className="nav-button">Todos</button>
        <button className="nav-button">Bebidas</button>
        <button className="nav-button">Promociones</button>
        <button className="nav-button">Pasteles</button>
        <button className="nav-button">Panadería</button>
      </nav>

      <main className="container">
        <h1 className="main-title">Nuestros Especiales del Mes</h1>
        <div className="product-grid">
          {/* Productos */}
        </div>
        <div className="pagination">
          <button className="page-button">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
        </div>
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

      <footer className="footer">
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
      </footer>
      <div className="footer-note">
        © 2024 Alba Pan Todos los Derechos Reservados
      </div>
    </>
  );
}

export default App ;
