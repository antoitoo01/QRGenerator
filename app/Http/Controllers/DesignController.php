<?php

namespace App\Http\Controllers;

class DesignController extends Controller
{
    public static function getDotsTypes()
    {
        $dotsPaths = glob(public_path('img\\dotsTypes\\*.png'));
        $publicPath = public_path();

        $dotsTypes = [];
        foreach ($dotsPaths as $path) {
            $relativePath = substr($path, strlen($publicPath));
            $relativePath = str_replace('/', '\\', $relativePath);

            $fileName = pathinfo($relativePath, PATHINFO_FILENAME);
            $extName = pathinfo($relativePath, PATHINFO_EXTENSION);
            $dotsTypes[] = array(
                'path' => $relativePath,
                'name' => $fileName,
                'extension' => ".$extName"
            );
        }

        return $dotsTypes;
    }

    public static function getEyesTypes()
    {
        $eyesPaths = glob(public_path('img\\eyesTypes\\*.png'));
        $publicPath = public_path();

        $eyesTypes = [];
        foreach ($eyesPaths as $path) {
            $relativePath = substr($path, strlen($publicPath));
            $relativePath = str_replace('/', '\\', $relativePath);

            $fileName = pathinfo($relativePath, PATHINFO_FILENAME);
            $extName = pathinfo($relativePath, PATHINFO_EXTENSION);

            $eyesTypes[] = array(
                'path' => $relativePath,
                'name' => $fileName,
                'extension' => ".$extName"
            );
        }

        return $eyesTypes;
    }

    public static function getEyeFrameTypes()
    {
        $framesPaths = glob(public_path('img\\eyeFrameTypes\\*.png'));
        $publicPath = public_path();

        $framesTypes = [];
        foreach ($framesPaths as $path) {
            $relativePath = substr($path, strlen($publicPath));
            $relativePath = str_replace('/', '\\', $relativePath);

            $fileName = pathinfo($relativePath, PATHINFO_FILENAME);
            $extName = pathinfo($relativePath, PATHINFO_EXTENSION);
            $framesTypes[] = array(
                'path' => $relativePath,
                'name' => $fileName,
                'extension' => ".$extName"
            );
        }

        return $framesTypes;
    }
}
