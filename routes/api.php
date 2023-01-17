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
	Route::post('/', 'StoreController');
//	Route::get('/', 'IndexController')->name('post.index');
//	Route::get('/{post}', 'ShowController')->name('post.show');
	// Такой вариант сборки (приём) называется "нестед роут"
	// Для запуска страницы по адресу "/post/10/comments":
//	Route::group(['namespace'=>'Comment', 'prefix'=>'{post}/comments'], function() {
//		Route::post('/', 'StoreController')->name('post.comment.store');
//	});
});
