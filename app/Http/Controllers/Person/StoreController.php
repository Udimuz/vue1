<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;
use Illuminate\Http\Request;

class StoreController extends Controller
{
	public function __invoke(StoreRequest $request)    //	index
	{
		$data = $request->validated();
		//$person =
		Person::create($data);
		// Как только запись создаётся, мы должны это вернуть назад:	Это делается для различных дальнейших действий, для работы с этими данными
		//return $person;
		// Оказалось, здесь возвращать данные не обязательно, там они сейчас не обрабатываются. Сделаем возврат пустого массива:
		return response([]);
		//return view('home');
	}
}
