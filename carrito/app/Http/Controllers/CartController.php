<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Informacion; // Asegúrate de importar el modelo


class CartController extends Controller
{
    public function index()
    {
        $informacion = Informacion::first(); // Obtener la información de la base de datos
        return view('index', compact('informacion')); // Asegúrate de pasar la variable a la vista
    }

    public function add(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $cart = session()->get('cart', []);
    
        if (isset($cart[$id])) {
            $cart[$id]['quantity']++;
        } else {
            $cart[$id] = [
                'name' => $product->name,
                'quantity' => 1,
                'price' => $product->price,
            ];
        }
    
        session()->put('cart', $cart);
        return redirect()->back()->with('success', 'Producto agregado al carrito!');
    }    

    public function remove($id)
    {
        $cart = session()->get('cart', []);

        if (isset($cart[$id])) {
            unset($cart[$id]);
            session()->put('cart', $cart);
        }

        return redirect()->back()->with('success', 'Producto eliminado del carrito!');
    }
}
