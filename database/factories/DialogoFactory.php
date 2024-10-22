<?php

namespace Database\Factories;

use App\Models\Escena;
use App\Models\EscenaDialogos;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dialogo>
 */
class DialogoFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		$arbol = [
			"tipo" => "DIALOGO",
			"dialogo" => "Mi esposo me asesinó para ocultar sus crímenes. Revela la verdad al mundo o únete a mí en la eternidad.",
			"children" => ["tipo" => "DIALOGO", "dialogo" => "He reunido todas las pruebas. El mundo sabrá la verdad sobre los Blackwood.", "itemID" => "a532f007", "children" => null]
		];

		return [
			'arbol' => json_encode($arbol),
			'id' => function () {
				return EscenaDialogos::all()->random()->dialogo_id;
			},
		];
	}
}
