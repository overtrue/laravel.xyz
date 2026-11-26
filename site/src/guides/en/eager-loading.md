---
title: Prevent N+1 queries with eager loading
description: Group tasks by project and measure the queries needed to render the list.
order: 3
checkpoint: "Compare SQL logs before and after eager loading. Related projects load together instead of once per task."
minutes: 10
keywords: [Eloquent, SQL, N+1, performance, database, with, belongsTo, eager loading]
sources:
  - { label: Eloquent relationships and eager loading, url: 'https://laravel.com/framework/docs/13.x/eloquent-relationships#eager-loading' }
  - { label: Listening for queries, url: 'https://laravel.com/framework/docs/13.x/database#listening-for-query-events' }
---

Group the tasks by project. If the page asks the database for a project on every row, the query count grows with the number of tasks. A small `belongsTo` relation makes the difference easy to measure.

## Add a project relationship

Run `php artisan make:model Project -m`. Put the table definition in the generated migration’s `up()` method.

```php
Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

Run `php artisan make:migration add_project_id_to_tasks_table --table=tasks`. Add the nullable foreign key in `up()`. In `down()`, use `$table->dropConstrainedForeignId('project_id')` inside the same `Schema::table()` call.

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->foreignId('project_id')->nullable()->constrained()->nullOnDelete();
});
```

Run `php artisan migrate`. Existing tasks can remain ungrouped. Import `Illuminate\Database\Eloquent\Relations\BelongsTo` in `Task` and add this method.

```php
public function project(): BelongsTo
{
    return $this->belongsTo(Project::class);
}
```

## Compare the two queries

Use `php artisan tinker` to create eight tasks in one project. Enable query logging after creating them to count only the reads you’re measuring.

```php
$project = App\Models\Project::forceCreate(['name' => 'Product release']);
foreach (range(1, 8) as $i) {
    App\Models\Task::forceCreate(['title' => "Release task {$i}", 'project_id' => $project->id]);
}

DB::enableQueryLog();
DB::flushQueryLog();
App\Models\Task::latest('id')->limit(8)->get()->each(fn ($task) => $task->project?->name);
count(DB::getQueryLog());
```

Accessing the relation on each row gives nine queries in this example. Repeat the last three lines, adding `with('project:id,name')` before `latest()`. You should get two queries. One fetches the tasks and the other fetches the matching projects together.

Use the eager-loaded query in the list route.

```php
Task::query()->with('project:id,name')->latest('id')->limit(20)->get();
```

Keep `id` in the columns selected for each project. If you restrict the columns selected from `tasks`, keep `project_id` too. Show the name in Blade with `{{ $task->project?->name ?? 'Ungrouped' }}`.

## Choose what to load

Eager load the relations the page actually reads. For a related record count, try `withCount()`. To investigate a slow production request, identify the endpoint using sampled monitoring and reproduce it in a separate environment. Disable query logging when you finish since it keeps statements and parameters in memory.
