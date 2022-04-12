<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    //

    public function register(Request $request){
        $input = $request->all();
        
        $validator = Validator::make($request->all(),[
            "firstName"=>"required",
            "lastName"=>"required",
            "email"=>"required | email",
            "password"=>"required",
        ]);
        
        if($validator->fails()){
            return $this->sendError("Error",$validator->errors(),401);
        }

        $input["password"] = bcrypt($input["password"]);

        $user = User::create($input);

        $success["token"] = $user->createToken("loginToken")->plainTextToken;
        $success["name"] = "$user->firstName $user->lastName";


        
        return $this->sendResponse($success,"User created",201);
    }

    public function login(Request $request){
        
    }
}
