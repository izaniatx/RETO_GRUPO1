<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\Rol; 

class RolSeeder extends Seeder
{
    public function run(): void
    {
        // Opción A: Usando el modelo Eloquent (Recomendado)
        Rol::create(['id'=>1,'rol' => 'Administrador']);
        Rol::create(['id'=>2,'rol' => 'Cliente']);

        
    }
}