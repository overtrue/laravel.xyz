---
course: api-access
title: "把资源归属和令牌权限写进策略"
description: "同时检查记录所有者和更新任务所需的令牌能力。"
order: 2
checkpoint: "带更新权限的所有者可以修改任务，其他用户收到 403 且数据不变。"
minutes: 23
keywords: ["authorization","Gate","Policy","Sanctum","403","授权","策略","权限"]
sources:
  - { label: "授权策略", url: "https://laravel.com/framework/docs/13.x/authorization#creating-policies" }
  - { label: "令牌能力", url: "https://laravel.com/framework/docs/13.x/sanctum#token-abilities" }
---

## 在 Policy 中集中判断

执行 `php artisan make:policy TaskPolicy --model=Task`。用这段替换 `update` 方法，保留生成的 `User` 和 `Task` 导入。Laravel 会发现 `app/Policies` 中按约定命名的策略。

```php
public function update(User $user, Task $task): bool
{
    return $task->user_id !== null
        && (int) $task->user_id === (int) $user->id
        && $user->tokenCan('tasks:update');
}
```

持有可写令牌也只能操作自己的记录。对第一方会话，Sanctum 的 `tokenCan` 可能直接返回 true。以后接入浏览器会话时仍应保留归属检查。

## 更新前先通过策略

在 `routes/api.php` 顶部增加 `Gate` 导入，并添加下面的路由。复用上一课的 `Request`、`Task`、`Route` 与 `TaskResource`。

```php
use Illuminate\Support\Facades\Gate;

Route::patch('/v1/tasks/{task}', function (Request $request, Task $task) {
    Gate::authorize('update', $task);

    $data = $request->validate(['done' => ['required', 'boolean']]);
    $task->done = (bool) $data['done'];
    $task->save();

    return new TaskResource($task);
})->middleware('auth:sanctum');
```

## 练习与验收

用有 `tasks:update` 能力的令牌 PATCH 自己的任务，提交 `{"done":true}`，预期 200 和 `data.done=true`。换成另一个本地用户或没有读取之外能力的令牌，应返回 403，数据库保持原值。没有归属的记录同样不能更新。真实接口如果不应泄露记录是否存在，可以明确设计 403 或隐藏细节的 404。
