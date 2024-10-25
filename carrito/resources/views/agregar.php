<!-- resources/views/create.blade.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Producto</title>
</head>
<body>
    <h1>Agregar Producto</h1>
    
    <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="name">Nombre del Producto:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="price">Precio:</label>
        <input type="text" id="price" name="price" required>

        <label for="image">Imagen:</label>
        <input type="file" id="image" name="image" accept="image/*" required>

        <button type="submit">Agregar Producto</button>
    </form>
</body>
</html>
