<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dialogo extends Model
{
	/** @use HasFactory<\Database\Factories\DialogoFactory> */
	use HasUuids, HasFactory;

	protected $casts = [
		'arbol' => 'json',
	];
}
