---
course: api-access
title: "Test the authorization matrix"
description: "Check guest, different owner, restricted token, and authorized owner behavior."
order: 3
checkpoint: "Run the access tests and confirm one user cannot list or update another user’s task."
minutes: 27
keywords: ["Sanctum","actingAs","policy tests","401","403","认证矩阵","权限测试"]
sources:
  - { label: "Sanctum testing", url: "https://laravel.com/framework/docs/13.x/sanctum#testing" }
  - { label: "HTTP assertions", url: "https://laravel.com/framework/docs/13.x/http-tests#available-assertions" }
---

## Make failures explicit

Save this as `tests/Feature/TaskApiAccessTest.php`. Use the isolated SQLite test setup from Taskboard. `forceCreate` appears in the test fixture only. The real POST route must assign ownership using the authenticated identity.

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

Run `php artisan test --filter=TaskApiAccessTest`. The four cases verify the policy at the actual HTTP boundary and distinguish an absent identity from an existing identity without access.

## Practice and verify

Add a GET test with tasks for two users and assert that a token's response lists only its own row. Update the earlier API contract tests to authenticate a local user and seed owned tasks now that the routes require authentication. For extra confidence, create a real throwaway token and make one request through the local HTTP server. `Sanctum::actingAs` covers authorization rules, while the live test also exercises the middleware's token parsing.
