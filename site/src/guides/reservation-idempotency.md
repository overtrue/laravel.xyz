---
course: reservation-capstone
title: "用幂等键预约库存"
description: "库存只扣一次，重复请求返回稳定结果，同一个键带不同参数时拒绝。"
order: 1
checkpoint: "重放相同请求依次返回 201 和 200，只扣一次库存；修改负载则返回 409。"
minutes: 33
keywords: ["capstone","idempotency","UUID","reservation","transactions","幂等","库存","预约"]
sources:
  - { label: "数据库事务", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
  - { label: "验证规则", url: "https://laravel.com/framework/docs/13.x/validation#available-validation-rules" }
---

在新的本地 Laravel 13 项目完成综合练习。执行 `php artisan install:api` 得到 `routes/api.php`。公开服务前应先验证调用身份，并把幂等键限定在调用者范围内。本练习使用全局唯一的示例 UUID。

## 定义必须守住的条件

在一个新迁移的 `up()` 创建两张表。回滚时先删预约表，再删库存表。迁移后在 Tinker 执行 `DB::table('reservation_stock')->insert(['sku' => 'BOOK', 'available' => 5]);`。

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

预约主键确保一次请求只记一条。库存不能扣成负数。失败时，预约和库存写入都应回滚。

## 实现写入接口

添加到 `routes/api.php`，导入写在顶部，重复的导入只保留一条。

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

先拿到唯一请求键再扣库存。如果违反唯一约束，Laravel 会先回滚事务，再处理异常。已有记录用于辨别这是不是同一个请求。新的请求如果超过库存，也会回滚临时插入的预约。

## 练习与验收

向本地服务连续发两次。库存初始为 5 时，第一次应返回 201，重放返回 200，库存剩 1。保持同一个请求 ID、改变数量，预期 409。再换新 ID 请求 4 件，应返回 409 且没有新预约。

```bash
curl -i 'http://localhost:8000/api/v1/reservations' \
  -H 'Accept: application/json' -H 'Content-Type: application/json' \
  -d '{"request_id":"a322a011-929b-4fa2-8e9a-5a35e03b24bf","sku":"BOOK","units":4}'
```
