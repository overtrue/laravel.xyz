---
course: php-composer
title: "用 Composer 自动加载第一个类"
description: "把命名空间映射到目录，并检查干净安装后能否找到同一个类。"
order: 3
checkpoint: "报告能加载 Money.php，改名会报错，恢复文件名后再次运行成功。"
minutes: 14
keywords: ["Composer","PSR-4","autoload","lockfile","自动加载","依赖"]
sources:
  - { label: "Composer 基本用法", url: "https://getcomposer.org/doc/01-basic-usage.md" }
  - { label: "PSR-4 自动加载", url: "https://getcomposer.org/doc/04-schema.md#psr-4" }
---

创建空目录，将下面内容保存为 `composer.json`。Composer 会把 `Workshop\` 命名空间映射到 `src/` 下的文件。

```json
{
  "name": "orbit-workshop/inventory",
  "description": "A local Composer exercise",
  "require": { "php": "^8.3" },
  "autoload": { "psr-4": { "Workshop\\": "src/" } }
}
```

## 添加类与入口

把类保存到 `src/Money.php`。

```php
<?php
declare(strict_types=1);

namespace Workshop;

final class Money
{
    public static function format(int $cents): string
    {
        if ($cents < 0) {
            throw new \InvalidArgumentException('Use a non-negative number of cents');
        }

        return sprintf('%d.%02d', intdiv($cents, 100), $cents % 100);
    }
}
```

把入口保存为 `report.php`。

```php
<?php
declare(strict_types=1);

require __DIR__.'/vendor/autoload.php';

echo \Workshop\Money::format(1447), PHP_EOL;
```

运行 `composer install` 与 `php report.php`，预期输出 `14.47`。类名、目录映射和文件名大小写要对应，尤其在区分大小写的 Linux 文件系统上。

## 练习与验收

执行 `composer check-platform-reqs`。临时把文件改名为 `src/MoneyTest.php`，再次运行脚本，应看到找不到类。把文件名复原并确认输出。以后为应用添加依赖时，提交 `composer.lock`，用 `composer install` 复现解析好的版本。确实需要重新解析版本时再执行 `composer update`。
