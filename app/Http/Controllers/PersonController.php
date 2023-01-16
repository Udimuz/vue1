<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
	public function __invoke()    //	index
	{
		$persons = [
			[
				'id' => 1,
				'name' => 'Ivan',
				'age' => 25,
				'job' => 'developer',
			],
			[
				'id' => 2,
				'name' => 'Vasya',
				'age' => 20,
				'job' => 'coach',
			],
			[
				'id' => 3,
				'name' => 'Elena',
				'age' => 17,
				'job' => 'rest',
			],
			[
				'id' => 4,
				'name' => 'Petr',
				'age' => 34,
				'job' => 'seller',
			]
		];
		return $persons;
		//return view('home');
	}
}
