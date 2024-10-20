<?php

namespace Database\Seeders;

use App\Models\Historia;
use Illuminate\Database\Seeder;

class HistoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Historia::factory(10)->create();
    }
}
