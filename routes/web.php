<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware(['auth'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    //* ROUTE FOR USERS
    Route::prefix('/user')->controller(UserController::class)->name('user.')->group(function () {
        Route::get('/', 'showUser')->name('all');
        Route::get('/add', 'addUser')->name('add');
        Route::post('/store', 'storeUser')->name('store');
        Route::put('/update/{id}', 'updateUser')->name('update');
        Route::delete('/delete/{id}', 'deleteUser')->name('delete');
    });
    //* ROUTE FOR Tasks
    Route::prefix('/task')->controller(TaskController::class)->name('task.')->group(function () {
        Route::get('/', 'showTask')->name('all');
        Route::get('/add', 'addTask')->name('add');
        Route::post('/store', 'storeTask')->name('store');
        Route::put('/update/{id}', 'updateTask')->name('update');
        Route::delete('/delete/{id}', 'deleteTask')->name('delete');
    });
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
