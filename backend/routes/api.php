<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use App\Http\Middleware\AdminToken;
use Illuminate\Support\Facades\Route;

// Publik
Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:5,1');

// Khusus admin (header: Authorization: Bearer <ADMIN_TOKEN>)
Route::middleware(AdminToken::class)->group(function () {
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{project}', [ProjectController::class, 'update']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);
});
