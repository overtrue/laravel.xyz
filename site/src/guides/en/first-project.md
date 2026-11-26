---
title: Show a task list with Blade
description: See how one template displays an empty list, an open task, and a completed one. Then try it with SQLite.
order: 1
checkpoint: "Find the message for an empty list. Change an open task to done and spot the change next to its title."
minutes: 8
keywords: [getting started, install, Composer, SQLite, Blade, migration, route, Tinker]
sources:
  - { label: Installation, url: 'https://laravel.com/framework/docs/13.x/installation' }
  - { label: Database migrations, url: 'https://laravel.com/framework/docs/13.x/migrations' }
  - { label: Blade templates, url: 'https://laravel.com/framework/docs/13.x/blade' }
---

By the end of this chapter, opening `/tasks` will show a task from the database. SQLite and a plain Blade page make it easy to see each part of the request before adding forms or background work.

## Create the project and the table

You need PHP 8.3–8.5, Composer, and PDO SQLite. Run `php -v` and `php -m` to check your command-line environment. This example renders plain HTML so you can start without a frontend build.

```bash
composer create-project laravel/laravel taskboard '^13.0'
cd taskboard
php artisan about
php artisan make:model Task -m
```

With Laravel Installer, you can instead run `laravel new taskboard` and choose SQLite and no starter kit. Use `php artisan --version` to confirm your project is on Laravel 13.

In the new `database/migrations/*_create_tasks_table.php` file, replace the table definition inside `up()` with this one.

```php
Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->string('title', 120);
    $table->boolean('done')->default(false);
    $table->timestamps();
});
```

```bash
php artisan migrate
php artisan tinker
```

Use Tinker to add one task. The title is a fixed value you supplied in the terminal. Chapter two covers validating browser input and deciding which fields it can write.

```php
App\Models\Task::forceCreate(['title' => 'Read the first chapter']);
```

## Send the rows to a view

Add the route below to `routes/web.php`. Keep the existing routes. If the `Route` facade is already imported, add just the `Task` import.

```php
use App\Models\Task;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', function () {
    return view('tasks.index', [
        'tasks' => Task::query()->latest('id')->limit(20)->get(),
    ]);
})->name('tasks.index');
```

Create `resources/views/tasks/index.blade.php`.

```blade
<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Task list</title>
<h1>Task list</h1>
<ul>
    @forelse ($tasks as $task)
        <li>{{ $task->title }}{{ $task->done ? ' (done)' : '' }}</li>
    @empty
        <li>No tasks yet.</li>
    @endforelse
</ul>
</html>
```

The view name `tasks.index` points to `tasks/index.blade.php`. Blade escapes text inside the double braces, which matters once readers can supply task titles themselves.

## Check the result

Start `php artisan serve`. Use the address it prints and open `/tasks`. You should see “Read the first chapter”. If you see an empty list, make sure Tinker and the web app use the same database. For `no such table: tasks`, check `php artisan migrate:status`. If Laravel cannot find the view, check the `tasks` directory and the `.blade.php` extension.

Change the task’s `done` value to `true` in Tinker and refresh the page. The suffix should appear next to the title.
