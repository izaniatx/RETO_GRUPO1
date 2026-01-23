<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Carbon\Carbon;


class UsuariosController extends Controller
{
    public function getUsuarios(){
        $usuarios = User::with('rol')->get();

        $totalUsuarios = User::count();

        $totalMes = User::whereYear('created_at', Carbon::now()->year)
                    ->whereMonth('created_at', Carbon::now()->month)
                    ->count();

        return Inertia::render('admin/usuarios', [
            'users' => $usuarios,
            'total' => $totalUsuarios,
            'totalMes' =>$totalMes,
        ]);


    }


    public function deleteUsuario(Request $request){
        $usuario = User::find($request->id);

        if($usuario){
            $usuario->isDeleted = true;
            $usuario->save();
        }

        

    }
}
