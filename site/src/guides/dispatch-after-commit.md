---
course: async-work
title: "在事务提交之后才分发任务"
description: "观察数据库队列的提交时机，并验证回滚不会留下任务。"
order: 1
checkpoint: "已提交事务的队列任务会更新数据，回滚的事务不会留下队列任务。"
minutes: 23
keywords: ["queue","transaction","afterCommit","rollback","队列","提交","回滚"]
sources:
  - { label: "任务与数据库事务", url: "https://laravel.com/framework/docs/13.x/queues#jobs-and-database-transactions" }
---

## 直接观察数据库队列

沿用 `MarkTaskReminder` 与 jobs 迁移。本地设置 `QUEUE_CONNECTION=database`，执行 `php artisan config:clear`。检查期间先停掉 Worker，避免计数在后台变化。

在 Tinker 执行示例。两个布尔值都应为 true，说明事务中没有入队，提交后才多出一条记录。

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

## 验证回滚路径

在同一个 Tinker 会话中继续运行下一段，沿用前面的导入。

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

事务回滚后不应留下任务记录或提醒任务。提交后入队还保证 Worker 可以读取已落库的数据。若进程恰好在提交和入队之间退出，事件仍可能丢失，综合项目会用发件箱处理这个窗口。

## 练习与验收

执行一次 `php artisan queue:work database --once`，确认已提交的任务写入提醒时间，回滚的任务没有队列记录。数据库里已有其他示例任务时，先检查队列，必要时在全新的本地库中练习。
