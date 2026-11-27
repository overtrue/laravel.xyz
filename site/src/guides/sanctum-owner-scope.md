---
course: api-access
title: "用 Sanctum 认证并隔离任务数据"
description: "把新任务归给已认证的用户，列表也按同一个用户筛选。"
order: 1
checkpoint: "匿名请求返回 401，有效令牌只能读取其用户拥有的任务。"
minutes: 26
keywords: ["Sanctum","token","authentication","owner scope","认证","令牌","归属"]
sources:
  - { label: "Sanctum API 令牌", url: "https://laravel.com/framework/docs/13.x/sanctum#api-token-authentication" }
  - { label: "外键约束", url: "https://laravel.com/framework/docs/13.x/migrations#foreign-key-constraints" }
---

沿用 JSON API 课程。接下来两个接口都需要 Sanctum 身份。对外公开应用前，也要检查独立的 Web 路由是否受到保护。

## 给任务增加归属

执行 `php artisan make:migration add_user_id_to_tasks --table=tasks`。将以下内容放入 `up()`。已有任务保持未分配，不会出现在任何用户的 API 列表中。练习的回滚可在 `Schema::table()` 中调用 `dropConstrainedForeignId('user_id')`。

```php
Schema::table('tasks', function (Blueprint $table) {
    $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
});
```

执行 `php artisan migrate`。在 `User` 模型导入 `Laravel\Sanctum\HasApiTokens`，并在类中加入 `use HasApiTokens;`。

## 给读写都加上归属约束

用下面的路由组替换之前的两条 API 路由。保留原来的导入。从已认证身份拿用户 ID，创建时不从 JSON 复制归属字段。

```php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/v1/tasks', function (Request $request) {
        $data = $request->validate(['per_page' => ['sometimes', 'integer', 'between:1,50']]);
        $tasks = Task::query()->where('user_id', $request->user()->id)
            ->latest('id')->paginate((int) ($data['per_page'] ?? 15));

        return TaskResource::collection($tasks->withQueryString());
    });

    Route::post('/v1/tasks', function (Request $request) {
        $data = $request->validate(['title' => ['bail', 'required', 'string', 'max:120']]);
        $task = new Task($data);
        $task->user_id = $request->user()->id;
        $task->save();

        return (new TaskResource($task->refresh()))->response()->setStatusCode(201);
    });
});
```

## 练习与验收

在可重建的本地库中，用 Tinker 创建令牌。

```php
$user = App\Models\User::factory()->create();
echo $user->createToken('orbit-local', ['tasks:update'])->plainTextToken;
```

把令牌填进本地接口客户端的 Bearer Token 字段，避免写入源码、日志或共享截图。无令牌时应返回 401。分别用两个本地用户创建任务并读取列表，每个令牌只能看到自己的任务。练完可用 `$user->tokens()->where('name', 'orbit-local')->delete()` 吊销，也可保留给下一课。
