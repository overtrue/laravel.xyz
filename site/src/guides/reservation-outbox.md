---
course: reservation-capstone
title: "把预约事件和数据库提交放在一起"
description: "即使 Worker 停止也能保留事件，重复消费只生成一份审计记录。"
order: 2
checkpoint: "暂停消费者后预约会留下一个待处理事件，连续执行两次处理命令只记录一次。"
minutes: 32
keywords: ["outbox","transaction","duplicate delivery","worker","发件箱","可靠投递","重放"]
sources:
  - { label: "数据库与事务", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
  - { label: "任务调度", url: "https://laravel.com/framework/docs/13.x/scheduling" }
---

## 让业务和事件一起落库

新增一个迁移创建下面两张表，回滚时逆序删除。先迁移，再改路由。

```php
Schema::create('reservation_outbox', function (Blueprint $table) {
    $table->uuid('request_id')->primary();
    $table->timestamp('created_at');
    $table->timestamp('processed_at')->nullable()->index();
});

Schema::create('reservation_audit', function (Blueprint $table) {
    $table->uuid('request_id')->primary();
    $table->timestamp('recorded_at');
});
```

在上一课的库存判断紧接着插入下面代码，位置必须在同一个事务里。新预约与待处理事件一起提交。重复的请求 ID 会走已有预约分支，不会再写事件。

```php
DB::table('reservation_outbox')->insert([
    'request_id' => $key,
    'created_at' => now(),
]);
```

## 消费待处理事件

把命令加到 `routes/console.php`，导入只保留一条。消费者先读取待处理 ID，再在事务中有条件地认领。记录审计效果和标记完成共用这一事务。

```php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

Artisan::command('reservations:record', function () {
    $pending = DB::table('reservation_outbox')->whereNull('processed_at')
        ->orderBy('created_at')->orderBy('request_id')->limit(100)->pluck('request_id');

    foreach ($pending as $key) {
        DB::transaction(function () use ($key) {
            $claimed = DB::table('reservation_outbox')
                ->where('request_id', $key)->whereNull('processed_at')
                ->update(['processed_at' => now()]);

            if ($claimed === 1) {
                DB::table('reservation_audit')->insert([
                    'request_id' => $key, 'recorded_at' => now(),
                ]);
            }
        }, attempts: 3);
    }

    return 0;
});
```

多个消费者可能读取到同一个 ID，但只有一个能更新尚未处理的行。如果写审计失败，认领也会回滚。这个保证适用于同一个数据库；发送外部消息或邮件还需要重复投递识别机制。

## 练习与验收

停掉消费者，创建一条新预约。业务应该成功，并产生一条处理时间为空的待处理事件。执行两次 `php artisan reservations:record`，确认处理时间已写入、审计只出现一条。需要定期执行时，沿用可靠性课程里的计划任务。
