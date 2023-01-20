<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::get('/persons', [App\Http\Controllers\PersonController::class, '__invoke']);

// Добавление "{page}" или "any?" отправляет все запросы на этот контроллер IndexController
Route::get('/', [App\Http\Controllers\IndexController::class, '__invoke']);
//Route::get('/{page}', [App\Http\Controllers\IndexController::class, '__invoke'])->where('page', '.*');
// Благодаря выражению "where" при любых ссылках (даже /tags/123/more) всё равно сработает этот контроллер:
Route::get('/{any?}', [App\Http\Controllers\IndexController::class, '__invoke'])->where('any', '.*');

//Route::get('/', function(){
//	return view('index');
//});
//Route::get('/{any?}', function(){
//	return view('index');
//});
