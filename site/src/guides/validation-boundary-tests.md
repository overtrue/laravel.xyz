---
course: automated-tests
title: "把输入边界整理成测试表"
description: "证明恰好达到上限会通过，再多一个字符就会失败。"
order: 1
checkpoint: "边界测试通过，把长度上限改为 119 后，上界用例会失败。"
minutes: 22
keywords: ["tests","PHPUnit","DataProvider","validation","边界测试","表单"]
sources:
  - { label: "Laravel HTTP 测试", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "PHPUnit 数据提供者", url: "https://docs.phpunit.de/en/12.5/writing-tests-for-phpunit.html#data-providers" }
---

## 测试承诺过的边界

任务清单允许 1 到 120 个字符。本课覆盖两个边界、超出 1 字符以及全空格。沿用任务清单的 SQLite 测试配置，保存为 `tests/Feature/TaskValidationBoundaryTest.php`。

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

数据提供者会给每个输入分别运行用例。除了重定向和错误内容，也检查数据库是否发生变化。带重音的字符串用于证明上限按字符计算，按字节计算会在 120 个字符前失败。

## 练习与验收

运行 `php artisan test --filter=TaskValidationBoundaryTest`。临时把校验上限收紧到 119，确认恰好 120 的用例失败。恢复规则并再次执行。如果表单也可能完全不提交标题，再补一个字段缺失用例。
