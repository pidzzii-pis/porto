<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'message' => 'required|string|max:5000',
        ]);

        // Pesan selalu tersimpan di database, walau pengiriman email gagal.
        $message = Message::create($data);

        $receiver = config('services.contact.receiver');
        if ($receiver) {
            try {
                Mail::to($receiver)->send(new ContactMessage($message));
            } catch (\Throwable $e) {
                report($e);
            }
        }

        return response()->json(['ok' => true], 201);
    }
}
