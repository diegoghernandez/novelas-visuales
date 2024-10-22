<?php

namespace Database\Seeders;

use App\Models\Escena;
use App\Models\EscenaDialogos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EscenaSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		Escena::factory(5)->has(EscenaDialogos::factory(2))->create();
	}
}
