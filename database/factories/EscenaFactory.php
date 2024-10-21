<?php

namespace Database\Factories;

use App\Models\Novela;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Escena>
 */
class EscenaFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'historia_id' => function () {
				return Novela::all()->random()->id;
			},
			'imagen' => fake()->imageUrl(),
			'coordenadas' => json_encode([fake()->numberBetween(0, 2), fake()->numberBetween(0, 2)])
		];
	}
}
