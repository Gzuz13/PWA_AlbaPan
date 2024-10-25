<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlbaPan</title>
    <link rel="stylesheet" href="/css/conocenos.css">

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
                <a href="#">Contáctanos</a>
            </nav>
            <div class="header-actions">
            <a href="{{ route('carrito') }}"><img src="{{ asset('images/cart-icon.png') }}" alt="Carrito" class="icon"></a>
            <a href="{{ route('login') }}"><img src="{{ asset('images/user-icon.png') }}" alt="Usuario" class="icon"></a>
                <button class="pickup-button">Recoger</button>
            </div>
        </div>
    </header>

    <div class="contact-form">
    <h1>Contáctanos</h1>
    <p>Aquí encontrarás nuestra información de contacto. Si tienes algún mensaje para nosotros, estaremos encantados de contestarte en el menor tiempo posible. Déjanos saber tus comentarios a través del siguiente formulario.</p>
    <form>
        <label for="name"></label>
        <input type="text" id="name" name="name" class="full-width" placeholder="Ingresa tu nombre">

        <label for="street"></label>
        <input type="text" id="street" name="street" class="full-width" placeholder="Ingresa tu calle">

        <div class="city-postal-container">
            <div class="half-width">
                <label for="city"></label>
                <input type="text" id="city" name="city" class="full-width" placeholder="Ingresa tu ciudad">
            </div>
            <div class="half-width">
                <label for="postal-code"> </label>
                <input type="text" id="postal-code" name="postal-code" class="full-width" placeholder="Ingresa código postal">
            </div>
        </div>

        <label for="phone"></label>
        <input type="text" id="phone" name="phone" class="full-width" placeholder="Ingresa tu teléfono">

        <label for="email"></label>
        <input type="email" id="email" name="email" class="full-width" placeholder="Ingresa tu email">

        <label for="ideas"></label>
        <textarea id="ideas" name="ideas" class="full-width" placeholder="Escribe tus ideas aquí"></textarea>

        <label for="file">Añade algún documento extra</label>
        <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.jpg,.png" class="full-width">

        <div class="terms">
    <label>
        <input type="checkbox" id="terms" name="terms">
        Acepto los términos y condiciones que conlleva llenar con información falsa
    </label>
</div>


        <button type="submit">ENVIAR</button>
    </form>
    <div class="additional-contact">
    <p>Teléfono: 11 111 111 11</p>
    <p>E-MAIL: info@company.com</p>
    <p>HELPDESK: <a href="https://helpdesk.com">https://helpdesk.com</a></p>
</div>

</div>

<div class="section-title">Nuestra Ubicación</div>
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.635167775748!2d14.41144031571762!3d50.08120397942557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e1d9b7b7b7%3A0x400af0f6614e7b7b!2sNárodní divadlo!5e0!3m2!1ses!2scz!4v1633024823456!5m2!1ses!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="section-title">Nuestras Redes Sociales</div>
    <div class="social-icons">
        <a href="https://www.instagram.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"></a>
        <a href="https://www.facebook.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook"></a>
        <a href="https://www.tiktok.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg" alt="TikTok"></a>
        <a href="https://www.twitter.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter"></a>
        <a href="https://mail.google.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail"></a>
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


    