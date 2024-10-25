<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Informacion; // Asegúrate de importar el modelo

class ProductController extends Controller
{
    // Métodos para manejar la lógica del controlador
    public function index()
    {
        // Obtener todos los productos
        $products = Product::all();
        return view('index', compact('products')); // Pasar productos a la vista

        $informacion = Informacion::first(); // Obtener la información de la base de datos
        return view('index', compact('informacion')); // Asegúrate de pasar la variable a la vista
    }

    public function create()
    {
        return view('agregar'); // Renderiza la vista del formulario
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validación de imagen
        ]);

        // Guardar la imagen
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        // Crear el producto
        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'image' => $imageName,
        ]);

        return redirect()->route('index')->with('success', 'Producto agregado exitosamente.');
    }
    
}
