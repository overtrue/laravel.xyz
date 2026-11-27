---
course: async-work
title: "Dispatch only after a transaction commits"
description: "Check queue visibility on commit and verify that a rollback discards dispatch."
order: 1
checkpoint: "The committed job updates its task. Rolling back the transaction leaves no queued job."
minutes: 23
keywords: ["queue","transaction","afterCommit","rollback","队列","提交","回滚"]
sources:
  - { label: "Jobs and transactions", url: "https://laravel.com/framework/docs/13.x/queues#jobs-and-database-transactions" }
---

## Inspect the database queue

Start with Taskboard's `MarkTaskReminder` job and the `jobs` migration. Set `QUEUE_CONNECTION=database` locally and run `php artisan config:clear`. Keep workers stopped while inspecting the table so the observed count does not change in the background.

Run this in Tinker. Both booleans should be true. The dispatch is held while the transaction is open, then exactly one job is written after commit.

```php
use App\Jobs\MarkTaskReminder;
use App\Models\Task;
use Illuminate\Support\Facades\DB;

$before = DB::table('jobs')->count();
DB::transaction(function () use ($before) {
    $task = Task::create(['title' => 'Queue after commit']);
    MarkTaskReminder::dispatch($task->id)->afterCommit();

    dump(DB::table('jobs')->count() === $before);
});
dump(DB::table('jobs')->count() === $before + 1);
```

## Prove the rollback path

Run the next experiment in the same session with the same imports.

```php
$before = DB::table('jobs')->count();
try {
    DB::transaction(function () {
        $task = Task::create(['title' => 'Discard this transaction']);
        MarkTaskReminder::dispatch($task->id)->afterCommit();

        throw new RuntimeException('Rollback exercise');
    });
} catch (RuntimeException $failure) {
    if ($failure->getMessage() !== 'Rollback exercise') {
        throw $failure;
    }
}

dump(DB::table('jobs')->count() === $before);
dump(! Task::where('title', 'Discard this transaction')->exists());
```

A rolled-back transaction should leave neither a task nor a queued reminder. Queuing after commit also ensures the worker can see the committed record when it starts. It does not persist an event if the PHP process dies between database commit and enqueue. The capstone introduces an outbox for that gap.

## Practice and verify

Run one worker iteration with `php artisan queue:work database --once`. Confirm the committed job updates its task and no job exists for the rolled-back one. If there were unrelated jobs already present, inspect and use a fresh local queue before rehearsing this check.
