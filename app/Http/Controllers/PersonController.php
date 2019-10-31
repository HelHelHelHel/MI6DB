<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    public function index()
    {
        return Person::limit(20)->orderBy('name', 'asc')->get();
    }
}
