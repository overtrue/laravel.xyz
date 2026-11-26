---
title: Make a queued job safe to retry
description: Use an atomic update to keep the reminder timestamp stable across retries.
order: 4
checkpoint: "Run the reminder job twice for the same task. Its original reminder timestamp stays the same."
minutes: 11
keywords: [queue, queues, idempotency, async, afterCommit, retry_after, worker, database]
sources:
  - { label: Jobs and database transactions, url: 'https://laravel.com/framework/docs/13.x/queues#jobs-and-database-transactions' }
  - { label: Worker timeouts and retries, url: 'https://laravel.com/framework/docs/13.x/queues#job-expirations-and-timeouts' }
---

Queues move work out of the request. Start with a reminder job that records when a task was first reminded. Running the same job again should leave that first timestamp intact.

## Record the first result atomically

Run `php artisan make:migration add_reminded_at_to_tasks_table --table=tasks`. Inside the `Schema::table()` call in `up()`, add `$table->timestamp('reminded_at')->nullable();`. Drop the column in `down()`. Run `php artisan migrate`, then `php artisan make:job MarkTaskReminder`.

Keep the generated `ShouldQueue` interface and `Queueable` trait. Import `App\Models\Task` and replace the constructor and `handle()` method.

```php
public function __construct(public int $taskId) {}

public function handle(): void
{
    Task::query()
        ->whereKey($this->taskId)
        ->whereNull('reminded_at')
        ->update(['reminded_at' => now()]);
}
```

The condition and write happen in one statement. Only the first worker to update the task sets the timestamp. The job can also finish normally if the task has already been deleted.

## Dispatch the job and verify the retry

Set `QUEUE_CONNECTION=database` in your local `.env` and confirm that the `jobs` table exists. Run `php artisan config:clear` if you previously cached the configuration. With at least one task in the database, dispatch this from Tinker.

```php
$task = App\Models\Task::query()->firstOrFail();
App\Jobs\MarkTaskReminder::dispatch($task->id)->afterCommit();
```

When you dispatch inside a database transaction, `afterCommit()` waits until the transaction commits before the job can run. The worker can then see the task you just wrote.

Open another terminal in the project directory and process one job. Confirm that this connection’s `retry_after` is greater than 30 seconds.

```bash
php artisan queue:work database --once --timeout=30 --tries=3
```

Check `$task->fresh()->reminded_at` in Tinker. Dispatch the same job again and run the worker again. The timestamp should stay the same. In production, run the worker under a process manager and monitor failures and queue depth.

## Sending a real reminder

This job makes a database update safe to repeat. An external email or SMS adds a separate side effect. The process could stop after the provider accepts a request and before you mark it as sent. Use a stable idempotency key where the provider supports one, and persist the delivery state so the next attempt can recover.
