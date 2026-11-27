---
course: eloquent
title: "Measure a composite index"
description: "Read SQLite’s query plan before and after indexing a real Taskboard access pattern."
order: 1
checkpoint: "Compare query plans before and after the index. Both runs return the same 25 IDs in descending order."
minutes: 23
keywords: ["Eloquent","EXPLAIN","SQLite","index","SQL","索引","执行计划"]
sources:
  - { label: "SQLite query plans", url: "https://www.sqlite.org/eqp.html" }
  - { label: "Migration indexes", url: "https://laravel.com/framework/docs/13.x/migrations#indexes" }
---

## Start from the query

Taskboard lists incomplete work for a particular project. Use the Tasks and Projects tables from its relationship lesson. Add tasks for at least two projects, then open `php artisan tinker`. Set `$projectId` to a real project ID and inspect this read.

```php
$sql = 'EXPLAIN QUERY PLAN SELECT id, title FROM tasks
        WHERE project_id = ? AND done = ?
        ORDER BY id DESC LIMIT 25';

dump(DB::select($sql, [$projectId, false]));
```

Look for the access method and any temporary sort. A plan describes what the database intends to do. Small tables can still be faster to scan, so do not treat this as a production benchmark.

## Add the matching index

Generate a migration with `php artisan make:migration add_task_list_index --table=tasks`. Add this to `up()`. In `down()`, drop the index by its explicit name in another `Schema::table()` call.

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->index(['project_id', 'done', 'id'], 'tasks_project_done_id_index');
});
```

Run `php artisan migrate`, then repeat the plan. Equality conditions are first in the index, followed by the ordered ID. SQLite can scan the matching range in reverse. Look for the named index and compare whether a sort remains.

## Practice and verify

Choose a project with at least 30 incomplete tasks. Record the first 25 IDs and the plan before and after the migration. The results must agree and remain in descending ID order. Write down which one query the index serves. Extra indexes also affect every write, so add an index based on a real access pattern.
