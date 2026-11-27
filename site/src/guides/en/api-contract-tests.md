---
course: rest-api
title: "Protect the API contract with feature tests"
description: "Assert both response shape and absence of unintended database writes."
order: 3
checkpoint: "Your tests cover the paginated response, a rejected title and a successful creation with status 201."
minutes: 22
keywords: ["HTTP tests","RefreshDatabase","JSON contract","422","契约","回归"]
sources:
  - { label: "HTTP tests", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "Database tests", url: "https://laravel.com/framework/docs/13.x/database-testing" }
---

## Test the routes through HTTP

Save this as `tests/Feature/TaskApiContractTest.php`. Confirm `phpunit.xml` uses an isolated SQLite database, as in the Taskboard testing lesson. The test uses `RefreshDatabase` to give each case a clean schema.

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

Run `php artisan test --filter=TaskApiContractTest`. Verify that a list request and an invalid write both pass.

## Practice and verify

Add a third test for a valid POST. Assert status 201, check `data.done` is false, and use `assertDatabaseHas` to confirm the title persisted. Then temporarily replace the collection resource with a plain array and run the suite. The first test should fail because the response lost its pagination envelope. Restore the resource after the check.

## When the contract changes

Keep assertions focused on behavior clients rely on. Current tests should not fix incidental metadata such as full URLs, but they should fail if a refactor removes the agreed fields or changes a write's status.
