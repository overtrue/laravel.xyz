---
course: async-work
title: "调度命令，并观察每一段是否成功"
description: "分开验证调度决策、命令退出码和任务执行结果。"
order: 3
checkpoint: "有效 ID 最终会写入提醒；不存在的 ID 返回退出码 1，队列不增加任务。"
minutes: 21
keywords: ["Scheduler","Artisan","cron","withoutOverlapping","计划任务","调度","命令"]
sources:
  - { label: "任务调度", url: "https://laravel.com/framework/docs/13.x/scheduling" }
  - { label: "Artisan 命令行", url: "https://laravel.com/framework/docs/13.x/artisan" }
---

## 注册命令与周期

在 `routes/console.php` 中添加下面内容。Artisan 导入只留一条，把调度参数换成数据库中存在的任务 ID。

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

用选定的 ID 执行 `php artisan tasks:remind 1`，应打印要处理的任务并以成功退出。再用 `php artisan schedule:list` 查看下一次执行时间，使用 `php artisan schedule:run` 立即判断本轮计划。调度分发任务，另一个 Worker 负责真正运行。

## 练习与验收

传入不存在的 ID，应以 1 退出，且 jobs 表不变。用有效 ID 手动触发计划，再核对调度列表、命令成功消息和 Worker 写入的提醒时间。只有调度成功还无法证明 Worker 正常。

## 准备上线

宿主机每分钟调用调度一次。调度锁可以阻止命令本身重叠。如果多台主机只运行一份计划，配合支持的共享缓存使用 `onOneServer()`。分别保存调度与 Worker 的日志，方便定位卡在哪一段。
