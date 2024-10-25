<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TuControlador;


// Ruta para la vista principal
Route::get('/', [CartController::class, 'index']);

// Otras rutas del carrito
Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add/{id}', [CartController::class, 'add'])->name('cart.add');
Route::post('/cart/remove/{id}', [CartController::class, 'remove'])->name('cart.remove');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/productos', [ProductController::class, 'index'])->name('productos.index');

//modificar
// Ruta para mostrar la vista de edición de información
Route::get('/editar-informacion', [TuControlador::class, 'editarInformacion'])->name('editar.informacion');

// Ruta para procesar el formulario de actualización de información
Route::post('/guardar-informacion', [TuControlador::class, 'guardarInformacion'])->name('guardar.informacion');

Route::get('/', [TuControlador::class, 'index'])->name('index');

// Ruta para la vista index.blade.php
Route::get('/', function () {
    return view('index'); // Renderiza la vista 'index.blade.php'
})->name('index');

Route::get('/productos', function () {
    return view('productos'); // Renderiza la vista 'productos.blade.php'
})->name('productos');

Route::get('/promociones', function () {
    return view('promociones'); // Renderiza la vista 'promociones.blade.php'
})->name('promociones');

Route::get('/lnuevo', function () {
    return view('lnuevo'); // Renderiza la vista 'lnuevo.blade.php'
})->name('lnuevo');


Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');

Route::get('/conocenos', function () {
    return view('conocenos'); // Renderiza la vista conocenos.blade.php
})->name('conocenos');

// Ruta para la vista carrito.blade.php
Route::get('/carrito', function () {
    return view('carrito'); // Renderiza la vista carrito.blade.php
})->name('carrito');

Route::get('/login', function () {
    return view('login'); // Renderiza la vista login.blade.php
})->name('login');
