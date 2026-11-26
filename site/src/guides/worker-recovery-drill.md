---
course: deploy-operate
title: "演练 Worker 失败和恢复"
description: "让专用本地队列中的任务失败，精准重试并验证结果。"
order: 3
checkpoint: "恢复失败任务，核对成功日志，并记录实际使用的恢复命令。"
minutes: 28
keywords: ["queue:retry","workers","failed jobs","runbook","故障演练","失败任务","恢复"]
sources:
  - { label: "失败任务", url: "https://laravel.com/framework/docs/13.x/queues#dealing-with-failed-jobs" }
  - { label: "Worker 与部署", url: "https://laravel.com/framework/docs/13.x/queues#queue-workers-and-deployment" }
---

## 制造一条可识别的本地失败

用可重建的项目，配置 `QUEUE_CONNECTION=database` 并迁移默认队列和失败任务表。运行 `php artisan make:job ReleaseDrill`，保留生成的 `ShouldQueue` 实现并替换 `handle()`。

```php
public function handle(): void
{
    throw new \RuntimeException('Intentional local release drill');
}
```

在 Tinker 分发 `App\Jobs\ReleaseDrill::dispatch()->onQueue('release-drill');`。只消费这个命名队列，避免拿走任务清单里其他任务。

```bash
php artisan queue:work database --queue=release-drill --once --tries=1
php artisan queue:failed
```

记录失败任务的 UUID 和最后一个异常。用专用队列区分任务没投递和处理器执行失败。

## 修复后只重试这一条

把处理函数改成 `\Illuminate\Support\Facades\Log::info('Release drill recovered');`。用刚刚记录的 UUID 重试。

```bash
php artisan queue:retry YOUR_FAILED_JOB_UUID
php artisan queue:work database --queue=release-drill --once --tries=1
php artisan queue:failed
```

任务应离开失败列表，配置的日志里应出现成功信息。仅仅被队列接受重试请求，并不能说明处理成功。

## 练习与验收

整理一份简短的处理手册，记下队列名、错误特征、恢复命令和成功证据。真实发布时可用 `php artisan queue:restart`，让进程管控器下的 Worker 完成当前任务后退出并加载新代码。真实失败在重试前要检查业务副作用，外部动作若已成功，二次执行应能识别。
