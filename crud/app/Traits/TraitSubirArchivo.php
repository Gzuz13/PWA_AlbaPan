<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait TraitSubirArchivo{
    //Función para subir un archivo, en este caso, imágenes
    public function subirArchivo(UploadedFile $archivoSubir, $carpeta='null', $disk='public', $nombreArchivo=null)
{
    // Generar un nombre único para el archivo
    $nombreArchivo = $nombreArchivo ?? uniqid() . '_' . Str::random(10);
    
    // Subir el archivo y devolver la ruta
    $archivo = $archivoSubir->storeAs($carpeta, $nombreArchivo . '.' . $archivoSubir->getClientOriginalExtension(), $disk);
    return $archivo;
}


}