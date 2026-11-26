---
title: 第一次上线前做的六项检查
description: 从环境配置到后台任务，用同一套验收步骤完成发布。
order: 6
checkpoint: "为任务看板记录一次发布检查结果和一个可判断的回滚条件。"
minutes: 10
keywords: [部署, 上线, 生产, APP_DEBUG, APP_KEY, 缓存, health check, rollback]
sources:
  - { label: Laravel 部署, url: 'https://laravel.com/framework/docs/13.x/deployment' }
  - { label: 任务调度, url: 'https://laravel.com/framework/docs/13.x/scheduling' }
  - { label: 应用配置与缓存, url: 'https://laravel.com/framework/docs/13.x/configuration' }
---

在上线之前约定回退目标、发布负责人和验收方式。用预发布环境先走一遍，比在发布窗口临时补命令更省时间。

## 一、核对运行环境

验证线上 PHP 和扩展满足 `composer.lock` 的要求。把 Web 根目录指向应用的 `public/`，给 `storage/` 与 `bootstrap/cache/` 配置所需写权限。使用版本化构建产物，把上一个已验证版本留作回退点。

## 二、确认配置和访问权限

将 `APP_ENV` 设为 `production`，`APP_DEBUG` 设为 `false`。保留现有生产环境的 `APP_KEY`，从密钥管理工具注入生产变量。发布前用[本地 .env 检查](/zh/tools/env-check/)快速找出常见遗漏，再从真实运行环境验证。前五篇的新增任务入口面向本地练习。若把这个项目开放到公网，先加入身份验证与授权，或者只开放读取列表。

## 三、准备依赖、数据与缓存

生产依赖用锁文件安装。项目实际需要构建前端资源时，在构建阶段执行 `npm ci` 和 `npm run build`。先备份，再在预发布环境测量迁移耗时，检查旧代码能否与新增字段共存。多个实例共享数据库时，让迁移只跑一次。确认这些条件后，按部署环境安排命令。

```bash
composer install --no-dev --prefer-dist --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan view:cache
```

如果代码在配置文件之外直接调用 `env()`，缓存配置后可能读不到 `.env` 的值。把这类读取移到配置文件，业务逻辑用 `config()` 读取。对已有服务，回退代码前也要确认新数据结构仍兼容旧版本。

## 四、切换 Worker 和计划任务

部署完成后，让依赖旧代码的 Worker 平滑退出并由进程管理器启动新进程。普通 Queue Worker 可执行 `php artisan queue:restart`；使用 Horizon 的项目按其部署流程终止旧进程并重启。检查队列失败计数和积压，同时确认 Scheduler 已接入系统调度。可以用 `php artisan schedule:list` 核对任务和执行时间。

## 五、从外部做一次验收

新项目可检查 `/up` 的响应，再用一次实际请求覆盖数据库和关键页面。健康路由成功只代表对应的健康检查通过。验收队列时，发一条可识别且可清理的测试任务，确认它确实完成。看完日志和指标后再移交发布。

## 六、明确何时回退

上线前写好观察窗口和行动条件，例如关键路由持续错误、登录失败或积压长时间上升。异常时先记录发生时间和当前版本，按之前验证的恢复方式切回可用版本。涉及数据变更时，按备份和迁移方案处理，避免为了回退代码而丢掉新数据。
