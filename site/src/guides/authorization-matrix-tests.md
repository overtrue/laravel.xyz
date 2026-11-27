---
course: api-access
title: "测试认证与授权矩阵"
description: "分别验证游客、非所有者、能力受限令牌和获准所有者的行为。"
order: 3
checkpoint: "运行权限测试，确认用户无法列出或修改他人的任务。"
minutes: 27
keywords: ["Sanctum","actingAs","policy tests","401","403","认证矩阵","权限测试"]
sources:
  - { label: "Sanctum 测试", url: "https://laravel.com/framework/docs/13.x/sanctum#testing" }
  - { label: "HTTP 断言", url: "https://laravel.com/framework/docs/13.x/http-tests#available-assertions" }
---

## 明确哪些情况必须失败

保存为 `tests/Feature/TaskApiAccessTest.php`，沿用任务清单的 SQLite 测试隔离。`forceCreate` 只用于测试数据。实际 POST 要根据已认证身份赋值归属。

```php
<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TaskApiAccessTest extends TestCase
{
    use RefreshDatabase;

    private function ownedTask(User $owner): Task
    {
        return Task::forceCreate(['title' => 'Owner-only task', 'user_id' => $owner->id]);
    }

    public function test_guests_are_unauthenticated(): void
    {
        $task = $this->ownedTask(User::factory()->create());

        $this->patchJson("/api/v1/tasks/{$task->id}", ['done' => true])->assertUnauthorized();
    }

    public function test_another_user_cannot_change_the_task(): void
    {
        $task = $this->ownedTask(User::factory()->create());
        Sanctum::actingAs(User::factory()->create(), ['tasks:update']);

        $this->patchJson("/api/v1/tasks/{$task->id}", ['done' => true])->assertForbidden();
        $this->assertDatabaseHas('tasks', ['id' => $task->id, 'done' => false]);
    }

    public function test_owner_requires_write_ability(): void
    {
        $owner = User::factory()->create();
        $task = $this->ownedTask($owner);
        Sanctum::actingAs($owner, []);

        $this->patchJson("/api/v1/tasks/{$task->id}", ['done' => true])->assertForbidden();
        $this->assertDatabaseHas('tasks', ['id' => $task->id, 'done' => false]);
    }

    public function test_authorized_owner_can_complete_the_task(): void
    {
        $owner = User::factory()->create();
        $task = $this->ownedTask($owner);
        Sanctum::actingAs($owner, ['tasks:update']);

        $this->patchJson("/api/v1/tasks/{$task->id}", ['done' => true])
            ->assertOk()
            ->assertJsonPath('data.done', true);

        $this->assertDatabaseHas('tasks', ['id' => $task->id, 'done' => true]);
    }
}
```

执行 `php artisan test --filter=TaskApiAccessTest`。四个用例经过真正的 HTTP 路由，区分身份缺失和身份有效但没有权限。

## 练习与验收

再添加一个 GET 测试，写入两个用户的任务，验证列表只包含当前用户的数据。先前的 API 契约测试也要改为已认证用户和有归属的测试数据。还可创建一个一次性的真实令牌，通过本地 HTTP 服务验证一次。`Sanctum::actingAs` 检查授权逻辑，实际请求还会经过令牌解析。
