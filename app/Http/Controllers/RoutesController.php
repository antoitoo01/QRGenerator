<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;

class RoutesController extends Controller
{
    // Método para obtener las rutas
    public static function getRoutes()
    {
        // Obtiene todas las rutas definidas en web.php
        $routes = Route::getRoutes()->getRoutes();

        // Filtra solo las rutas GET
        return collect($routes)->filter(function ($route) {
            return in_array('GET', $route->methods());
        })->map(function ($route) {
            return [
                'name' => $route->getName(),
                'path' => $route->uri(),
            ];
        })->toArray();
    }
}
