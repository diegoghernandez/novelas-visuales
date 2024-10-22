<?php

namespace Database\Seeders;

use App\Models\Dialogo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DialogoSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		Dialogo::factory(10)->create();
	}
}
