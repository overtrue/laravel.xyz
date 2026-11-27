---
course: eloquent
title: "Page through a changing table with cursors"
description: "Compare adjacent pages and choose an ordering that is unique and non-null."
order: 2
checkpoint: "Insert a newer task between page requests and confirm the captured cursor returns no duplicate IDs."
minutes: 19
keywords: ["Eloquent","cursorPaginate","stable sort","游标分页","排序","大表"]
sources:
  - { label: "Cursor pagination", url: "https://laravel.com/framework/docs/13.x/pagination#cursor-pagination" }
---

## Use a stable ordering

A cursor describes the last row you saw, letting the database continue from its ordered values. In Taskboard, prepare at least five tasks under the same project. Set `$projectId` in Tinker and run this example.

```php
$query = Task::query()->where('project_id', $projectId)->orderByDesc('id');
$first = (clone $query)->cursorPaginate(2);
$cursor = $first->nextCursor();

if ($cursor !== null) {
    $second = (clone $query)->cursorPaginate(2, ['*'], 'cursor', $cursor);
    dump($first->pluck('id')->all(), $second->pluck('id')->all());
}
```

The first and second ID lists should have no intersection. A unique, non-null ID supplies a total ordering. If you sort by a timestamp that can repeat, include the ID as a second ordering column and keep both selected.

## Decide how the endpoint will change

Offset pagination suits pages that must jump directly to page 12 or report a total count. Cursors suit a feed with next and previous links. Treat a cursor as opaque, and retain the same filters and order when following the next link. Cursor paging does not create a frozen snapshot of changing rows.

## Practice and verify

Capture the first page and cursor, insert a newer task in the same project, and reuse the captured cursor. The new row belongs before the cursor and the two captured pages should not duplicate an ID. Then confirm what happens if the client changes the project filter mid-stream. Reset the cursor whenever the filter changes.
