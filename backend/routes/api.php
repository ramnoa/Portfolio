<?php

use Illuminate\Support\Facades\Route;

// Simple connectivity check — hit this from React first before building
// out the real contact-form endpoint.
Route::get('/ping', function () {
    return response()->json([
        'message' => 'pong from Laravel',
        'time' => now()->toDateTimeString(),
    ]);
});
Route::post('/contact', [App\Http\Controllers\ContactController::class, 'send']);