<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// при обращении к таким маршрутам, нужно всегда добавлять префикс "/api" так работает запуск маршрутов из файла "api.php".
// Например:	axios.post('/api/people')

Route::group(['namespace'=>'App\Http\Controllers\Person', 'prefix'=>'people'], function(){
	// Для добавления новых людей:	по адресу /api/people
	Route::post('/', 'StoreController');
	// Для получения списка людей:	по адресу /api/people
	Route::get('/', 'IndexController');
	// Для обновления данных:	по адресу /api/people/3
	Route::patch('/{person}', 'UpdateController');
	// Для удаления одной записи:	по адресу /api/people/3
	Route::delete('/{person}', 'DeleteController');
});
