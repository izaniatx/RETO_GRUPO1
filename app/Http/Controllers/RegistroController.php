<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered; // IMPORTANTE: Para disparar el evento de email
use Illuminate\Support\Facades\Auth;

class RegistroController extends Controller
{
    // Método que crea el usuario
    public function registrar(Request $request)
    {

        $exists = User::where('usuario', $request->usuario)->exists();

        if ($exists) {
            return redirect()->back()->withErrors([
                'usuario' => 'Este nombre de usuario ya existe',
            ])->withInput();
        }

        $user = User::create([
            'usuario' => $request->usuario,
            'nombre' => $request->firstName,
            'apellido' => $request->lastName,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'password' => bcrypt($request->contrasenya),
            'rol_id' => 1,
            
        ]);

                // ESTO ES LO QUE ENVÍA EL CORREO
        event(new Registered($user));

        // Autologin para que pueda ver la pantalla de "Verifica tu email"
        auth()->login($user);

        // Redirigir a la ruta que le pide verificar el email
        return redirect()->route('verification.notice');
    
        return Inertia::location(route('inicio'));
    }

    public function inicio()
    {
        return Inertia::render('inicio');
    }
}
