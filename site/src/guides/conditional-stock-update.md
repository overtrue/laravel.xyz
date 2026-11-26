---
course: eloquent
title: "用条件更新保护库存"
description: "把库存校验和扣减放在同一条数据库语句里。"
order: 3
checkpoint: "五件库存连续尝试预订四件，只有第一次成功，库存剩一件。"
minutes: 21
keywords: ["atomic update","decrement","inventory","transactions","并发","库存","条件更新"]
sources:
  - { label: "查询构造器递减", url: "https://laravel.com/framework/docs/13.x/queries#increment-and-decrement" }
  - { label: "数据库事务", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
---

## 建一张练习库存表

本课用单独的本地迁移。运行 `php artisan make:migration create_workshop_stock_table`，把下面的建表放在 `up()`，在 `down()` 删除表。

```php
Schema::create('workshop_stock', function (Blueprint $table) {
    $table->string('sku')->primary();
    $table->unsignedInteger('available');
});
```

执行迁移，在 Tinker 插入一行 `DB::table('workshop_stock')->insert(['sku' => 'BOOK', 'available' => 5]);`。

## 让数据库决定是否扣减

把函数粘贴进 Tinker。只在匹配并更新了一行时返回 true。

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

先读库存再无条件写入，读出来的数量可能在两条语句之间变旧。把数量条件放进更新语句，数据库会在写入时判断是否足够。如果还要写预约记录，并且两步必须一起成功，就把它们放进同一事务。

## 练习与验收

连续两次运行 `reserveDemo('BOOK', 4)`，应依次得到 true 和 false，剩余 1 件。传 0 时应在查询之前报错，传不存在的 SKU 时返回 false。这条不超卖约束也是综合项目要守住的底线。
