import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (

    <div className="layout">
      {/* Header */}
        <div>
            <header className="header">
                <div className="logo-section">
                    <img src="/path/to/logo.png" alt="Logo" className="logo" />
                    <button className="cart-button">
                    <img src="/path/to/cart-icon.png" alt="Cart" />
                    </button>
                </div>
                <button className="pickup-button">Recoger</button>
            </header>

            {/* Main Content */}
            <main className="main-content">
            {children}
            </main>

            {/* Footer */}

            <div className="footer-icons">
                <div className="footer-icon">
                <img src="/path/to/pickup-icon.png" alt="Pick up" />
                <p>PICK UP EN TIENDA</p>
                </div>
                <div className="footer-icon">
                <img src="/path/to/guarantee-icon.png" alt="Garantía" />
                <p>GARANTÍA DE SATISFACCIÓN</p>
                </div>
                <div className="footer-icon">
                <img src="/path/to/customer-service-icon.png" alt="Servicio" />
                <p>SERVICIO AL CLIENTE</p>
                </div>
                <div className="footer-icon">
                <img src="/path/to/payment-icon.png" alt="Pago seguro" />
                <p>PAGO SEGURO</p>
                </div>
            </div>

            <footer className="footer">
            

            <div className="footer-bottom">
                <div className="footer-column">
                <h3>Alba Pan</h3>
                <ul>
                    <li>Especiales</li>
                    <li>Noticias</li>
                    <li>Sucursal</li>
                    <li>Contáctanos</li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Invitados</h3>
                <ul>
                    <li>Mi Cuenta</li>
                    <li>Atención a clientes</li>
                    <li>Facturación</li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Legales</h3>
                <ul>
                    <li>Aviso de Privacidad</li>
                    <li>Términos y Condiciones</li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Síguenos</h3>
                <div className="social-icons">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; 2024 Alba Pan Todos los Derechos Reservados</p>
            </div>
            </footer>
        </div>
    </div>

    
  );
}

export default Layout;