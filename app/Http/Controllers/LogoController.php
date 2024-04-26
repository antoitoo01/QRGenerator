<?php

namespace App\Http\Controllers;

class LogoController extends Controller
{
    public static function getLogos()
    {
        // Obtiene todas las rutas de las imágenes de la carpeta logos
        $logoPaths = glob(public_path('img\\logos\\*'));
        $publicPath = public_path();

        $logos = [];
        // Itera sobre las rutas de las imágenes y extrae los nombres de archivo
        foreach ($logoPaths as $path) {
            $relativePath = substr($path, strlen($publicPath));
            $relativePath = str_replace('/', '\\', $relativePath);

            // Extrae el nombre de archivo de la ruta
            $fileName = pathinfo($relativePath, PATHINFO_FILENAME);
            $extName = pathinfo($relativePath, PATHINFO_EXTENSION);
            // Agrega los detalles del archivo al array de logos
            $logos[] = array(
                'path' => $relativePath,
                'name' => $fileName,
                'extension' => ".$extName"
            );
        }

        return $logos;
    }
}
