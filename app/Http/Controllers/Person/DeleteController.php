<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class DeleteController extends Controller
{
	public function __invoke(Person $person)
	{
		$person->delete();
		return response([]);	// Возвращаем пустой массив, и если здесь не указать второй аргумент - автоматически подставляется 200й статус, что значит "всё нормально, всё успешно"
	}
}
