<?php

namespace App\Http\Controllers;

use App\Models\Historia;
use Inertia\Response;

class HistoriaController extends Controller
{
	public function show(): Response
	{
		$novelas = Historia::all();
		return inertia('Inicio', ['novelas' => $novelas]);
	}
}
