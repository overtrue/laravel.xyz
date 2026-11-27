---
course: automated-tests
title: "在持续集成中复现 Laravel 测试"
description: "让锁文件兼容最低 PHP 版本，然后用两种运行环境跑同一套测试。"
order: 3
checkpoint: "两个 PHP 版本都通过测试，故意破坏断言后 CI 会失败。"
minutes: 25
keywords: ["CI","GitHub Actions","Composer lock","matrix","PHP","持续集成","多版本"]
sources:
  - { label: "Composer 平台配置", url: "https://getcomposer.org/doc/06-config.md#platform" }
  - { label: "GitHub Actions 工作流语法", url: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions" }
  - { label: "Setup PHP Action", url: "https://github.com/shivammathur/setup-php" }
---

## 准备同一份锁文件

先确定支持的 PHP 范围。若在 PHP 8.5 生成的锁文件包含 8.3 无法安装的包，可以在练习分支运行 `composer config platform.php 8.3.0`，再有意执行 `composer update` 解析兼容版本。审阅并提交应用用的锁文件。平台配置影响依赖解析，`composer check-platform-reqs` 则检查实际运行环境。

## 两个版本执行同一流程

确认 `phpunit.xml` 的测试库是 SQLite 内存库。可将下面示例保存为 `.github/workflows/laravel.yml`。它按锁文件安装依赖，生成本地密钥并运行同一套测试。

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

托管 CI 是可选项。也可在本地 PHP 8.3 和 8.5 环境直接执行相同命令。复制环境文件并生成密钥只适用于没有现存应用数据的练习目录。

## 练习与验收

让两个版本的完整测试都通过。临时改变一条规则，确认失败断言会让运行失败。别在测试中请求真实服务。如果某个 PHP 版本在安装依赖时失败，先检查锁文件和平台条件，再排应用逻辑。
