<?php

namespace Database\Factories;

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
			// 'item_id' => fake()->uuid()
		];
	}
}
