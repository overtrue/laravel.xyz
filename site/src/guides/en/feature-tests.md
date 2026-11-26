---
title: Test the task form through HTTP
description: Verify that good input is stored, bad input is rejected, and users land on the right page.
order: 5
checkpoint: "Both form tests pass. Changing the success redirect makes the relevant assertion fail."
minutes: 8
keywords: [tests, testing, PHPUnit, Pest, RefreshDatabase, HTTP, assertDatabaseHas, form]
sources:
  - { label: HTTP tests, url: 'https://laravel.com/framework/docs/13.x/http-tests' }
  - { label: Database testing, url: 'https://laravel.com/framework/docs/13.x/database-testing' }
---

A form submission crosses validation, database writes, and a redirect. Feature tests exercise all three by making an HTTP request against the application.

## Give the tests their own database

Check the `<php>` section in `phpunit.xml` for `DB_CONNECTION=sqlite` and `DB_DATABASE=:memory:`. Uncomment them if necessary. Clear any local configuration cache and verify that tests point at an isolated database. `RefreshDatabase` uses your migrations and keeps data separate between test cases.

Run `php artisan make:test TaskCreationTest`. Replace `tests/Feature/TaskCreationTest.php` with this PHPUnit test class.

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
        $this->post(route('tasks.store'), ['title' => 'Write a feature test'])
            ->assertRedirect(route('tasks.index'));

        $this->assertDatabaseHas('tasks', ['title' => 'Write a feature test']);
        $this->get(route('tasks.index'))->assertOk()->assertSee('Write a feature test');
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

The first test checks the redirect, the saved row, and the contents of the list. The second checks for a validation error and confirms the request didn’t write a row.

## Turn a regression into a test

Temporarily change the redirect after a successful submission to `/`. Run the tests and look for the expected redirect failure. Then restore the route. If you expose the same data through an API, add a `postJson()` test for the `422` response and its field errors.

For a deployment on a database other than SQLite, run tests on that driver in CI as well. Cover schema constraints, transactions, and the queries the production application depends on.
