---
course: php-composer
title: "用 PHP 计算库存金额"
description: "解码 JSON、拒绝不合法的行，并用整数分计算库存总金额。"
order: 2
checkpoint: "零数量商品不会改变总额 1447，字符串数量会被拒绝。"
minutes: 14
keywords: ["PHP","strict types","JSON","integer cents","类型","库存"]
sources:
  - { label: "PHP 类型声明", url: "https://www.php.net/manual/en/language.types.declarations.php" }
  - { label: "JSON 解码", url: "https://www.php.net/manual/en/function.json-decode.php" }
---

框架负责传递数据，业务代码负责定义数据的含义。库存行包含非负整数数量和以分为单位的非负整数价格。

## 编写计算函数

保存为 `stock.php`，执行 `php stock.php`，预期输出 1447 分。每行金额是数量乘以单价，最后按行求和。

```php
<?php
declare(strict_types=1);

function stockValue(array $rows): int
{
    $total = 0;
    foreach ($rows as $row) {
        $units = $row['units'] ?? null;
        $unitCents = $row['unit_cents'] ?? null;

        if (!is_int($units) || $units < 0 || !is_int($unitCents) || $unitCents < 0) {
            throw new InvalidArgumentException('Expected non-negative integer stock values');
        }

        $total += $units * $unitCents;
    }

    return $total;
}

$sample = json_decode('[{"units":3,"unit_cents":399},{"units":2,"unit_cents":125}]', true, 512, JSON_THROW_ON_ERROR);
echo stockValue($sample), PHP_EOL;
```

`array` 参数类型无法约束内部字段，所以在相乘前显式校验字段类型。示例的数量较小。处理不受控制的外部输入时，应定义并验证最大允许数量和价格。

## 练习与验收

增加一行数量为 0、单价为 999 的商品，金额仍是 1447 分。再把第一行的数量改成 JSON 字符串 `"3"`，确认程序报校验异常。删除一行的价格字段同样应失败。保留这些样本，便于以后检查重构有没有改变行为。

## 应用到 Laravel

表单数据可以在 Form Request 中校验形状。计算逻辑放到能被控制器、队列任务和测试共同调用的位置。
