---
course: automated-tests
title: "Test a queued boundary with a fake"
description: "Prove the command schedules the right job without running a worker in the test suite."
order: 2
checkpoint: "Verify the command dispatches the expected job and a repeated handler call preserves the first timestamp."
minutes: 22
keywords: ["Queue fake","assertPushed","Artisan","dispatch","队列假对象","命令测试"]
sources:
  - { label: "Testing queued jobs", url: "https://laravel.com/framework/docs/13.x/queues#testing" }
  - { label: "Console tests", url: "https://laravel.com/framework/docs/13.x/console-tests" }
---

## Decide what this test proves

Use the command from [the scheduling lesson](/learn/schedule-task-reminders/). The command test checks what is pushed, how often, and which ID it carries. The job's database behavior belongs in a separate test.

Save this as `tests/Feature/TaskReminderDispatchTest.php`.

```php
<?php

namespace Tests\Feature;

use App\Jobs\MarkTaskReminder;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class TaskReminderDispatchTest extends TestCase
{
    use RefreshDatabase;

    public function test_command_dispatches_only_for_a_known_task(): void
    {
        Queue::fake([MarkTaskReminder::class]);

        $this->artisan('tasks:remind', ['task' => 999999])
            ->expectsOutput('Task not found.')
            ->assertExitCode(1);

        Queue::assertNothingPushed();

        $task = Task::create(['title' => 'Observe dispatch']);
        $this->artisan('tasks:remind', ['task' => $task->id])->assertExitCode(0);

        Queue::assertPushedOnce(MarkTaskReminder::class);
        Queue::assertPushed(MarkTaskReminder::class, fn ($job) => $job->taskId === $task->id);
        $this->assertNull($task->fresh()->reminded_at);
    }
}
```

Run `php artisan test --filter=TaskReminderDispatchTest`. The row's unchanged timestamp confirms that the fake recorded the push without executing the job. This keeps tests deterministic without depending on a listening worker.

## Practice and verify

Add a second test that instantiates `MarkTaskReminder` with the task ID and calls its `handle()` directly. Verify that the first call writes the timestamp and a second call leaves it unchanged. Calling `handle()` tests the job body. Test queue middleware and after-commit delivery through a real database queue when you need coverage of those boundaries.
