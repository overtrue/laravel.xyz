---
course: async-work
title: "避免任务重叠，同时保留重试"
description: "用共享锁减少同一任务的并发执行，并保留可重复的数据库写入。"
order: 2
checkpoint: "重试任务后再发一次提醒，确认两次执行都没改动已有时间戳。"
minutes: 25
keywords: ["WithoutOverlapping","lock","retry_after","worker","缓存锁","重试","互斥"]
sources:
  - { label: "阻止任务重叠", url: "https://laravel.com/framework/docs/13.x/queues#preventing-job-overlaps" }
  - { label: "原子锁", url: "https://laravel.com/framework/docs/13.x/cache#atomic-locks" }
---

## 给每条任务一个锁

打开 `app/Jobs/MarkTaskReminder.php`，保留任务清单课程里的条件更新。在顶部导入中间件，在类里增加方法。

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

锁按任务 ID 隔离。多个 Worker 必须共用支持原子锁的缓存，例如同一数据库缓存或 Redis。这里 Worker 超时是 20 秒、锁过期是 60 秒、数据库队列默认重新可见时间是 90 秒。检查项目实际的 `retry_after`。释放任务可能消耗尝试次数，设定重试预算时要考虑锁争用。

## 在本地制造可观察的锁争用

配置 `CACHE_STORE=database` 并完成缓存表迁移。在 Tinker 将 `$taskId` 设为尚未提醒的任务，手动持有同一个锁。

```php
$job = new App\Jobs\MarkTaskReminder($taskId);
$lock = Cache::lock($job->middleware()[0]->getLockKey($job), 60);
dump($lock->get());
```

锁还持有时，在另一个终端分发该任务并运行一次 Worker。

```bash
php artisan queue:work database --once --timeout=20 --tries=5
```

提醒时间应不变，任务会延迟后重新入队。回到第一个会话执行 `$lock->release()`，等 15 秒再处理。

## 练习与验收

再次运行 Worker，确认任务成功。重发一次同任务，已写入的提醒时间不能变化。即使已经加锁，也要保留条件更新，因为进程退出后任务仍有可能重新投递。
