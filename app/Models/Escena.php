<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Escena extends Model
{
	/** @use HasFactory<\Database\Factories\EscenaFactory> */
	use HasUuids, HasFactory;

	protected $fillable = [
		'historia_id',
		'imagen',
		'coordenadas'
	];

	public function escenaDialogo(): HasMany
	{
		return $this->hasMany(EscenaDialogos::class);
	}
}
