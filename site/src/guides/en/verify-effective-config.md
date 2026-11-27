---
course: deploy-operate
title: "Verify the configuration Laravel actually uses"
description: "Rehearse a production config check and observe what changes when configuration is cached."
order: 1
checkpoint: "Rebuild the config cache with debug enabled and see the readiness check fail. Restore safe values and rerun."
minutes: 23
keywords: ["config:cache","deployment","APP_DEBUG","APP_KEY","上线","配置缓存"]
sources:
  - { label: "Configuration caching", url: "https://laravel.com/framework/docs/13.x/configuration#configuration-caching" }
  - { label: "Production deployment", url: "https://laravel.com/framework/docs/13.x/deployment" }
---

## Check effective values

Use a disposable local copy of Taskboard for this lesson. Keep its existing app key. Append this command to `routes/console.php`. If Artisan is already imported, keep one import.

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

The command exits with a nonzero code when effective settings fail the check and never prints the key. Read values through `config()`, which works with Laravel's cached configuration.

## Rehearse the deployment steps

In the local `.env`, set `APP_ENV=production` and `APP_DEBUG=false`. Run the commands below. `ops:ready` should print a success message. If the app does not have a key, generate one only for this fresh disposable copy.

```bash
php artisan config:clear
php artisan config:cache
php artisan ops:ready
```

## Practice and verify

Change the local file to `APP_DEBUG=true` after caching. The same command still passes while the old configuration is cached. Rebuild the cache and confirm `ops:ready` now fails. Restore the safe values, clear the cache, and confirm the check and `/up` return what you expect. A production release should run its checks against the effective configuration, not just inspect a file.
