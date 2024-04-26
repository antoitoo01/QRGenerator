<?php

use App\Http\Controllers\QRGeneratorURLController;
use App\Http\Controllers\QRGeneratorTextController;
use App\Http\Controllers\QRGeneratorEmailController;
use App\Http\Controllers\QRGeneratorPhoneController;
use App\Http\Controllers\QRGeneratorSMSController;
use App\Http\Controllers\QRGeneratorVCardController;
use App\Http\Controllers\QRGeneratorMeCardController;
use App\Http\Controllers\QRGeneratorEventController;
use App\Http\Controllers\QRGeneratorFacebookController;
use App\Http\Controllers\QRGeneratorLocationController;
use App\Http\Controllers\QRGeneratorTwitterController;
use App\Http\Controllers\QRGeneratorWifiController;
use App\Http\Controllers\QRGeneratorYoutubeController;
use App\Http\Controllers\RoutesController;
use Illuminate\Support\Facades\Route;

Route::get('/get-routes', [RoutesController::class, 'getRoutes']);


Route::get('/', [QRGeneratorURLController::class, 'index'])->name('index');
Route::get('/text', [QRGeneratorTextController::class, 'index'])->name('index');
Route::get('/email', [QRGeneratorEmailController::class, 'index'])->name('index');
Route::get('/phone', [QRGeneratorPhoneController::class, 'index'])->name('index');
Route::get('/sms', [QRGeneratorSMSController::class, 'index'])->name('index');
Route::get('/vcard', [QRGeneratorVCardController::class, 'index'])->name('index');
Route::get('/mecard', [QRGeneratorMeCardController::class, 'index'])->name('index');
Route::get('/event', [QRGeneratorEventController::class, 'index'])->name('index');
Route::get('/location', [QRGeneratorLocationController::class, 'index'])->name('index');
Route::get('/youtube', [QRGeneratorYoutubeController::class, 'index'])->name('index');
Route::get('/x', [QRGeneratorTwitterController::class, 'index'])->name('index');
Route::get('/facebook', [QRGeneratorFacebookController::class, 'index'])->name('index');
Route::get('/wifi', [QRGeneratorWifiController::class, 'index'])->name('index');
