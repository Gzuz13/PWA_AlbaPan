<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlbaPan</title>
    <link rel="stylesheet" href="/css/promociones.css">

</head>
<body>
    <header class="header">
        <div class="header-container">
            <img src="{{ asset('images/logo.png') }}" alt="Logo AlborPan" class="logo">
            <nav class="nav-links">
                <a href="{{ route('index') }}">Inicio</a>
                <a href="{{ route('productos') }}">Nuestro Pan</a>
                <a href="#">Promociones</a>
                <a href="{{ route('lnuevo') }}">Lo Nuevo</a>
                <a href="{{ route('conocenos') }}">Conócenos</a>
            </nav>
            <div class="header-actions">
                <a href="{{ route('carrito') }}"><img src="{{ asset('images/cart-icon.png') }}" alt="Carrito" class="icon"></a>
                <a href="{{ route('login') }}"><img src="{{ asset('images/user-icon.png') }}" alt="Usuario" class="icon"></a>
                <button class="pickup-button">Recoger</button>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
        <div class="promotion">
            <img src="placeholder.png" alt="Promoción">
            <p>Nombre Promoción</p>
            <button>Detalles</button>
        </div>
    </div>

    <div class="info-container">
    <div class="icon-text">
            <div class="icon">🏠</div>
            <div class="text">PICK UP EN TIENDA</div>
        </div>
        <div class="icon-text">
            <div class="icon">🎂</div>
            <div class="text">GARANTÍA DE SATISFACCIÓN</div>
        </div>
        <div class="icon-text">
            <div class="icon">📞</div>
            <div class="text">SERVICIO AL CLIENTE</div>
        </div>
        <div class="icon-text">
            <div class="icon">💳</div>
            <div class="text">PAGO SEGURO</div>
        </div>
    </div>

    </div>
    <div class="footer">
        <div class="column">
            <h3>Alba Pan</h3>
            <ul>
                <li>Especiales</li>
                <li>Noticias</li>
                <li>Sucursal</li>
                <li>Contáctanos</li>
            </ul>
        </div>
        <div class="column">
            <h3>Invitados</h3>
            <ul>
                <li>Mi Cuenta</li>
                <li>Atención a clientes</li>
                <li>Facturación</li>
            </ul>
        </div>
        <div class="column">
            <h3>Legales</h3>
            <ul>
                <li>Aviso de Privacidad</li>
                <li>Términos y Condiciones</li>
            </ul>
        </div>
        <div class="column">
            <h3>Síguenos</h3>
            <div class="social-icons">
                <div class="icon">⚪</div>
                <div class="icon">⚪</div>
                <div class="icon">⚪</div>
                <div class="icon">⚪</div>
                <div class="icon">⚪</div>
            </div>
        </div>
    </div>
    <div class="footer-note">
        © 2024 Alba Pan Todos los Derechos Reservados
    </div>

</body>
</html>
