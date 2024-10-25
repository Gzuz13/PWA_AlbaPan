<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Informacion; // Modelo para la información
use Illuminate\Support\Facades\Storage; // Asegúrate de incluir esto
use Illuminate\Support\Facades\Validator; // Si lo necesitas para la validación

class TuControlador extends Controller
{

    public function editarInformacion()
    {
        // Aquí puedes obtener la información actual de la base de datos
        // y pasarla a la vista para mostrarla en el formulario.
        // Ejemplo:
        $informacion = [
            'quienes_somos' => 'Lorem ipsum dolor sit amet...',
            'mision' => 'Lorem ipsum dolor sit amet...',
            'vision' => 'Lorem ipsum dolor sit amet...',
            // Otras propiedades según tu modelo
        ];

        return view('editar-informacion', compact('informacion')); // Usa el nombre correcto de la vista
    }

    // Método para procesar la actualización de información
    public function guardarInformacion(Request $request)
    {
        $request->validate([
            'quienes_somos' => 'required|string',
            'mision' => 'required|string',
            'vision' => 'required|string',
            'opiniones' => 'nullable|string',
            // Validaciones para imágenes si las tienes
        ]);

        $informacion = Informacion::first(); // Obtener la primera fila para actualizar
        $informacion->quienes_somos = $request->quienes_somos;
        $informacion->mision = $request->mision;
        $informacion->vision = $request->vision;
        $informacion->opiniones = $request->opiniones;

        // Manejo de imágenes, si aplicable...

        $informacion->save(); // Guarda los cambios

        return redirect()->route('index')->with('success', 'Información actualizada correctamente.');
    }
    

      // Método que muestra la vista de índice
      public function index()
      {
          $informacion = Informacion::first(); // Asegúrate de que este modelo sea el correcto
          return view('index', compact('informacion')); // Reemplaza 'index' con el nombre real de tu vista
      }
    
}
