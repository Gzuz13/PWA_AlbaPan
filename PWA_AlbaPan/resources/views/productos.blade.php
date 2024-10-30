<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlbaPan</title>
    <link rel="stylesheet" href="{{ asset('css/productos.css') }}">
</head>
<body>
    <header class="header">
        <div class="header-container">
            <img src="{{ asset('images/logo.png') }}" alt="Logo AlborPan" class="logo">
            <nav class="nav-links">
                <a href="{{ route('welcome') }}">Inicio</a>
                <a href="{{ route ('productos')}}">Nuestro Pan</a>
                <a href="{{ route('promociones') }}">Promociones</a>
                <a href="{{ route('lnuevo') }}">Lo Nuevo</a>
                <a href="{{ route('conocenos') }}">Conócenos</a>
            </nav>
        
        </div>
    </header>
    <nav class="nav">
        <button class="nav-button">Todos</button>
        <button class="nav-button">Bebidas</button>
        <button class="nav-button">Promociones</button>
        <button class="nav-button">Pasteles</button>
        <button class="nav-button">Panadería</button>
    </nav>
    <main class="container">
        <h1 class="main-title">Nuestros Especiales del Mes</h1>
        <div class="product-grid">
            <!-- Productos -->
        </div>
        <div class="pagination">
            <button class="page-button">1</button>
            <button class="page-button">2</button>
            <button class="page-button">3</button>
        </div>
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
