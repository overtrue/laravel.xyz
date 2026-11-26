---
course: deploy-operate
title: "核对 Laravel 实际生效的配置"
description: "用一次上线演练，观察配置缓存怎样影响运行值。"
order: 1
checkpoint: "开启调试后重建配置缓存，确认就绪检查失败，再恢复配置重新验证。"
minutes: 23
keywords: ["config:cache","deployment","APP_DEBUG","APP_KEY","上线","配置缓存"]
sources:
  - { label: "配置缓存", url: "https://laravel.com/framework/docs/13.x/configuration#configuration-caching" }
  - { label: "部署", url: "https://laravel.com/framework/docs/13.x/deployment" }
---

## 检查实际运行值

用一份可重建的本地任务清单，保留已有应用密钥。在 `routes/console.php` 添加命令。已有 Artisan 导入时只留一条。

```php
use Illuminate\Support\Facades\Artisan;

Artisan::command('ops:ready', function () {
    $ready = config('app.env') === 'production'
        && config('app.debug') === false
        && filled(config('app.key'));

    $this->line($ready ? 'Production configuration loaded.' : 'Check APP_ENV, APP_DEBUG, and APP_KEY.');
    return $ready ? 0 : 1;
});
```

配置不符合预期时命令返回非零退出码，也不会打印密钥。使用 `config()` 读取配置，这样配置缓存生效时检查仍准确。

## 走一遍发布顺序

在本地 `.env` 配置 `APP_ENV=production` 与 `APP_DEBUG=false`，然后执行下列命令，预期 `ops:ready` 打印成功。没有密钥时，只给这份全新的练习项目生成一个。

```bash
php artisan config:clear
php artisan config:cache
php artisan ops:ready
```

## 练习与验收

缓存生成后，把本地 `.env` 改成 `APP_DEBUG=true`。旧配置缓存还在，因此显式检查仍能通过。重建缓存后，`ops:ready` 应失败。最后恢复安全配置并清掉缓存，检查命令和 `/up`。发布验收要读运行时状态，不能只看配置文件。
