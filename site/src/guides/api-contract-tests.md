---
course: rest-api
title: "用功能测试保护 API 契约"
description: "同时检查 JSON 形状、状态码和失败写入对数据库的影响。"
order: 3
checkpoint: "测试覆盖分页响应、标题验证失败以及返回 201 的成功创建。"
minutes: 22
keywords: ["HTTP tests","RefreshDatabase","JSON contract","422","契约","回归"]
sources:
  - { label: "HTTP 测试", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "数据库测试", url: "https://laravel.com/framework/docs/13.x/database-testing" }
---

## 通过 HTTP 测试路由

保存为 `tests/Feature/TaskApiContractTest.php`。和任务清单测试课一样，确认 `phpunit.xml` 使用隔离的 SQLite 库。`RefreshDatabase` 给每个用例提供干净状态。

```php
<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskApiContractTest extends TestCase
{
    use RefreshDatabase;

    public function test_collection_has_a_stable_shape(): void
    {
        Task::create(['title' => 'Older task']);
        Task::create(['title' => 'Newer task']);

        $this->getJson('/api/v1/tasks?per_page=1')
            ->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.title', 'Newer task')
            ->assertJsonPath('meta.per_page', 1)
            ->assertJsonStructure(['data' => [['id', 'title', 'done']], 'links', 'meta']);
    }

    public function test_invalid_write_leaves_the_database_unchanged(): void
    {
        $this->postJson('/api/v1/tasks', ['title' => ''])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('title');

        $this->assertDatabaseCount('tasks', 0);
    }
}
```

执行 `php artisan test --filter=TaskApiContractTest`，确认列表和错误写入都通过。

## 练习与验收

增加一个有效 POST 用例。断言状态码 201、`data.done` 是 false，并用 `assertDatabaseHas` 检查标题。再临时把资源集合替换为普通数组，运行测试。第一条测试应因为缺少分页外层结构而失败，最后恢复资源类。

## 契约怎么变

优先检查客户端明确依赖的行为。测试可以放过完整链接里的主机名等细节，同时在字段消失或写入状态码变化时及时失败。
