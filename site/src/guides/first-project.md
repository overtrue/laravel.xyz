---
title: 用 Blade 显示任务清单
description: 看看同一个模板怎样显示空清单、待办任务和已完成的任务，再用 SQLite 跟着做一遍。
order: 1
checkpoint: "找出空清单的提示，再把一条待办切换为已完成，看看标题旁边多了什么。"
minutes: 8
keywords: [安装, 入门, Composer, SQLite, Blade, 迁移, 路由, Tinker]
sources:
  - { label: 安装与本地开发, url: 'https://laravel.com/framework/docs/13.x/installation' }
  - { label: 数据库迁移, url: 'https://laravel.com/framework/docs/13.x/migrations' }
  - { label: Blade 模板, url: 'https://laravel.com/framework/docs/13.x/blade' }
---

这一篇的成果很具体。访问 `/tasks`，看见一条从数据库读出来的任务。先用 SQLite 和 Blade 把整条链跑通，后面再加表单、关联和后台任务。

## 建项目，跑一次迁移

准备 PHP 8.3–8.5、Composer 和 PDO SQLite 扩展。执行 `php -v` 和 `php -m` 检查命令行环境。按下方命令安装 Laravel 13 系列。这个示例使用 Blade 输出普通 HTML，因此暂时用不到 Node。

```bash
composer create-project laravel/laravel taskboard '^13.0'
cd taskboard
php artisan about
php artisan make:model Task -m
```

如果你已经安装 Laravel Installer，首页的 `laravel new taskboard` 也可创建项目。选择 SQLite 和无 Starter Kit，并在动手前用 `php artisan --version` 确认所用版本。

在新生成的 `database/migrations/*_create_tasks_table.php` 里，把 `up()` 中的建表语句改成下面这样。

```php
Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->string('title', 120);
    $table->boolean('done')->default(false);
    $table->timestamps();
});
```

```bash
php artisan migrate
php artisan tinker
```

在 Tinker 里手动建一条样本数据。这里传入的是我们自己的固定值，下一篇会给来自浏览器的输入加上验证和可写字段清单。

```php
App\Models\Task::forceCreate(['title' => '读完入门篇']);
```

## 把数据交给视图

在 `routes/web.php` 顶部添加 `Task` 的导入，将下面的路由放在现有路由后面。如果文件已导入 `Route`，直接复用该导入。

```php
use App\Models\Task;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', function () {
    return view('tasks.index', [
        'tasks' => Task::query()->latest('id')->limit(20)->get(),
    ]);
})->name('tasks.index');
```

创建 `resources/views/tasks/index.blade.php`。

```blade
<!doctype html>
<html lang="zh-CN">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>任务清单</title>
<h1>任务清单</h1>
<ul>
    @forelse ($tasks as $task)
        <li>{{ $task->title }}{{ $task->done ? '（已完成）' : '' }}</li>
    @empty
        <li>还没有任务。</li>
    @endforelse
</ul>
</html>
```

`view('tasks.index')` 对应 `tasks/index.blade.php`。双花括号会转义用于显示的文字，适合输出之后由用户填写的任务标题。

## 验收与排查

在终端运行 `php artisan serve`，打开终端显示的地址并访问 `/tasks`。页面应显示「读完入门篇」。空列表时先核对插入样本和 Web 请求使用的数据库是否相同。出现 `no such table: tasks` 时，用 `php artisan migrate:status` 确认迁移状态。找不到视图时，检查文件名里的 `.blade.php` 和 `tasks` 目录。

试着在 Tinker 里把这条任务的 `done` 改成 `true`，再刷新页面。文字后出现「已完成」，说明你已经连起数据库、路由和视图。
