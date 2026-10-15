<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

// Melindungi endpoint tambah/ubah/hapus project dengan token dari .env (ADMIN_TOKEN).
class AdminToken
{
    public function handle(Request $request, Closure $next)
    {
        $token = (string) config('services.admin.token');

        if ($token === '' || ! hash_equals($token, (string) $request->bearerToken())) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $next($request);
    }
}
