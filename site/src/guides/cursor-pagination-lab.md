---
course: eloquent
title: "用游标分页读取变化中的表"
description: "对比相邻两页，选出唯一且非空的排序键。"
order: 2
checkpoint: "两次翻页之间插入一条较新的任务，复用游标后没有重复 ID。"
minutes: 19
keywords: ["Eloquent","cursorPaginate","stable sort","游标分页","排序","大表"]
sources:
  - { label: "游标分页", url: "https://laravel.com/framework/docs/13.x/pagination#cursor-pagination" }
---

## 先让排序稳定

游标记录上次读到的排序值，数据库可以从那个位置继续。为同一项目准备至少五条任务，在 Tinker 设置 `$projectId` 并运行。

```php
$query = Task::query()->where('project_id', $projectId)->orderByDesc('id');
$first = (clone $query)->cursorPaginate(2);
$cursor = $first->nextCursor();

if ($cursor !== null) {
    $second = (clone $query)->cursorPaginate(2, ['*'], 'cursor', $cursor);
    dump($first->pluck('id')->all(), $second->pluck('id')->all());
}
```

两组 ID 不应重复。唯一且非空的 ID 为记录提供完整顺序。如果按会重复的时间戳排序，补上 ID 作为并列时的第二排序键，并保留这两列。

## 选择合适的接口形式

需要直接跳到第 12 页或展示总数时，偏移分页更自然。持续加载下一页的列表适合游标。客户端把游标视为不透明值，请求下一页时保持筛选和排序一致。游标不会冻结正在变化的数据。

## 练习与验收

保存第一页和游标，在同一项目里插入一条更晚的任务，再用原游标读第二页。新记录的位置在游标前，两页之间不应有重复 ID。最后试着切换项目筛选，解释为什么切换条件时要重置游标。
