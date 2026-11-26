---
course: rest-api
title: "给任务清单加一个 JSON 接口"
description: "你能用 Blade 展示任务清单，也可以让另一个应用读到同一份数据。先试着给两条任务翻页，再动手写路由。"
order: 1
checkpoint: "每页取一条任务，对比第一页和第二页的任务 ID。把每页数量改成 51，找出报错的字段。"
minutes: 20
keywords: ["API","JsonResource","pagination","per_page","接口","分页"]
sources:
  - { label: "API 资源", url: "https://laravel.com/framework/docs/13.x/eloquent-resources" }
  - { label: "分页", url: "https://laravel.com/framework/docs/13.x/pagination" }
---

Blade 把任务渲染成 HTML 页面，供人阅读。接口则把同一条任务作为 JSON 发给其他应用，让它们读到标题和完成状态。找一找，`data` 里是哪条任务，`meta` 里是第几页。

想在本地写出这个接口，可以先做好[任务清单](../first-project/)和[表单](../form-validation/)。这部分先在本地运行，下一门课会给接口加上访问权限。

## 安装 API 路由文件

执行 `php artisan install:api` 和 `php artisan migrate`。`routes/api.php` 会自动带上 `/api` 前缀，所以文件里的路由写作 `/v1/tasks`，访问地址是 `/api/v1/tasks`。

## 定义明确的 JSON 资源

执行 `php artisan make:resource TaskResource`，用下面的代码替换生成的类。以后加表字段时，只有显式加入资源类的字段才会进入响应。

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'done' => (bool) $this->done,
        ];
    }
}
```

在 `routes/api.php` 加入路由。已有的类导入保留一条即可。

```php
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/v1/tasks', function (Request $request) {
    $data = $request->validate(['per_page' => ['sometimes', 'integer', 'between:1,50']]);

    $tasks = Task::query()->latest('id')->paginate((int) ($data['per_page'] ?? 15));

    return TaskResource::collection($tasks->withQueryString());
});
```

## 练习与验收

用 `php artisan route:list --path=api/v1/tasks` 确认路由。启动应用，携带 `Accept: application/json` 请求 `/api/v1/tasks?per_page=1`。有数据时，`data` 只有一条，同时应看到 `links` 和 `meta`。有下一页时跟着链接继续。传入 51 应返回 422。明确排序字段能让客户端拿到稳定顺序。
