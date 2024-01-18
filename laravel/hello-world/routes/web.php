<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// redirect to home on default
Route::get('/', function () {
    return redirect('/home');
});

// home page
Route::get('/home', function () {
    return view('home');
})->name('home');

// products page
Route::get('/products', function () {
    return view('products');
})->name('products');

// contact page
Route::get('/contact', function () {
    return view('contact');
})->name('contact');

Route::get('/instructions', function() {
    return view('instructions');
})->name('instructions');