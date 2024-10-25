<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Información</title>
    <link rel="stylesheet" href="{{ asset('css/editar.css') }}"> <!-- Si tienes un archivo CSS -->
</head>
<body>
    <div class="container">
        <h1>Modificar Información</h1>
        
        <form action="{{ route('guardar.informacion') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <!-- Sección: ¿Quiénes Somos? -->
            <section>
                <h2>¿Quiénes Somos?</h2>
                <textarea name="quienes_somos" rows="4" required>Lorem ipsum dolor sit amet...</textarea>
                <div>
                    <label for="image1">Imagen 1:</label>
                    <input type="file" name="image1" id="image1">
                </div>
                <div>
                    <label for="image2">Imagen 2:</label>
                    <input type="file" name="image2" id="image2">
                </div>
            </section>
            
            <!-- Sección: Misión y Visión -->
            <section>
                <div>
                    <h2>Misión</h2>
                    <textarea name="mision" rows="4" required>Lorem ipsum dolor sit amet...</textarea>
                </div>
                <div>
                    <h2>Visión</h2>
                    <textarea name="vision" rows="4" required>Lorem ipsum dolor sit amet...</textarea>
                </div>
            </section>
            
            <!-- Sección: Opiniones -->
            <section>
                <h2>Opiniones</h2>
                <textarea name="opiniones" rows="4" placeholder="Espacio para opiniones de clientes..."></textarea>
            </section>
            
            <button type="submit">Guardar Cambios</button>
        </form>
    </div>

    <script src="{{ asset('js/scripts.js') }}"></script> <!-- Si tienes un archivo JS -->
</body>
</html>
