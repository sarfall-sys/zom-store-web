<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    //

    public function chat(Request $request)
    {
        Log::info('Chatbot request received', $request->all());
        $payload = [];

        if ($request->has('state')) {
            $payload['state'] = $request->input('state');

        }

        if ($request->has('message')) {
            $payload['message'] = $request->input('message');
        }
        $response = Http::post(config('services.chatbot.api_url'), $payload);

        Log::info('Chatbot response', ['response' => $response->body()]);

        if ($response->failed()) {
            return response()->json(['message' => 'Chatbot is currently unavailable', 'options' => [], 500]);
        }

        // Normalize chatbot response
        $chatbotData = $response->json();
        $normalizedResponse = [
            'data' => [
                'message' => $chatbotData['message'] ?? 'No response from chatbot.',
                'options' => $chatbotData['options'] ?? [],
            ],
        ];

        Log::info('Normalized chatbot response', $normalizedResponse);

        return response()->json($normalizedResponse);

    }
}
