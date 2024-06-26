<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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



        $users = $query->where('id', '!=', auth()->id())->orderBy($request->sort ?? 'created_at', $request->direction ?? 'desc')->paginate(20)->onEachSide(1);
        return inertia('User', [
            'users' => UserResource::collection($users),
            'queryParams' => collect(request()->query())->except('page')->toArray() ?: null,
        ]);
    }

    function addUser()
    {
        return inertia('User/AddUser');
    }


    function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|unique:users,email',
            'password' => "required"
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return to_route('user.all');
    }
    function updateUser(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|unique:users,email,' . $id,
        ]);


        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();


        return to_route('user.all');
    }

    function deleteUser($id)
    {
        User::find($id)->delete();
        return to_route('user.all');
    }
}
