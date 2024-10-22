<?php

namespace Database\Seeders;

use App\Models\Escena;
use App\Models\Novela;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		User::factory()->create([
			'name' => 'Test User',
			'email' => 'test@example.com',
			'password' => '1234'
		]);

		$this->call([NovelaSeeder::class, EscenaSeeder::class, DialogoSeeder::class]);

		Escena::factory()->create([
			'historia_id' => function () {
				return Novela::all()->random()->id;
			},
			'imagen' => fake()->imageUrl(),
			'coordenadas' => json_encode([0, 0])
		]);
	}
}
