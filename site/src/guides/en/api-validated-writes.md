---
course: rest-api
title: "Create a task through the API"
description: "Return 201 for a saved task and 422 for invalid input."
order: 2
checkpoint: "A client-supplied done value is ignored on creation. An empty title adds no database row."
minutes: 17
keywords: ["API","POST","201","validation","contract","新增","验证"]
sources:
  - { label: "Validation", url: "https://laravel.com/framework/docs/13.x/validation" }
  - { label: "Resource responses", url: "https://laravel.com/framework/docs/13.x/eloquent-resources#resource-responses" }
---

## Store only validated attributes

In `routes/api.php`, add the POST route beside your GET route. It reuses their imports. Keep the Task model’s `$fillable = ['title']` from the Taskboard course. The database supplies the initial `done` value, so refresh the record before serializing it.

```php
Route::post('/v1/tasks', function (Request $request) {
    $data = $request->validate(['title' => ['bail', 'required', 'string', 'max:120']]);

    $task = Task::create($data);

    return (new TaskResource($task->refresh()))->response()->setStatusCode(201);
});
```

## Observe both responses

Run these requests in a second terminal after starting Artisan. You should see an object under `data` for the 201 response, and `errors.title` for 422.

```bash
curl -i 'http://localhost:8000/api/v1/tasks' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"title":"Record the API contract"}'

curl -i 'http://localhost:8000/api/v1/tasks' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"title":""}'
```

## Practice and verify

Add `"done":true` to the first payload. The newly created task must still be incomplete, since the create contract accepts only the title. Compare the row count before and after the empty request. It should not change. Keep this local write endpoint off the public internet until you add the owner-scoped authorization from the API access course.
