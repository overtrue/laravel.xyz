---
title: 用预加载解决 N+1 查询
description: 给任务加上项目分组，观察列表请求执行的查询数量。
order: 3
checkpoint: "对比预加载前后的 SQL 日志，确认关联项目可以批量读出。"
minutes: 10
keywords: [Eloquent, SQL, N+1, 性能, 数据库, with, belongsTo, 预加载]
sources:
  - { label: Eloquent 关联与预加载, url: 'https://laravel.com/framework/docs/13.x/eloquent-relationships#eager-loading' }
  - { label: 监听查询, url: 'https://laravel.com/framework/docs/13.x/database#listening-for-query-events' }
---

任务多起来后，可以按项目分组。列表中的每一行都要显示项目名，如果每读一行就查一次项目，请求的查询数会随任务数增长。本篇用一个 `belongsTo` 关系观察这种变化。

## 加上项目关联

运行 `php artisan make:model Project -m`，在生成迁移的 `up()` 里创建 `projects` 表。

```php
Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

再运行 `php artisan make:migration add_project_id_to_tasks_table --table=tasks`。在新迁移的 `up()` 中添加下面的列，在 `down()` 中使用 `$table->dropConstrainedForeignId('project_id')` 撤销。

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->foreignId('project_id')->nullable()->constrained()->nullOnDelete();
});
```

执行 `php artisan migrate`。已有任务可以先保持未分组。然后在 `Task` 模型顶部导入 `Illuminate\Database\Eloquent\Relations\BelongsTo`，在类里添加关联。

```php
public function project(): BelongsTo
{
    return $this->belongsTo(Project::class);
}
```

## 先抓一遍查询，再改列表

在 `php artisan tinker` 里准备同一项目下的 8 条任务。开启查询日志要放在样本写入之后，这样日志里只剩下要测量的读取。

```php
$project = App\Models\Project::forceCreate(['name' => '产品发布']);
foreach (range(1, 8) as $i) {
    App\Models\Task::forceCreate(['title' => "准备事项 {$i}", 'project_id' => $project->id]);
}

DB::enableQueryLog();
DB::flushQueryLog();
App\Models\Task::latest('id')->limit(8)->get()->each(fn ($task) => $task->project?->name);
count(DB::getQueryLog());
```

这 8 条任务都使用同一个项目，查询仍会逐行触发。重跑最后三句时，在 `Task::latest` 前加 `with('project:id,name')`，比较前后的查询数。预加载把项目查询合并到一次读取中。

将 `/tasks` 的列表查询改成下面这样。

```php
Task::query()->with('project:id,name')->latest('id')->limit(20)->get();
```

保留项目 `id` 作为匹配键。如果进一步限制任务表返回的列，也要保留 `project_id`。在列表里可用 `{{ $task->project?->name ?? '未分组' }}` 显示分组。任务标题仍保持原样。

## 什么时候该用预加载

让视图所需的关系跟着查询一起声明。只想显示关联记录数量时，优先试试 `withCount()`。要诊断线上慢请求，先用采样或监控工具定位入口，再在隔离环境复现查询次数。查询日志会在内存里留住参数和记录，诊断完及时关闭。
