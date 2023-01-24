<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Models\Person;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
	public function __invoke(UpdateRequest $request, Person $person)
	{
		$data = $request->validated();
		$person->update($data);
		//return $person;
		// Оказалось, здесь возвращать данные не обязательно, там они сейчас не обрабатываются. Сделаем возврат пустого массива:
		return response([]);
	}
}
