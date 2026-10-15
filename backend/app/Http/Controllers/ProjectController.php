<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // Bentuk respons disamakan dengan data yang dipakai React (repoLink, liveLink).
    private function format(Project $p): array
    {
        return [
            'id' => $p->id,
            'title' => $p->title,
            'description' => $p->description,
            'image' => $p->image,
            'url' => $p->url,
            'accent' => $p->accent,
            'tech' => $p->tech ?? [],
            'repoLink' => $p->repo_link,
            'liveLink' => $p->live_link,
            'status' => $p->status,
        ];
    }

    private function rules(bool $create): array
    {
        $req = $create ? 'required' : 'sometimes';

        return [
            'title' => "$req|string|max:120",
            'description' => "$req|string",
            'image' => 'nullable|string|max:255',
            'url' => 'nullable|string|max:255',
            'accent' => 'in:indigo,amber',
            'tech' => 'array',
            'tech.*' => 'string|max:50',
            'repo_link' => 'nullable|url',
            'live_link' => 'nullable|url',
            'status' => 'in:Ongoing,Completed',
            'sort_order' => 'integer',
        ];
    }

    public function index(): JsonResponse
    {
        return response()->json(
            Project::orderBy('sort_order')->orderByDesc('id')->get()->map(fn ($p) => $this->format($p))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $project = Project::create($request->validate($this->rules(true)));

        return response()->json($this->format($project), 201);
    }

    public function update(Request $request, Project $project): JsonResponse
    {
        $project->update($request->validate($this->rules(false)));

        return response()->json($this->format($project));
    }

    public function destroy(Project $project): JsonResponse
    {
        $project->delete();

        return response()->json(['ok' => true]);
    }
}
