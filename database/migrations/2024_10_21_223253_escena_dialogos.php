<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('escena_dialogos', function (Blueprint $table) {
			$table->uuid('id');
			$table->uuid('dialogo_id');
			// $table->uuid('item_id');
			$table->foreignUuid('escena_id')->constrained('escenas')->onUpdate('cascade')->onDelete('cascade');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('escena_dialogos');
	}
};
