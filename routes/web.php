<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\RegistroController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');*/

Route::get('/', function () {
    return Inertia::render('landingpage');
});

Route::get('/registro', function () {
    return Inertia::render('registro');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/dashboard');
});

Route::get('/admin/usuarios', function () {
    return Inertia::render('admin/usuarios');
});

Route::post('/registro', [RegistroController::class, 'registrar']);
Route::get('/inicio', [RegistroController::class, 'inicio'])->name('inicio');

// Página informativa (Donde el usuario cae tras registrarse)
Route::get('/email/verify', function () {
    return inertia('Auth/VerifyEmail'); 
})->middleware('auth')->name('verification.notice');

// La ruta que procesa el clic en el email
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/inicio'); // A donde va tras verificar
})->middleware(['auth', 'signed'])->name('verification.verify');




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
