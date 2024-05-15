<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function showUser(Request $request)
    {

        $query = User::query();
        if ($request->searchable) {
            $query->whereAny(['name', 'email'], 'like', '%' . $request->searchable . '%');
        }
        
        if ($request->status) {
            $status = $request->status == 'true' ? true : false;
            $query->where('status', $status);
        }



        $users = $query->where('id', '!=', auth()->id())->orderBy($request->sort ?? 'created_at',$request->direction ?? 'desc')->paginate(20)->onEachSide(1);
        return inertia('User', [
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    function addUser()
    {
        return inertia('User/AddUser');
    }
}
