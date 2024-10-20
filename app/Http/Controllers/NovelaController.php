<?php

namespace App\Http\Controllers;

use App\Models\Novela;
use Inertia\Response;

class NovelaController extends Controller
{
	public function show(): Response
	{
		$novelas = Novela::all();
		return inertia('Inicio', ['novelas' => $novelas]);
	}
}
