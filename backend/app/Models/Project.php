<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title', 'description', 'image', 'url', 'accent',
        'tech', 'repo_link', 'live_link', 'status', 'sort_order',
    ];

    protected $casts = ['tech' => 'array'];
}
