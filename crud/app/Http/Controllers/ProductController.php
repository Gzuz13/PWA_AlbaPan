<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Redirect;
use App\Traits\TraitSubirArchivo;
use Illuminate\View\View;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{
    use TraitSubirArchivo;

    

    public function __construct(){
    // $this->middleware('auth',['except'=>['index','show']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): View
    {

        $category = $request->input('category'); // Obtiene la categoría de la solicitud

        $products = Product::when($category && $category != 'Todos', function ($query) use ($category) {
            $query->where('category', $category); // Aplica el filtro si se selecciona una categoría distinta de "Todos"
        })->paginate(10);

        return view('product.index', compact('products', 'category'))
            ->with('i', ($request->input('page', 1) - 1) * $products->perPage());





       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $product = new Product();

        return view('product.create', compact('product'));
    }

    /**
     * Store a newly created resource in storage.
     */

     public function store(ProductRequest $request): RedirectResponse
     {
         $data = $request->validated();
 
         // Procesar la imagen si está presente usando el trait
         if ($request->hasFile('imagen_url')) {
            $image = $request->file('imagen_url');
            $data['imagen_url'] = $this->subirArchivo($image, 'img', 'public');
        }
 
         Product::create($data);
 
         return Redirect::route('products.index')
             ->with('success', 'Product created successfully.');
     }
    /**
     * Display the specified resource.
     */
    public function show($id): View
    {
        $product = Product::find($id);

        return view('product.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $product = Product::find($id);

        return view('product.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product): RedirectResponse
{
    $data = $request->validated();

    // Procesar la imagen si está presente usando el trait
    if ($request->hasFile('imagen_url')) {
        // Eliminar la imagen anterior si existe
        if ($product->imagen_url && Storage::exists($product->imagen_url)) {
            Storage::delete($product->imagen_url);
        }

        // Subir la nueva imagen
        $image = $request->file('imagen_url');
        $data['imagen_url'] = $this->subirArchivo($image, 'img', 'public');
    }

    $product->update($data);

    return Redirect::route('products.index')
        ->with('success', 'Product updated successfully');
}
    public function destroy($id): RedirectResponse
{
    $product = Product::find($id);

    // Eliminar la imagen si existe
    if ($product->imagen_url && Storage::exists($product->imagen_url)) {
        Storage::delete($product->imagen_url);
    }

    $product->delete();

    return Redirect::route('products.index')
        ->with('success', 'Product deleted successfully');
}
}
