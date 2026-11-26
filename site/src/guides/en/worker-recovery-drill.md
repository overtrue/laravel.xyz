---
course: deploy-operate
title: "Rehearse worker failure and recovery"
description: "Fail a job in an isolated queue, retry only that job, and verify its final state."
order: 3
checkpoint: "Recover the failed job, check its log entry and record the command you used."
minutes: 28
keywords: ["queue:retry","workers","failed jobs","runbook","故障演练","失败任务","恢复"]
sources:
  - { label: "Failed jobs", url: "https://laravel.com/framework/docs/13.x/queues#dealing-with-failed-jobs" }
  - { label: "Workers and deployment", url: "https://laravel.com/framework/docs/13.x/queues#queue-workers-and-deployment" }
---

## Create a local failure you can recognize

Use a disposable project with `QUEUE_CONNECTION=database` and the default queue and failed-job migrations. Generate `ReleaseDrill` with `php artisan make:job ReleaseDrill`. Keep the generated `ShouldQueue` implementation and replace its `handle()`.

```php
public function handle(): void
{
    throw new \RuntimeException('Intentional local release drill');
}
```

In Tinker, dispatch `App\Jobs\ReleaseDrill::dispatch()->onQueue('release-drill');`. Run the worker on the named queue to avoid taking other Taskboard jobs.

```bash
php artisan queue:work database --queue=release-drill --once --tries=1
php artisan queue:failed
```

Record the failed job's UUID and the last error. A short named-queue rehearsal separates a delivery problem from a failing handler.

## Fix and retry only the failed item

Replace the handler body with `\Illuminate\Support\Facades\Log::info('Release drill recovered');`. Retry the failed item by UUID, using the value from the previous command.

```bash
php artisan queue:retry YOUR_FAILED_JOB_UUID
php artisan queue:work database --queue=release-drill --once --tries=1
php artisan queue:failed
```

The job should leave the failed list and log the expected message. A temporary toggle that keeps failing on retry gives a different result, even if the queue accepts the retry request.

## Practice and verify

Write a short runbook recording queue name, failure signature, recovery command, and success evidence. During a real deployment update, use `php artisan queue:restart` so supervised workers can exit after their current job and reload code. Review the job's side effects before retrying a real failure. If an external operation already succeeded, a retry must safely recognize it.
