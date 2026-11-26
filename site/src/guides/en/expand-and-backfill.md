---
course: deploy-operate
title: "Ship a compatible schema change in stages"
description: "Add a derived column, update writers, and backfill old rows without replacing the original title."
order: 2
checkpoint: "After the backfill no new-column values are null. A title edit keeps both columns in sync."
minutes: 27
keywords: ["expand contract","migration","backfill","chunkById","兼容迁移","回填","数据迁移"]
sources:
  - { label: "Laravel migrations", url: "https://laravel.com/framework/docs/13.x/migrations" }
  - { label: "Chunking records", url: "https://laravel.com/framework/docs/13.x/queries#chunking-results" }
---

## Expand the schema first

In a disposable Taskboard copy, create a migration for a nullable `search_title`. Apply it before changing application code. The old release still uses `title` and can continue to read and write rows.

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->string('search_title', 120)->nullable();
});
```

## Update every writer before relying on the new field

Add this method to the `Task` model. If your model already has `booted()`, add the callback inside it. This normalizes titles written through Eloquent model saves. A query-builder bulk update bypasses model events and must be handled separately if your app uses one.

```php
protected static function booted(): void
{
    static::saving(function (Task $task) {
        if ($task->isDirty('title') || $task->search_title === null) {
            $task->search_title = mb_strtolower($task->title);
        }
    });
}
```

## Fill old rows in small batches

After replacing old writers, run this in Tinker. The guarded update avoids overwriting a value a new writer has just filled. Run it again safely if the backfill is interrupted.

```php
use Illuminate\Support\Facades\DB;

DB::table('tasks')->whereNull('search_title')->chunkById(100, function ($tasks) {
    foreach ($tasks as $task) {
        DB::table('tasks')->where('id', $task->id)->whereNull('search_title')
            ->update(['search_title' => mb_strtolower($task->title)]);
    }
});

dump(DB::table('tasks')->whereNull('search_title')->count());
```

## Practice and verify

Record the null count, backfill, and verify it reaches zero. Update a task title using Eloquent and check both fields. For a project that needs a strict column constraint, plan that migration as a later release once every writer and rollback target can provide the new value. Keep the original title available to old readers during the rehearsal.
