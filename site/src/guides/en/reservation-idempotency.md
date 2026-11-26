---
course: reservation-capstone
title: "Reserve stock with an idempotency key"
description: "Deduct stock once, return a stable replay result, and reject a reused request ID with different input."
order: 1
checkpoint: "Replay the same request: 201 then 200, with one stock deduction. A changed payload returns 409."
minutes: 33
keywords: ["capstone","idempotency","UUID","reservation","transactions","幂等","库存","预约"]
sources:
  - { label: "Database transactions", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
  - { label: "Validation rules", url: "https://laravel.com/framework/docs/13.x/validation#available-validation-rules" }
---

Build this capstone in a fresh local Laravel 13 application. Run `php artisan install:api` so `routes/api.php` is available. Before moving beyond a local lab, authenticate callers and scope an idempotency key to each caller. This exercise uses globally unique sample UUIDs.

## Model the invariants

In a new migration's `up()`, create these tables. For `down()` drop the reservations table and then the stock table. Run the migrations and, in Tinker, seed `DB::table('reservation_stock')->insert(['sku' => 'BOOK', 'available' => 5]);`.

```php
Schema::create('reservation_stock', function (Blueprint $table) {
    $table->string('sku', 32)->primary();
    $table->unsignedInteger('available');
});

Schema::create('reservations', function (Blueprint $table) {
    $table->uuid('request_id')->primary();
    $table->string('sku', 32);
    $table->unsignedInteger('units');
    $table->timestamp('created_at');
});
```

The reservation primary key ensures that a request can be recorded only once. The stock write must leave the count nonnegative. A failure must roll back both the reservation and stock write.

## Implement the write

Put this in `routes/api.php` with its imports at the top. Keep any preexisting imports only once.

```php
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::post('/v1/reservations', function (Request $request) {
    $data = $request->validate([
        'request_id' => ['required', 'uuid'],
        'sku' => ['required', 'string', 'regex:/\A[A-Z0-9-]{3,32}\z/'],
        'units' => ['required', 'integer', 'between:1,20'],
    ]);
    $key = strtolower($data['request_id']);
    $sku = $data['sku'];
    $units = (int) $data['units'];
    $status = 201;

    try {
        DB::transaction(function () use ($key, $sku, $units) {
            DB::table('reservations')->insert([
                'request_id' => $key, 'sku' => $sku, 'units' => $units, 'created_at' => now(),
            ]);

            $changed = DB::table('reservation_stock')
                ->where('sku', $sku)->where('available', '>=', $units)
                ->decrement('available', $units);

            abort_if($changed !== 1, 409, 'Stock unavailable.');
        }, attempts: 3);
    } catch (UniqueConstraintViolationException $error) {
        $prior = DB::table('reservations')->where('request_id', $key)->first();

        if ($prior === null) {
            throw $error;
        }

        abort_if($prior->sku !== $sku || (int) $prior->units !== $units, 409, 'Request ID already used for different input.');
        $status = 200;
    }

    return response()->json(['request_id' => $key, 'sku' => $sku, 'units' => $units], $status);
});
```

Insert the request key before touching inventory. If that unique constraint fails, Laravel rolls back the transaction before the exception is handled. The existing row proves whether this is an identical retry. A new request for more units than are available rolls back its tentative reservation.

## Practice and verify

Run the request against your local server twice. With five units in stock, the first call returns 201 and the replay returns 200. One unit should remain. Change the units while keeping the same request ID and verify 409. With a fresh ID, request four more units and verify 409 and no new reservation.

```bash
curl -i 'http://localhost:8000/api/v1/reservations' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"request_id":"a322a011-929b-4fa2-8e9a-5a35e03b24bf","sku":"BOOK","units":4}'
```
