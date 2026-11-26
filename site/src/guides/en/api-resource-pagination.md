---
course: rest-api
title: "Give your task list a JSON API"
description: "Turn a list you could show in Blade into data another app can read. Try paging through two tasks before writing the route."
order: 1
checkpoint: "With one task per page, compare the task IDs on pages one and two. Request 51 per page and find the field named in the error."
minutes: 20
keywords: ["API","JsonResource","pagination","per_page","接口","分页"]
sources:
  - { label: "API resources", url: "https://laravel.com/framework/docs/13.x/eloquent-resources" }
  - { label: "Pagination", url: "https://laravel.com/framework/docs/13.x/pagination" }
---

Blade turns a task into HTML for a person to read. An API can send the same task as JSON so another app can use its title and completion status. Look in `data` for the tasks and in `meta` for your page number.

To build the example locally, start with the [task list](../first-project/) and [form](../form-validation/). Keep this first endpoint local while you work through the course. You will add access controls on the next course.

## Install the API route file

Run `php artisan install:api` and `php artisan migrate`. Laravel assigns the `/api` prefix to `routes/api.php`. Use `/v1/tasks` inside that file so callers reach `/api/v1/tasks`.

## Expose an explicit resource

Run `php artisan make:resource TaskResource` and replace the generated class with this. New columns will stay private until you deliberately add them to the JSON contract.

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'done' => (bool) $this->done,
        ];
    }
}
```

Add the route to `routes/api.php`. Keep a single import for classes already present.

```php
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/v1/tasks', function (Request $request) {
    $data = $request->validate(['per_page' => ['sometimes', 'integer', 'between:1,50']]);

    $tasks = Task::query()->latest('id')->paginate((int) ($data['per_page'] ?? 15));

    return TaskResource::collection($tasks->withQueryString());
});
```

## Practice and verify

Run `php artisan route:list --path=api/v1/tasks`. Start the app and request `/api/v1/tasks?per_page=1` with `Accept: application/json`. With tasks in the table, `data` should contain one item and `links` and `meta` should be present. Follow the next link if there is another row. A value of 51 must return 422. Keep sorting explicit so callers see a repeatable order.
