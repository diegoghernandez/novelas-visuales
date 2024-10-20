<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historia extends Model
{

    use HasUlids, HasFactory;

    public $incrementing = false;

    protected $fillable = [
        'titulo',
        'descripcion',
        'imagen'
    ];
}
