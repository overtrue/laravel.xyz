---
course: eloquent
title: "测量复合索引的效果"
description: "给任务清单真实查询建索引，并对比 SQLite 执行计划。"
order: 1
checkpoint: "比较加索引前后的执行计划，确认返回的 25 个 ID 及降序顺序一致。"
minutes: 23
keywords: ["Eloquent","EXPLAIN","SQLite","index","SQL","索引","执行计划"]
sources:
  - { label: "SQLite 查询计划", url: "https://www.sqlite.org/eqp.html" }
  - { label: "迁移索引", url: "https://laravel.com/framework/docs/13.x/migrations#indexes" }
---

## 先明确要优化的查询

任务清单要展示某项目的未完成任务。沿用关联章节里的 tasks 和 projects 表，为至少两个项目准备数据。打开 `php artisan tinker`，把 `$projectId` 设成实际项目 ID 后查看计划。

```php
$sql = 'EXPLAIN QUERY PLAN SELECT id, title FROM tasks
        WHERE project_id = ? AND done = ?
        ORDER BY id DESC LIMIT 25';

dump(DB::select($sql, [$projectId, false]));
```

观察访问方式和临时排序。计划说明数据库准备怎样执行。小表被直接扫描也可能更省事，测量结论需要结合实际数据量判断。

## 加入与查询匹配的索引

用 `php artisan make:migration add_task_list_index --table=tasks` 生成迁移。在 `up()` 中加入以下内容。回滚函数 `down()` 也用 `Schema::table()`，按显式名称删除索引。

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->index(['project_id', 'done', 'id'], 'tasks_project_done_id_index');
});
```

执行 `php artisan migrate` 后重新查看计划。等值条件放在前面，后面是排序用的 ID。SQLite 可以逆向扫描命中的范围，查看新索引是否出现、是否仍需临时排序。

## 练习与验收

选一组至少 30 条未完成任务，分别保存迁移前后的前 25 个 ID 和查询计划。结果必须一致且按 ID 降序。用一句话记录这个索引服务的查询。给每张表叠很多索引会增加写入成本，实际发生的查询才是增索引的依据。
