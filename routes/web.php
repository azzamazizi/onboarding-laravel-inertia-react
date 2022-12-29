<?php

use App\Http\Controllers\CobaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\OrderController;
use App\Http\Controllers\StudioController;
use App\Http\Controllers\MovieScheduleController;
use App\Http\Controllers\BackOfficeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::resource('studio', StudioController::class);
    Route::get('/backoffice/tags', [BackOfficeController::class, 'listTags'])->name('listTags');
    Route::get('/backoffice/movies', [BackOfficeController::class, 'listMovies'])->name('listMovies');
    
    Route::get('/backoffice/movieSchedule', [BackOfficeController::class, 'listMovieSchedule'])->name('movieSchedule');
    Route::get('/backoffice/movieSchedule/create', [BackOfficeController::class, 'createMovieSchedule'])->name('movieSchedule.create');
    Route::post('/backoffice/movieSchedule/store', [BackOfficeController::class, 'storeMovieSchedule'])->name('movieSchedule.store');
    Route::delete('/backoffice/movieSchedule/{movieSchedule}', [BackOfficeController::class, 'destroyMovieSchedule'])->name('movieSchedule.destroy');

    Route::get('/order', [OrderController::class, 'orderList'])->name('order.list');
    Route::post('/order/preview', [OrderController::class, 'orderPreview'])->name('order.preview');
    Route::post('/order/checkout', [OrderController::class, 'orderCheckout'])->name('order.checkout');
    
});

Route::get('/coba', [CobaController::class, 'index'])->name('coba');

require __DIR__.'/auth.php';
