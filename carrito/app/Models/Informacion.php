<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Informacion extends Model
{
    use HasFactory;

    // Define los atributos que son asignables en masa
    protected $fillable = [
        'quienes_somos',
        'mision',
        'vision',
        'opiniones',
        'image1',
        'image2',
    ];
}
