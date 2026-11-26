---
course: async-work
title: "Run and observe a scheduled command"
description: "Separate the scheduler decision, command exit status, and job execution."
order: 3
checkpoint: "For a valid ID the worker writes a reminder. A missing ID exits with code 1 and enqueues nothing."
minutes: 21
keywords: ["Scheduler","Artisan","cron","withoutOverlapping","计划任务","调度","命令"]
sources:
  - { label: "Task scheduling", url: "https://laravel.com/framework/docs/13.x/scheduling" }
  - { label: "Artisan console", url: "https://laravel.com/framework/docs/13.x/artisan" }
---

## Register a command and a schedule

Append this to `routes/console.php`. Keep one import for the Artisan facade. Replace the schedule's task ID with a row in your local database.

```php
use App\Jobs\MarkTaskReminder;
use App\Models\Task;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('tasks:remind {task}', function () {
    $id = $this->argument('task');
    $task = ctype_digit((string) $id) ? Task::find((int) $id) : null;

    if ($task === null) {
        $this->error('Task not found.');
        return 1;
    }

    MarkTaskReminder::dispatch($task->id);
    $this->info("Queued reminder for task {$task->id}.");
    return 0;
});

Schedule::command('tasks:remind', [1])->everyMinute()->withoutOverlapping(2);
```

Run `php artisan tasks:remind 1` using the chosen ID. It should report where it queued the reminder and return success. Then use `php artisan schedule:list` to see Laravel's next run time and `php artisan schedule:run` to evaluate the schedule now. The scheduler dispatches the job, and a separate worker consumes it.

## Practice and verify

Run the command with a missing ID and check that it exits with code 1 and leaves the jobs table unchanged. For the valid ID, check the same three facts again after a scheduled run: the task appears in the scheduler list, the command returns success, and the worker writes the reminder. A successful scheduler invocation alone cannot prove the worker is healthy.

## Prepare for deployment

Set up a scheduler invocation every minute on the host. A scheduler lock prevents a repeated command run while the previous run holds the lock. For a single scheduler among multiple hosts, use `onOneServer()` with a shared supported cache. Keep worker and scheduler logs distinguishable so you can tell which stage stopped.
