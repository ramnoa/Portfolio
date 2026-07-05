<?php

namespace App\Http\Controllers;

use App\Mail\ContactAutoReply;
use App\Mail\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:100',
                'email' => 'required|email|max:150',
                'subject' => 'required|string|max:150',
                'message' => 'required|string|max:5000',
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $e->errors(),
            ], 422);
        }

        try {
            // The important one — this is you finding out someone contacted you.
            // If this fails, the whole request is treated as a failure.
            Mail::to(config('mail.from.address'))->send(new ContactMessage($validated));
        } catch (\Throwable $e) {
            Log::error('Owner notification mail failed: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to send email. Please try again later.',
            ], 500);
        }

        try {
            // Best-effort — the visitor's confirmation. If this fails (e.g. their
            // address bounces), we don't fail the whole request, since the
            // message itself was already successfully delivered above.
            Mail::to($validated['email'])->send(new ContactAutoReply($validated));
        } catch (\Throwable $e) {
            Log::warning('Auto-reply mail failed: ' . $e->getMessage());
        }

        return response()->json(['message' => 'Email sent successfully!']);
    }
}