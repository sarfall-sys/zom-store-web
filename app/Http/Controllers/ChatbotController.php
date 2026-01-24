<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    //

    public function chat(Request $request)
    {

        $payload = [];

        if ($request->has('state')) {
            $payload['state'] = $request->input('state');

        }

        if ($request->has('message')) {
            $payload['message'] = $request->input('message');
        }
        $response = Http::post('http://127.0.0.1:9000/chat', $payload);

        if ($response->failed()) {
            return response()->json(['message' => 'Failed to communicate with chatbot service', 'options' => [],500]);
        }

        return $response->json();
    }
}
