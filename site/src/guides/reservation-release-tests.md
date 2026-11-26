---
course: reservation-capstone
title: "验收预约服务的发布条件"
description: "通过真实入口验证幂等重放、冲突回滚和待处理事件的可靠消费。"
order: 3
checkpoint: "运行回归测试，暂停并恢复消费者，确认积压事件能够补处理。"
minutes: 30
keywords: ["capstone","feature test","invariants","release","outbox","综合验收","幂等测试","发布"]
sources:
  - { label: "Laravel HTTP 测试", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "数据库测试", url: "https://laravel.com/framework/docs/13.x/database-testing" }
---

## 使用隔离测试库

在综合项目的 `phpunit.xml` 把 SQLite 测试库配置成 `:memory:`，再执行 `php artisan config:clear`。确认四张练习表都来自迁移，发件箱课的命令已注册。将测试保存为 `tests/Feature/ReservationServiceTest.php`。

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ReservationServiceTest extends TestCase
{
    use RefreshDatabase;

    private const KEY = 'a322a011-929b-4fa2-8e9a-5a35e03b24bf';
    private const OTHER_KEY = 'a25bef8f-f0e4-4c96-a2fe-61f994f199fe';
    private const ENDPOINT = '/api/v1/reservations';

    protected function setUp(): void
    {
        parent::setUp();
        DB::table('reservation_stock')->insert(['sku' => 'BOOK', 'available' => 5]);
    }

    public function test_replay_is_safe_and_outbox_is_consumed_once(): void
    {
        $data = ['request_id' => self::KEY, 'sku' => 'BOOK', 'units' => 4];

        $this->postJson(self::ENDPOINT, $data)->assertCreated();
        $this->postJson(self::ENDPOINT, $data)->assertOk()->assertJsonPath('units', 4);
        $this->assertDatabaseCount('reservations', 1);
        $this->assertDatabaseHas('reservation_stock', ['sku' => 'BOOK', 'available' => 1]);
        $this->assertDatabaseHas('reservation_outbox', ['request_id' => self::KEY, 'processed_at' => null]);

        $this->artisan('reservations:record')->assertExitCode(0);
        $this->artisan('reservations:record')->assertExitCode(0);

        $this->assertDatabaseCount('reservation_audit', 1);
        $this->assertNotNull(DB::table('reservation_outbox')->where('request_id', self::KEY)->value('processed_at'));
    }

    public function test_conflicting_requests_leave_no_partial_inventory_changes(): void
    {
        $data = ['request_id' => self::KEY, 'sku' => 'BOOK', 'units' => 4];
        $this->postJson(self::ENDPOINT, $data)->assertCreated();
        $this->postJson(self::ENDPOINT, ['units' => 2] + $data)->assertConflict();
        $this->postJson(self::ENDPOINT, ['request_id' => self::OTHER_KEY] + $data)->assertConflict();

        $this->assertDatabaseCount('reservations', 1);
        $this->assertDatabaseCount('reservation_outbox', 1);
        $this->assertDatabaseHas('reservation_stock', ['sku' => 'BOOK', 'available' => 1]);
    }
}
```

执行 `php artisan test --filter=ReservationServiceTest`。成功预约只能扣掉请求数量、产生一条事件。冲突请求不能增加记录。消费者跑两次，审计作用只应发生一次。

## 练习与验收

追加无效 UUID 用例，验证 422 以及四张表保持调用前状态。做压力演练时，使用可重建的环境，启动两个请求进程并使用和生产相同的数据库引擎。重复发同一个键，比较最终库存和记录数。SQLite 内存测试能验证单进程中的应用约束，生产数据库的并发行为也需要单独验收。

## 决定是否具备上线条件

记录迁移步骤、测试结果，以及如何监控待处理事件。暂停消费者演练积压，再确认恢复后能够处理。作为公开 API 使用前，接入调用者认证，并按调用者隔离幂等键。
