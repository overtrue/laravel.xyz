---
course: reservation-capstone
title: "Run the reservation release checks"
description: "Prove replay, conflict rollback, and durable event consumption through public application entry points."
order: 3
checkpoint: "Run the regression suite and rehearse a paused consumer catching up on pending events."
minutes: 30
keywords: ["capstone","feature test","invariants","release","outbox","综合验收","幂等测试","发布"]
sources:
  - { label: "Laravel HTTP tests", url: "https://laravel.com/framework/docs/13.x/http-tests" }
  - { label: "Database testing", url: "https://laravel.com/framework/docs/13.x/database-testing" }
---

## Set up an isolated test database

In the capstone application, configure the SQLite test database as `:memory:` in `phpunit.xml` and run `php artisan config:clear`. Make sure all four capstone tables are in migrations and the console command from the outbox lesson is registered. Save the test below as `tests/Feature/ReservationServiceTest.php`.

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

Run `php artisan test --filter=ReservationServiceTest`. Each successful reservation must reserve exactly the requested stock and produce one event. Requests that conflict must leave zero additional rows. The outbox consumer must create only one audit effect after two runs.

## Practice and verify

Add a test that sends an invalid UUID and checks 422 along with all four tables remaining in their original state. For a load rehearsal, use a disposable environment with two request workers and the same production database engine. Send repeated requests with the same key and compare the final stock and row counts. SQLite in-memory tests verify the application invariants in one process, heavily concurrent behavior also needs coverage on the database you deploy.

## Decide whether you are ready to ship

Record the schema change, test results, and how you'll observe pending outbox rows. Rehearse with the consumer paused and confirm it catches up after recovery. Add authentication and caller-scoped keys before using this design as an internet-facing API.
