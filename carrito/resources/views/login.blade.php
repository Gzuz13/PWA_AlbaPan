<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css"> <!-- Asegúrate de que la ruta sea correcta -->
</head>
<body>

<header class="header">
        <div class="header-container">
            <img src="{{ asset('images/ALBAPAN.png') }}" alt="Logo AlborPan" class="logo">
            <nav class="nav-links">
            <a href="{{ route('index') }}">Inicio</a>
                <a href="{{ route('productos') }}">Nuestro Pan</a>
                <a href="{{ route('promociones') }}">Promociones</a>
                <a href="{{ route('lnuevo') }}">Lo Nuevo</a>
                <a href="{{ route('conocenos') }}">Conócenos</a>
            </nav>
            <div class="header-actions">
                <a href="{{ route('carrito') }}"><img src="{{ asset('images/carrito.png') }}" alt="Carrito" class="icon"></a>
                <a href="{{ route('login') }}"><img src="{{ asset('images/usuario.png') }}" alt="Usuario" class="icon"></a>
                <button class="pickup-button">Recoger</button>
            </div>
        </div>
    </header>

    <!-- Formulario de login normal -->
    <div class="login-form">
        <h2>Bienvenido de nuevo</h2>
        <form>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required>
            <div class="remember-me">
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Recuerdame</label>
            </div>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
            <button type="submit" class="btn-login">Iniciar sesión</button>
            <button class="btn-google">
                <img src="google-icon.png" alt="Google">O iniciar sesión con Google
            </button>
        </form>
        <p>No tienes una cuenta? <a href="#" onclick="abrirRegistroFormulario()">Regístrate ahora</a></p>
    </div>

    <div id="formularioRegistro" class="registro-modal">
        <div class="registro-modal-content">
            <span class="registro-close" onclick="cerrarRegistroFormulario()">&times;</span>
            <h2>Crear una Cuenta</h2>
            <form>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required>
                <label for="nombre">Apellidos</label>
                <input type="text" id="Apellidos" name="apellidos" required>
                <label for="emailRegistro">Email</label>
                <input type="email" id="emailRegistro" name="emailRegistro" required>
                <label for="passwordRegistro">Contraseña</label>
                <input type="password" id="passwordRegistro" name="passwordRegistro" required>
                <button type="submit" class="btn-registro">Registrarse</button>
            </form>
            <p>¿Ya tienes una cuenta? <a href="#" onclick="cerrarRegistroFormulario()">Inicia sesión</a></p>
        </div>
    </div>

    <script>
        function abrirRegistroFormulario() {
            document.getElementById('formularioRegistro').style.display = 'block';
        }

        function cerrarRegistroFormulario() {
            document.getElementById('formularioRegistro').style.display = 'none';
        }

        // Cerrar el modal si se hace clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('formularioRegistro');
            if (event.target === modal) {
                cerrarRegistroFormulario();
            }
        }
    </script>
</body>
</html>
