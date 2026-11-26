---
course: php-composer
title: "Load your first class with Composer"
description: "Map a namespace to a directory and check that clean installs load the same code."
order: 3
checkpoint: "The report runs with Money.php, fails when the file is renamed, and runs again after you restore it."
minutes: 14
keywords: ["Composer","PSR-4","autoload","lockfile","自动加载","依赖"]
sources:
  - { label: "Composer basic usage", url: "https://getcomposer.org/doc/01-basic-usage.md" }
  - { label: "PSR-4 autoloading", url: "https://getcomposer.org/doc/04-schema.md#psr-4" }
---

Create an empty directory for this exercise. Save this as `composer.json`. Composer maps the `Workshop\` namespace to filenames under `src/`.

```json
{
  "name": "orbit-workshop/inventory",
  "description": "A local Composer exercise",
  "require": { "php": "^8.3" },
  "autoload": { "psr-4": { "Workshop\\": "src/" } }
}
```

## Add the class and entry point

Put the class in `src/Money.php`.

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

Save this entry point as `report.php`.

```php
<?php
declare(strict_types=1);

require __DIR__.'/vendor/autoload.php';

echo \Workshop\Money::format(1447), PHP_EOL;
```

Run `composer install` and `php report.php`. The report should print `14.47`. The class name, directory mapping, and filename casing must agree, especially on a case-sensitive Linux filesystem.

## Practice and verify

Run `composer check-platform-reqs`. Rename the file to `src/MoneyTest.php` temporarily, then run the report again. You should see a class-not-found error. Restore the filename and confirm the output. If you add dependencies later, commit `composer.lock` for this application and use `composer install` to reproduce the resolved versions. Use `composer update` intentionally when you want the allowed versions to be resolved again.
