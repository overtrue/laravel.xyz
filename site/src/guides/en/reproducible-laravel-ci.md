---
course: automated-tests
title: "Run reproducible Laravel tests in CI"
description: "Keep the dependency lock compatible with the oldest supported PHP and run the suite on two runtimes."
order: 3
checkpoint: "Both PHP runtimes pass the suite and a deliberately broken assertion fails the CI run."
minutes: 25
keywords: ["CI","GitHub Actions","Composer lock","matrix","PHP","持续集成","多版本"]
sources:
  - { label: "Composer platform configuration", url: "https://getcomposer.org/doc/06-config.md#platform" }
  - { label: "GitHub Actions workflow syntax", url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions" }
  - { label: "Setup PHP action", url: "https://github.com/shivammathur/setup-php" }
---

## Prepare one lock file

Match the PHP version constraints to what you support. If you generated the lock on PHP 8.5 and it resolves packages that need newer PHP than 8.3, use `composer config platform.php 8.3.0` and intentionally run `composer update` on a practice branch to resolve compatible versions. Review and commit the lock file used by the application. The platform override guides resolution. `composer check-platform-reqs` checks the real worker environment instead.

## Run the same steps for both runtimes

Make sure the test database in `phpunit.xml` is SQLite in memory. Here is a GitHub Actions example you can save as `.github/workflows/laravel.yml`. The workflow installs locked dependencies, prepares the local key, and runs the tests with the same application code.

```yaml
name: Laravel checks
on: [push, pull_request]

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        php: ['8.3', '8.5']
    steps:
      - uses: actions/checkout@v6
      - uses: shivammathur/setup-php@v2
        with:
          php-version: ${{ matrix.php }}
          extensions: mbstring, pdo_sqlite
          coverage: none
      - run: composer install --no-interaction --prefer-dist
      - run: composer check-platform-reqs
      - run: cp .env.example .env && php artisan key:generate
      - run: php artisan test
```

The hosted runner is optional. You can run these commands in local PHP 8.3 and PHP 8.5 environments too. Run `cp` and key generation only in a clean practice checkout that has no application data to protect.

## Practice and verify

Get the full suite passing on both runtimes. Change a rule and check that a failed assertion fails the run rather than being skipped. Keep the command deterministic and avoid calling real services in tests. If one runtime fails during dependency install, inspect the lock file and platform requirements before debugging the app itself.
