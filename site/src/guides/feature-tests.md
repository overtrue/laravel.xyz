---
title: 用功能测试固定表单行为
description: 测试有效标题能写入、无效标题被拒绝，以及用户提交后的去向。
order: 5
checkpoint: "两项表单测试通过；修改成功后的跳转地址，相应断言会失败。"
minutes: 8
keywords: [测试, PHPUnit, Pest, RefreshDatabase, HTTP, assertDatabaseHas, 表单]
sources:
  - { label: HTTP 测试, url: 'https://laravel.com/framework/docs/13.x/http-tests' }
  - { label: 数据库测试, url: 'https://laravel.com/framework/docs/13.x/database-testing' }
---

一项表单功能常在三处变动，验证规则、写入逻辑和提交后的页面。功能测试从 HTTP 请求走这三处，能一起守住用户看到的行为。

## 给测试单独的数据库

在 `phpunit.xml` 的 `<php>` 块里检查 `DB_CONNECTION=sqlite` 和 `DB_DATABASE=:memory:`。若这两项还被注释，取消注释。运行测试前清掉本地的配置缓存并确认测试指向隔离的数据库。`RefreshDatabase` 会根据迁移准备数据库并隔离用例的数据。

运行 `php artisan make:test TaskCreationTest`，把生成的 `tests/Feature/TaskCreationTest.php` 替换成下面的内容。示例使用 Composer 安装的项目自带的 PHPUnit。

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskCreationTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_stores_a_valid_task_and_redirects(): void
    {
        $this->post(route('tasks.store'), ['title' => '写功能测试'])
            ->assertRedirect(route('tasks.index'));

        $this->assertDatabaseHas('tasks', ['title' => '写功能测试']);
        $this->get(route('tasks.index'))->assertOk()->assertSee('写功能测试');
    }

    public function test_it_keeps_the_list_unchanged_for_an_empty_title(): void
    {
        $this->from(route('tasks.index'))
            ->post(route('tasks.store'), ['title' => ''])
            ->assertRedirect(route('tasks.index'))
            ->assertSessionHasErrors('title');

        $this->assertDatabaseCount('tasks', 0);
    }
}
```

```bash
php artisan test --filter=TaskCreationTest
```

第一个用例从请求到列表都检查一遍。第二个用例既看用户收到的错误，也看无效输入是否写到了数据库。只测重定向很容易漏掉后者。

## 把回归变成用例

试着在本地把成功后的重定向暂时改成 `/`。重跑测试，第一条会在重定向断言处失败。完成实验后恢复跳转。要对接其他客户端时，可以再加一条 `postJson()` 的用例，验证字段错误以 `422` JSON 返回。

如果部署所用的数据库不是 SQLite，还应在持续集成覆盖实际数据库驱动，重点检查数据库约束、事务和生产查询。
