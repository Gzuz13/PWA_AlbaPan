
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlbaPan</title>
    <link rel="stylesheet" href="{{ asset('css/index.blade.css') }}">
</head>
<body>
<header class="header">
        <div class="header-container">
            <img src="{{ asset('images/logo.png') }}" alt="Logo AlborPan" class="logo">
            <nav class="nav-links">
                <a href="{{ route('index') }}">Inicio</a>
                <a href="{{ route('productos') }}">Nuestro Pan</a>
                <a href="{{ route('promociones') }}">Promociones</a>
                <a href="{{ route('lnuevo') }}">Lo Nuevo</a>
                <a href="{{ route('conocenos') }}">Conócenos</a>
            </nav>
            <div class="header-actions">
            <a href="{{ route('carrito') }}"><img src="{{ asset('images/cart-icon.png') }}" alt="Carrito"></a>
            <a href="{{ route('login') }}"><img src="{{ asset('images/user-icon.png') }}" alt="Usuario"></a>
                <button class="pickup-button">Recoger</button>
            </div>
        </div>
    </header>

    <div>
    <h1>Nuestros Especiales del Mes</h1>
    <div class="specials">
 
    </div>
    <section>
        <h2>¿Quiénes Somos?</h2>
        <p><em>Lorem ipsum dolor sit amet...</em></p>
        <div>
            <img src="{{ asset('images/about-image1.png') }}" alt="Imagen 1">
            <img src="{{ asset('images/about-image2.png') }}" alt="Imagen 2">
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
        <!-- Espacio para opiniones de clientes -->
    </section>
</div>
    <main>
        @yield('content')
    </main>
    
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
