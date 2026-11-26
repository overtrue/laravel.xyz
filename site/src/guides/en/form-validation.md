---
title: Save a task from a form
description: Let someone add a task and show them how to fix an empty title.
order: 2
checkpoint: "A valid title creates a task. Submitting an empty title shows an error and adds no row."
minutes: 9
keywords: [form, validation, validate, form request, CSRF, mass assignment, input]
sources:
  - { label: Form request validation, url: 'https://laravel.com/framework/docs/13.x/validation#form-request-validation' }
  - { label: CSRF protection, url: 'https://laravel.com/framework/docs/13.x/csrf' }
  - { label: Mass assignment, url: 'https://laravel.com/framework/docs/13.x/eloquent#mass-assignment' }
---

Add an input to the task list. The request class checks the title while the route writes the validated data. Treat the new write route as a local exercise. Add authentication and authorization before allowing writes on a public deployment.

## Put the rules in a request class

```bash
php artisan make:request StoreTaskRequest
```

Keep the generated class and replace `authorize()` and `rules()` in `app/Http/Requests/StoreTaskRequest.php`. The `bail` rule stops checking a field as soon as one rule fails.

```php
public function authorize(): bool
{
    return true;
}

public function rules(): array
{
    return [
        'title' => ['bail', 'required', 'string', 'max:120'],
    ];
}
```

Add `protected $fillable = ['title'];` to the `Task` model. The request controls which data gets through validation. The model controls which attributes can be mass-assigned. The database still supplies the default `done` value.

## Connect the form to the route

Import `App\Http\Requests\StoreTaskRequest` at the top of `routes/web.php`. Keep the GET route from the first chapter and add this POST route.

```php
Route::post('/tasks', function (StoreTaskRequest $request) {
    Task::create($request->validated());

    return to_route('tasks.index');
})->name('tasks.store');
```

Place the form between the heading and the list in `index.blade.php`. `@csrf` adds the token field. After failed validation, the browser returns to the form with the previous input and validation errors.

```blade
<form method="post" action="{{ route('tasks.store') }}">
    @csrf
    <label for="title">Task title</label>
    <input id="title" name="title" value="{{ old('title') }}" maxlength="120"
        @error('title') aria-invalid="true" aria-describedby="title-error" @enderror>
    @error('title')
        <p id="title-error" role="alert">{{ $message }}</p>
    @enderror
    <button type="submit">Add task</button>
</form>
```

`maxlength` gives immediate browser feedback. The `max:120` rule protects the write on the server. A successful POST redirects to the list, so refreshing it will not send the form again.

## Check both outcomes

Submit an empty title. You should return to the form with an error and the same number of database rows. Then submit “Add a form to Taskboard”. The new task should appear on the list.

To add a due date or priority, use the [validation rule builder](/tools/validation/) to draft the rules. Update the migration, fillable attributes, and tests together.
