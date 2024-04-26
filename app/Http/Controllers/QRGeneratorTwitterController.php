<?php

namespace App\Http\Controllers;

use App\Http\Controllers\DesignController;
use App\Http\Controllers\LogoController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class QRGeneratorTwitterController extends Controller
{
    public function index()
    {
        if (!Session::has('logos')) {
            Session::put('logos', LogoController::getLogos());
        }
        if (!Session::has('dotsTypes')) {
            Session::put('dotsTypes', DesignController::getDotsTypes());
        }
        if (!Session::has('eyesTypes')) {
            Session::put('eyesTypes', DesignController::getEyesTypes());
        }
        if (!Session::has('eyeFrameTypes')) {
            Session::put('eyeFrameTypes', DesignController::getEyeFrameTypes());
        }


        return Inertia::render('UrlView/Tabs/TwitterView', [
            'logos' => Session::get('logos'),
            'dotsTypes' => Session::get('dotsTypes'),
            'eyesTypes' => Session::get('eyesTypes'),
            'eyeFrameTypes' => Session::get('eyeFrameTypes'),
        ]);
    }
}
