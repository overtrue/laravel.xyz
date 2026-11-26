---
title: Six checks before your first deployment
description: Run through configuration, database changes, workers, and verification before going live.
order: 6
checkpoint: "Record a release check and a concrete rollback trigger for your task board."
minutes: 10
keywords: [deployment, production, APP_DEBUG, APP_KEY, cache, health check, rollback]
sources:
  - { label: Laravel deployment, url: 'https://laravel.com/framework/docs/13.x/deployment' }
  - { label: Task scheduling, url: 'https://laravel.com/framework/docs/13.x/scheduling' }
  - { label: Configuration and caching, url: 'https://laravel.com/framework/docs/13.x/configuration' }
---

Agree on the released version, the person running the deployment, and what counts as a successful rollout. Rehearse it in staging so production is not the first time you run the whole sequence.

## 1. Check the runtime

Verify that the production PHP version and extensions meet `composer.lock` requirements. Point the web root at `public/`. Give the app user the needed write permissions for `storage/` and `bootstrap/cache/`. Keep the last verified build available for rollback.

## 2. Review settings and access

Use `APP_ENV=production` and `APP_DEBUG=false`. Preserve the existing production `APP_KEY` and inject sensitive settings from your secret store. Use the [local .env check](/tools/env-check/) for common omissions and verify the actual settings in production. Taskboard’s write route was designed for local practice. Add authentication and authorization for public writes, or publish a read-only list.

## 3. Install dependencies and rehearse migrations

Install dependencies from the lockfile. If your app needs frontend bundles, run `npm ci` and `npm run build` during the build stage. Back up the database and measure migration time in staging. For multiple instances on one database, arrange for the migration to run once. These are useful commands after confirming the timing and order for your deployment.

```bash
composer install --no-dev --prefer-dist --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan view:cache
```

Move direct `env()` access into configuration files and read through `config()` elsewhere. The application uses the cached configuration after `config:cache`. Keep new schema changes compatible with the previous application version if you need to roll the application back.

## 4. Refresh workers and check schedules

After switching the release, tell ordinary workers to restart with `php artisan queue:restart` and let the process manager start new ones. Follow the Horizon deployment steps if you use Horizon. Check failed jobs and queue depth. Confirm the Scheduler is connected to the system scheduler, and use `php artisan schedule:list` to inspect the expected run times.

## 5. Verify from outside the server

Check `/up` if your application has the health route. Then make a real request that exercises the database and your main application flow. Send one identifiable test job and confirm it finishes. Review logs and metrics before ending the release window.

## 6. Decide when to roll back

Pick specific triggers, such as sustained errors on key routes, failed sign-ins, or a steadily growing queue. Record the time and current revision when something breaks, then return to the last usable release using the plan you rehearsed. Review migrations and backups before changing database state so a code rollback does not discard new data.
