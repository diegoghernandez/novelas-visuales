<?php

namespace App\Http\Controllers;

use App\Models\Escena;
use App\Models\Novela;

class NovelaController extends Controller
{
	public function index()
	{
		$novelas = Novela::all();

		return inertia('Inicio', ['novelas' => $novelas]);
	}

	public function show(Novela $novela)
	{
		$escenas = Escena::with('escenaDialogo')->where('historia_id', $novela->id)->get();

		return inertia('Novela', [
			'titulo' => $novela->titulo,
			'escenas' => $escenas
		]);
	}
}
