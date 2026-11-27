---
course: rest-api
title: "用接口新建任务"
description: "新增成功返回 201，输入不合格返回 422。"
order: 2
checkpoint: "创建任务时客户端提交的 done 不生效，空标题不会新增记录。"
minutes: 17
keywords: ["API","POST","201","validation","contract","新增","验证"]
sources:
  - { label: "验证", url: "https://laravel.com/framework/docs/13.x/validation" }
  - { label: "资源响应", url: "https://laravel.com/framework/docs/13.x/eloquent-resources#resource-responses" }
---

## 只保存通过验证的字段

在 `routes/api.php` 中将 POST 与 GET 放在一起，共用导入。保留任务清单里 `Task` 的 `$fillable = ['title']`。数据库负责生成 `done` 默认值，所以序列化前重新读取记录。

```php
Route::post('/v1/tasks', function (Request $request) {
    $data = $request->validate(['title' => ['bail', 'required', 'string', 'max:120']]);

    $task = Task::create($data);

    return (new TaskResource($task->refresh()))->response()->setStatusCode(201);
});
```

## 查看两类响应

启动 Artisan 后另开终端发请求。201 的内容位于 `data`，422 的错误位于 `errors.title`。

```bash
curl -i 'http://localhost:8000/api/v1/tasks' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"title":"Record the API contract"}'

curl -i 'http://localhost:8000/api/v1/tasks' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"title":""}'
```

## 练习与验收

给第一条请求增加 `"done":true`。新增任务仍为未完成，因为创建契约只接收标题。对比空标题请求前后的行数，应保持不变。完成归属校验和认证前，只在本地开放这个写接口。
