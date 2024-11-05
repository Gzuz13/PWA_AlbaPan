<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/vistaA', function () {
        return Inertia::render('VistaA'); // Asegúrate de que el nombre coincida con tu componente
    })->name('vistaA');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('user', UserController::class);
    Route::resource('task', TaskController::class);
    Route::resource('project', ProjectController::class);


});


Route::get('/conocenos', function () {
    return Inertia::render('Conocenos');
})->middleware(['auth', 'verified'])->name('conocenos');

Route::get('/nuevo', function () {
    return Inertia::render('Nuevo');
})->middleware(['auth', 'verified'])->name('nuevo');

Route::get('/promociones', function () {
    return Inertia::render('Promociones');
})->middleware(['auth', 'verified'])->name('promociones');

Route::get('/carrito', function () {
    return Inertia::render('Carrito');
})->middleware(['auth', 'verified'])->name('carrito');


require __DIR__.'/auth.php';