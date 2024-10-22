<?php

use App\Http\Controllers\DialogoController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\NovelaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(NovelaController::class)->group(function () {
	Route::get('/', 'index');
	Route::get('/novelas/{novela}', 'show');
});

Route::get('/api/dialogo/{id}', [DialogoController::class, 'getDialogo']);
Route::get('/api/items/{id}', [ItemController::class, 'getItem']);

Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
