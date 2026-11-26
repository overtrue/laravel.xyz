---
course: deploy-operate
title: "分阶段发布兼容的数据库变更"
description: "先加字段，再更新写入端，最后分批回填旧记录。"
order: 2
checkpoint: "回填后新列没有空值，修改一次标题可以同步更新两列。"
minutes: 27
keywords: ["expand contract","migration","backfill","chunkById","兼容迁移","回填","数据迁移"]
sources:
  - { label: "Laravel 迁移", url: "https://laravel.com/framework/docs/13.x/migrations" }
  - { label: "分批处理", url: "https://laravel.com/framework/docs/13.x/queries#chunking-results" }
---

## 先扩展表结构

在可重建的任务清单库中创建一个可空的 `search_title`。先迁移再发布新代码。旧版本仍使用 `title`，能继续读写。

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->string('search_title', 120)->nullable();
});
```

## 更新写入端，再依赖新字段

在 `Task` 模型加下面的方法。如果已有 `booted()`，把回调加进去。它覆盖通过 Eloquent 模型保存的数据。用查询构造器批量更新时不会触发模型事件，这类写入也要单独处理。

```php
protected static function booted(): void
{
    static::saving(function (Task $task) {
        if ($task->isDirty('title') || $task->search_title === null) {
            $task->search_title = mb_strtolower($task->title);
        }
    });
}
```

## 小批量地回填旧记录

确认旧写入端已退出后，在 Tinker 执行回填。带 `whereNull` 的更新会跳过新写入端刚刚填过的记录。中途中断时可以重新运行。

```php
use Illuminate\Support\Facades\DB;

DB::table('tasks')->whereNull('search_title')->chunkById(100, function ($tasks) {
    foreach ($tasks as $task) {
        DB::table('tasks')->where('id', $task->id)->whereNull('search_title')
            ->update(['search_title' => mb_strtolower($task->title)]);
    }
});

dump(DB::table('tasks')->whereNull('search_title')->count());
```

## 练习与验收

记录回填前后的空值数，确认最终变成 0。再用 Eloquent 修改标题，验证两个字段都正确。若后续要加非空约束，等所有写入端和可能回滚到的版本都能提供新值，再单独发布这项迁移。练习期间保留原字段，旧版本仍能读取。
