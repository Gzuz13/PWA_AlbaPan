<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlbaPan</title>
    <link rel="stylesheet" href="/css/carrito.css">
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
                <a href="#"><img src="{{ asset('images/cart-icon.png') }}" alt="Carrito" class="icon"></a>
                <a href="{{ route('login') }}"><img src="{{ asset('images/user-icon.png') }}" alt="Usuario" class="icon"></a>
                <button class="pickup-button">Recoger</button>
            </div>
        </div>
    </header>
    <div class="carrito">
    <h1>Mi carrito</h1>
    <div class="contenedor">
        <div class="producto">

         <!-- Informacion Producto -->
          
            <div class="producto-info"> 
            <h3 class="producto-titulo">Producto</h3> <!-- Encabezado agregado -->
                <div class="producto-imagen"></div>
                <div class="producto-detalles">
                    <p>Pan de muerto</p>
                    <p>$45</p>
                </div>
            </div>
            
            <!-- Cantidad y eliminar -->
            <div class="producto-cantidad">
            <h3 class="producto-titulo">Cantidad</h3> <!-- Encabezado agregado -->
                        <div class="cantidad-controles">
                    <button class="cantidad-btn">&lt;</button>
                    <span>2</span>
                    <button class="cantidad-btn">&gt;</button>
                </div>
                <a href="#" class="eliminar">Eliminar</a> <!-- Esto se colocará debajo -->
            </div>

            <!-- Total del producto -->
            <div class="producto-total">
            <h3 class="producto-titulo">Total</h3> <!-- Encabezado agregado -->
                <p>$90</p>
            </div>
        </div>


    <div class="resumen">
        <p>Subtotal <span>$90</span></p>
        <hr class="linea-divisoria">
        <div class="sucursal">
            <p>Sucursal para recoger pedido</p>
            <hr class="linea-divisoria">
            <p>Niño artillero # 8</p>
            <p>Acámbaro, Guanajuato, 38600</p>
            <p>Lun a Dom de 08:00 a 21:00 hrs</p>
            <p>445 314 9985</p>
            <hr class="linea-divisoria">
            <p>Al continuar, acepto los Terminos y Condiciones</p>
        </div>
        <button class="ir-pagar">Ir a pagar</button>
    </div>
</div>
    </div>
</body>
</html>
