<?php

namespace App\Http\Controllers;

use App\Models\Dialogo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use function Pest\Laravel\json;

class DialogoController extends Controller
{

	public function getDialogo(Request $request, string $id)
	{
		$dialogoJSON = Dialogo::where('id', $id)->get();

		return $dialogoJSON[0]->arbol;
	}
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Dialogo $dialogo)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Dialogo $dialogo)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Dialogo $dialogo)
	{
		//
	}
}
