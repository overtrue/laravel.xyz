---
title: 让队列任务可重试
description: 把一次提醒记成幂等更新，再用数据库队列验证重试行为。
order: 4
checkpoint: "对同一任务执行两次提醒，确认首次写入的时间戳保持不变。"
minutes: 11
keywords: [队列, 幂等, 异步, afterCommit, retry_after, worker, database]
sources:
  - { label: 队列与数据库事务, url: 'https://laravel.com/framework/docs/13.x/queues#jobs-and-database-transactions' }
  - { label: Worker 超时与重试, url: 'https://laravel.com/framework/docs/13.x/queues#job-expirations-and-timeouts' }
---

队列把费时的工作移出请求。在任务清单里，先做一个可以反复执行的简化提醒任务。它记录第一次提醒的时间，便于在本地观察重试是否改变结果。

## 用一次条件更新记录结果

运行 `php artisan make:migration add_reminded_at_to_tasks_table --table=tasks`，在 `up()` 中给 `tasks` 加 `$table->timestamp('reminded_at')->nullable();`，在 `down()` 中删掉这一列。执行 `php artisan migrate`，再运行 `php artisan make:job MarkTaskReminder`。

保留生成类的 `ShouldQueue` 接口和 `Queueable` trait，导入 `App\Models\Task`，替换构造方法和 `handle()`。

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

条件和写入在同一条 SQL 中。两个 Worker 先后执行相同任务时，只有第一个会填充时间。任务已经删除时，更新影响零行。这两种情况都允许任务正常结束。

## 等事务提交后，发给 Worker

本地 `.env` 设置 `QUEUE_CONNECTION=database`，检查项目已经迁移了 `jobs` 表。如果之前缓存过配置，运行 `php artisan config:clear`。在 Tinker 里用下方命令发一个任务，前提是列表里已有至少一条任务。

```php
$task = App\Models\Task::query()->firstOrFail();
App\Jobs\MarkTaskReminder::dispatch($task->id)->afterCommit();
```

将来在数据库事务里创建任务时，同样使用 `afterCommit()`。Worker 会在事务提交后才收到任务，避免提早读到尚未写入的主记录。

另开一个终端，在项目目录执行以下命令处理一条等待中的任务。先确认 `config/queue.php` 里此连接的 `retry_after` 大于 30 秒。

```bash
php artisan queue:work database --once --timeout=30 --tries=3
```

回到 Tinker 读取 `$task->fresh()->reminded_at`。再发一次同样的任务并重跑 Worker，时间应保持一致。`--once` 便于本地观察单次处理。正式运行由进程管理器维持 Worker，并为任务失败和积压设置告警。

## 把示例扩成真实提醒

这个例子验证了本地数据库状态可以安全重试。如果以后调用短信或邮件服务，还要为外部请求建立稳定的幂等键或持久化的投递记录。Worker 可能在服务方成功接收后中断，因此「服务方已收到」和「本地已标记」需要分别处理。
