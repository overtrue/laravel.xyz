---
course: api-access
title: "Combine ownership with token abilities"
description: "Use a policy to enforce both record ownership and the right to change task state."
order: 2
checkpoint: "An owner with the right ability can update a task. Another user gets 403 and leaves it unchanged."
minutes: 23
keywords: ["authorization","Gate","Policy","Sanctum","403","授权","策略","权限"]
sources:
  - { label: "Authorization policies", url: "https://laravel.com/framework/docs/13.x/authorization#creating-policies" }
  - { label: "Token abilities", url: "https://laravel.com/framework/docs/13.x/sanctum#token-abilities" }
---

## Put the decision in a policy

Run `php artisan make:policy TaskPolicy --model=Task`. Replace the `update` method with this code and keep the generated `User` and `Task` imports. Laravel discovers a conventionally named policy in `app/Policies`.

```php
public function update(User $user, Task $task): bool
{
    return $task->user_id !== null
        && (int) $task->user_id === (int) $user->id
        && $user->tokenCan('tasks:update');
}
```

A write token can act only on records the user owns. Also note that Sanctum can return true from `tokenCan` for a first-party session. Keep the ownership check when a browser session is later supported.

## Apply the policy before changing state

Add the `Gate` import to the top of `routes/api.php`, then add the route below. It uses the previous lesson's `Request`, `Task`, `Route`, and `TaskResource` imports.

```php
use Illuminate\Support\Facades\Gate;

Route::patch('/v1/tasks/{task}', function (Request $request, Task $task) {
    Gate::authorize('update', $task);

    $data = $request->validate(['done' => ['required', 'boolean']]);
    $task->done = (bool) $data['done'];
    $task->save();

    return new TaskResource($task);
})->middleware('auth:sanctum');
```

## Practice and verify

Send a JSON PATCH with `{"done":true}` to a task you own using a token that has `tasks:update`. Expect a 200 with `data.done` true. A different local user or a token with no abilities should get 403, and the row must stay unchanged. A task with no owner also fails the policy. Choose deliberately whether 403 or concealed 404 best fits a separate production API that handles sensitive record existence.
