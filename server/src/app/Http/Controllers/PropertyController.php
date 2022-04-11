<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends BaseController
{
    public function getProperties(){
        $property = Property::all();

        
        return $this->sendResponse($property,"properties recibed!");
    }
}
