<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Novela>
 */
class NovelaFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'titulo' => fake()->userName(),
			'descripcion' => fake()->realText(),
			'imagen' => fake()->imageUrl()
		];
	}
}
