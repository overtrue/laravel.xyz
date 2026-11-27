---
course: eloquent
title: "Protect a stock count with a conditional update"
description: "Put the availability check and decrement in one database statement."
order: 3
checkpoint: "Reserve four units twice from five. Only the first attempt succeeds and one unit remains."
minutes: 21
keywords: ["atomic update","decrement","inventory","transactions","并发","库存","条件更新"]
sources:
  - { label: "Query builder decrement", url: "https://laravel.com/framework/docs/13.x/queries#increment-and-decrement" }
  - { label: "Database transactions", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
---

## Create a tiny inventory table

Use a separate local migration for this lab. Generate it with `php artisan make:migration create_workshop_stock_table`. Use this in `up()` and drop the table in `down()`.

```php
Schema::create('workshop_stock', function (Blueprint $table) {
    $table->string('sku')->primary();
    $table->unsignedInteger('available');
});
```

Migrate, open Tinker, and insert a row with `DB::table('workshop_stock')->insert(['sku' => 'BOOK', 'available' => 5]);`.

## Make the database decide

Paste this function into Tinker. A call returns true only when exactly one row matched and was changed.

```php
function reserveDemo(string $sku, int $units): bool
{
    if ($units < 1) {
        throw new InvalidArgumentException('Reserve at least one unit');
    }

    return DB::table('workshop_stock')
        ->where('sku', $sku)
        ->where('available', '>=', $units)
        ->decrement('available', $units) === 1;
}
```

A separate read of the count followed by an unconditional write can become stale between statements. With a comparison in the update predicate, the database evaluates availability at the moment it applies the write. Use a transaction if you also need to write a reservation record and both operations must succeed together.

## Practice and verify

Call `reserveDemo('BOOK', 4)` twice. The first returns true, the second false, and exactly one unit remains. Pass 0 and confirm it throws before a query. Try a missing SKU and expect false. This prepares the core invariant for the reservation capstone.
