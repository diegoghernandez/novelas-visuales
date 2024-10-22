<?php

namespace Database\Factories;

use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EscenaDialogos>
 */
class EscenaDialogosFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'dialogo_id' => fake()->uuid(),
			'item_id' => function () {
				return fake()->boolean(50) ? Item::all()->random()->id : null;
			},
		];
	}
}
