---
course: automated-tests
title: "Write a table of validation boundary tests"
description: "Prove that a title at the exact limit is accepted and one character more is rejected."
order: 1
checkpoint: "The boundary suite passes. Lowering the title limit to 119 makes the upper-bound case fail."
minutes: 22
keywords: ["tests","PHPUnit","DataProvider","validation","边界测试","表单"]
sources:
  - { label: "Laravel HTTP tests", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "PHPUnit data providers", url: "https://docs.phpunit.de/en/12.5/writing-tests-for-phpunit.html#data-providers" }
---

## Test the boundaries you promised

Taskboard allows 1 to 120 characters. Test both ends, the first value that is too long, and whitespace. Use the same isolated SQLite test configuration as Taskboard. Save this as `tests/Feature/TaskValidationBoundaryTest.php`.

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class TaskValidationBoundaryTest extends TestCase
{
    use RefreshDatabase;

    #[DataProvider('titles')]
    public function test_title_boundary(string $title, bool $accepted): void
    {
        $response = $this->post(route('tasks.store'), ['title' => $title]);

        if ($accepted) {
            $response->assertRedirect(route('tasks.index'));
            $this->assertDatabaseHas('tasks', ['title' => $title]);
        } else {
            $response->assertSessionHasErrors('title');
            $this->assertDatabaseCount('tasks', 0);
        }
    }

    public static function titles(): array
    {
        return [
            'lower bound' => ['a', true],
            'upper bound' => [str_repeat('é', 120), true],
            'too long' => [str_repeat('a', 121), false],
            'only spaces' => ['   ', false],
        ];
    }
}
```

The data provider gives each input its own test invocation. Inspect database effects along with the redirect and validation errors. The accented string verifies a character limit. A byte limit would reject it before reaching 120 characters.

## Practice and verify

Run `php artisan test --filter=TaskValidationBoundaryTest`. Temporarily tighten the validator to 119 characters and confirm only the upper-bound case fails. Restore the validator and run the test again. Add a case for a missing title if that request is part of your form contract.
