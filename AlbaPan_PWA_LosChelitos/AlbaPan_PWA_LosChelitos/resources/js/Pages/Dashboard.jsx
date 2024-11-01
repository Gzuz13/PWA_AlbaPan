import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import '../../css/productos/productos.css'
import Promotions from './Promotions';

export default function Dashboard() {

    return (
        <AuthenticatedLayout
            header={
              <h2 className="text-xl font-semibold leading-tight text-dark-800 dark:text-dark-200" style={{ margin: 0, textAlign: 'center' }}>
              Nuestras Productos
          </h2>
            }  
        >
        <body>
        <nav className="nav">
        <button className="nav-button">Todos</button>
        <button className="nav-button">Bebidas</button>
        <button className="nav-button">Promociones</button>
        <button className="nav-button">Pasteles</button>
        <button className="nav-button">Panadería</button>
      </nav>


        {/* Aquí se incluye el componente de promociones */}
        <Promotions />

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
        </body>    
        </AuthenticatedLayout>
    );
}

