---
course: async-work
title: "Prevent overlapping work without losing retries"
description: "Use a shared lock to limit concurrent work and keep the database update repeatable."
order: 2
checkpoint: "Retry the reminder and send it again. The stored timestamp survives both runs unchanged."
minutes: 25
keywords: ["WithoutOverlapping","lock","retry_after","worker","缓存锁","重试","互斥"]
sources:
  - { label: "Preventing job overlaps", url: "https://laravel.com/framework/docs/13.x/queues#preventing-job-overlaps" }
  - { label: "Atomic locks", url: "https://laravel.com/framework/docs/13.x/cache#atomic-locks" }
---

## Add a per-task lock

Open `app/Jobs/MarkTaskReminder.php`. Keep the conditional write from Taskboard. Add the middleware import at the top and the method inside the class.

```php
use Illuminate\Queue\Middleware\WithoutOverlapping;

// Add this method inside MarkTaskReminder.
public function middleware(): array
{
    return [
        (new WithoutOverlapping('reminder:'.$this->taskId))
            ->releaseAfter(15)
            ->expireAfter(60),
    ];
}
```

The lock is scoped by task ID. Workers must share an atomic-lock-capable cache, such as the same database cache or Redis instance. Here a worker times out after 20 seconds, the lock expires after 60, and the database queue's default retry reservation is 90 seconds. Check your actual `retry_after` value. A released job can consume another attempt, so choose a retry budget with contention in mind.

## Reproduce contention locally

Use `CACHE_STORE=database` and a migrated local cache table. Start Tinker, set `$taskId` to an unreminded task, and hold the same lock the middleware will use.

```php
$job = new App\Jobs\MarkTaskReminder($taskId);
$lock = Cache::lock($job->middleware()[0]->getLockKey($job), 60);
dump($lock->get());
```

While the lock is held, dispatch a reminder for that same task in another terminal and run one worker iteration.

```bash
php artisan queue:work database --once --timeout=20 --tries=5
```

The reminder timestamp should remain unchanged and the job should be released for later. Release `$lock` from the first Tinker session and allow 15 seconds for the released job to become available.

## Practice and verify

Run the worker again to let the job succeed. Send another reminder for the same task and confirm its timestamp does not move. Keep the conditional write even with the lock, since a job can be delivered again after a process crash.
