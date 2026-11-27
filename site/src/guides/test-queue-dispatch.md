---
course: automated-tests
title: "用队列假对象测试分发边界"
description: "确认命令推送正确的任务，不依赖测试时运行 Worker。"
order: 2
checkpoint: "确认命令分发了预期任务；重复调用处理方法会保留首次时间戳。"
minutes: 22
keywords: ["Queue fake","assertPushed","Artisan","dispatch","队列假对象","命令测试"]
sources:
  - { label: "测试队列任务", url: "https://laravel.com/framework/docs/13.x/queues#testing" }
  - { label: "控制台测试", url: "https://laravel.com/framework/docs/13.x/console-tests" }
---

## 明确本用例要证明什么

沿用[调度课](/zh/learn/schedule-task-reminders/)的命令。命令测试关注推送了什么、推送次数和参数。任务真正怎样更新数据库由另一个用例来验证。

保存为 `tests/Feature/TaskReminderDispatchTest.php`。

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

执行 `php artisan test --filter=TaskReminderDispatchTest`。提醒时间保持为空，说明假对象只记录了分发，没有跑任务。即使测试环境没有 Worker，结果也稳定。

## 练习与验收

增加另一个测试，传入任务 ID 实例化 `MarkTaskReminder`，直接调用 `handle()`。确认第一次写入时间，第二次保持不变。直接调用覆盖的是任务逻辑，若要验证队列中间件或提交后分发，还要通过真实数据库队列检查。
