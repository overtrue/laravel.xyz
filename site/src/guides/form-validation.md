---
title: 用表单保存一条任务
description: 让用户给清单添加任务。忘了填标题时，在输入框旁提醒他们。
order: 2
checkpoint: "分别提交空标题和有效标题。哪一次在清单里增加了任务？"
minutes: 9
keywords: [表单, 验证, 校验, Form Request, validate, CSRF, Mass Assignment]
sources:
  - { label: Form Request 验证, url: 'https://laravel.com/framework/docs/13.x/validation#form-request-validation' }
  - { label: CSRF 防护, url: 'https://laravel.com/framework/docs/13.x/csrf' }
  - { label: 批量赋值, url: 'https://laravel.com/framework/docs/13.x/eloquent#mass-assignment' }
---

接着上一节的任务清单，为页面加一个「新增任务」输入框。把验证规则放在请求类里，路由只处理验证通过的数据。本节的写入入口供本地练习。公开部署前，要为写操作补上身份验证和授权。

## 让请求类负责校验

```bash
php artisan make:request StoreTaskRequest
```

编辑 `app/Http/Requests/StoreTaskRequest.php`，保留生成的命名空间和导入，替换类内的两个方法。`bail` 让同一个字段在遇到第一条错误后停下。

```php
public function authorize(): bool
{
    return true;
}

public function rules(): array
{
    return [
        'title' => ['bail', 'required', 'string', 'max:120'],
    ];
}
```

在 `app/Models/Task.php` 的 `Task` 类中添加 `protected $fillable = ['title'];`。请求验证和模型的可写字段各管一层。`done` 仍由数据库默认值设成 `false`，它不在这个新增表单的可写范围内。

## 接上提交路径

在 `routes/web.php` 顶部添加 `use App\Http\Requests\StoreTaskRequest;`，保留上一节的 `GET` 路由，再加入 `POST` 路由。

```php
Route::post('/tasks', function (StoreTaskRequest $request) {
    Task::create($request->validated());

    return to_route('tasks.index');
})->name('tasks.store');
```

在 `index.blade.php` 的标题和任务列表之间加入表单。`@csrf` 生成令牌字段。验证失败时，Web 请求会带着错误和旧输入回到表单。

```blade
<form method="post" action="{{ route('tasks.store') }}">
    @csrf
    <label for="title">任务标题</label>
    <input id="title" name="title" value="{{ old('title') }}" maxlength="120"
        @error('title') aria-invalid="true" aria-describedby="title-error" @enderror>
    @error('title')
        <p id="title-error" role="alert">{{ $message }}</p>
    @enderror
    <button type="submit">新增任务</button>
</form>
```

浏览器的 `maxlength` 给出即时约束，服务端的 `max:120` 负责保护写入。验证通过后重定向到列表，用户刷新列表时不会再提交一次表单。

## 验收两条路径

先提交空标题。你应该回到表单并看到错误，数据库行数保持原样。再写「给任务清单加表单」，应该跳回列表并看见新任务。默认错误信息可能是英文，与项目语言配置一致。后续可通过请求类的 `messages()` 提供针对这个表单的中文提示。

要增加优先级或到期日期时，可以先在[表单验证工具](/zh/tools/validation/)组装规则，再同步更新迁移、可写字段和测试。
