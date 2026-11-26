---
course: api-access
title: "Authenticate and scope a task API"
description: "Attach each new task to its authenticated owner and scope collection reads."
order: 1
checkpoint: "An anonymous request gets 401. A valid token only sees tasks owned by its user."
minutes: 26
keywords: ["Sanctum","token","authentication","owner scope","认证","令牌","归属"]
sources:
  - { label: "Sanctum API tokens", url: "https://laravel.com/framework/docs/13.x/sanctum#api-token-authentication" }
  - { label: "Foreign keys", url: "https://laravel.com/framework/docs/13.x/migrations#foreign-key-constraints" }
---

Use the Taskboard JSON API from the prior course. Its local endpoints will now require a Sanctum identity. Protect any separate web routes before exposing the application itself.

## Add an owner to tasks

Generate a migration with `php artisan make:migration add_user_id_to_tasks --table=tasks` and use this in `up()`. Existing tasks stay unassigned and do not appear in a user's API list. Use `dropConstrainedForeignId('user_id')` within `Schema::table()` for the local rollback.

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
});
```

Run `php artisan migrate`. Add `use Laravel\Sanctum\HasApiTokens;` among the imports and `use HasApiTokens;` inside the `User` model.

## Scope reads and assign writes

Replace both earlier API routes with this group. Keep the same imports. The authenticated user's ID comes from the request context, so it is never copied from request JSON.

```php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/v1/tasks', function (Request $request) {
        $data = $request->validate(['per_page' => ['sometimes', 'integer', 'between:1,50']]);
        $tasks = Task::query()->where('user_id', $request->user()->id)
            ->latest('id')->paginate((int) ($data['per_page'] ?? 15));

        return TaskResource::collection($tasks->withQueryString());
    });

    Route::post('/v1/tasks', function (Request $request) {
        $data = $request->validate(['title' => ['bail', 'required', 'string', 'max:120']]);
        $task = new Task($data);
        $task->user_id = $request->user()->id;
        $task->save();

        return (new TaskResource($task->refresh()))->response()->setStatusCode(201);
    });
});
```

## Practice and verify

In a disposable local database, issue a token from Tinker.

```php
$user = App\Models\User::factory()->create();
echo $user->createToken('orbit-local', ['tasks:update'])->plainTextToken;
```

Put the token into your local API client's bearer token field. Avoid pasting it into source, logs, or shared screenshots. A request with no token should return 401. Create one task with each of two local users, then GET both lists. Each token should see only its own task. Revoke the lab token with `$user->tokens()->where('name', 'orbit-local')->delete()` when finished, or keep it locally for the next lesson.
