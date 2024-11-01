import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import '../../css/carrito/carrito.css'


export default function Carrito() {

    const product = {
        title: 'Producto',
        name: 'Pan de muerto',
        price: 45,
        quantity: 2,
        total: 90,
      };

      
    return (
        <AuthenticatedLayout
            header={
              <h2 className="text-xl font-semibold leading-tight text-dark-800 dark:text-dark-200" style={{ margin: 0, textAlign: 'center' }}>
              Nuestras Productos
          </h2>
                
            }
            
        >
        <body className='bcarrito'>
        <div className="carrito">
      <h1>Mi carrito</h1>
      <div className="contenedor">
        <div className="producto">
          {/* Información Producto */}
          <div className="producto-info">
            <h3 className="producto-titulo">{product.title}</h3>
            <div className="producto-imagen"></div>
            <div className="producto-detalles">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          </div>

          {/* Cantidad y eliminar */}
          <div className="producto-cantidad">
            <h3 className="producto-titulo">Cantidad</h3>
            <div className="cantidad-controles">
              <button className="cantidad-btn">&lt;</button>
              <span>{product.quantity}</span>
              <button className="cantidad-btn">&gt;</button>
            </div>
            <a href="#" className="eliminar">Eliminar</a>
          </div>

          {/* Total del producto */}
          <div className="producto-total">
            <h3 className="producto-titulo">Total</h3>
            <p>${product.total}</p>
          </div>
        </div>

        <div className="resumen">
          <p>Subtotal <span>${product.total}</span></p>
          <hr className="linea-divisoria" />
          <div className="sucursal">
            <p>Sucursal para recoger pedido</p>
            <hr className="linea-divisoria" />
            <p>Niño artillero # 8</p>
            <p>Acámbaro, Guanajuato, 38600</p>
            <p>Lun a Dom de 08:00 a 21:00 hrs</p>
            <p>445 314 9985</p>
            <hr className="linea-divisoria" />
            <p>Al continuar, acepto los Términos y Condiciones</p>
          </div>
          <button className="ir-pagar">Ir a pagar</button>
        </div>
      </div>
    </div>


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
       
    
        </AuthenticatedLayout>
    );
}
