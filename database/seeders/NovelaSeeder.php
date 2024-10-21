<?php

namespace Database\Seeders;

use App\Models\Novela;
use Illuminate\Database\Seeder;

class NovelaSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		Novela::factory(1)->create();
	}
}
