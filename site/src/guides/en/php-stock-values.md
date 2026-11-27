---
course: php-composer
title: "Model inventory values in PHP"
description: "Decode JSON, reject invalid rows, and calculate a total using integer cents."
order: 2
checkpoint: "The zero-quantity item leaves the total at 1447. A string quantity is rejected."
minutes: 14
keywords: ["PHP","strict types","JSON","integer cents","类型","库存"]
sources:
  - { label: "PHP type declarations", url: "https://www.php.net/manual/en/language.types.declarations.php" }
  - { label: "JSON decoding", url: "https://www.php.net/manual/en/function.json-decode.php" }
---

A framework will move data between objects, but it cannot decide what that data ought to mean. In this exercise, a stock row contains an integer quantity and an integer price in cents. Both must be zero or greater.

## Write the calculation

Save this as `stock.php` and run `php stock.php`. The value should be 1447 cents. Each row contributes its quantity multiplied by its unit price.

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

The function checks row fields before PHP can coerce them. The `array` argument declaration alone cannot tell PHP what is inside the array. The example uses small stock counts. Define and validate maximum values before applying this calculation to unbounded inputs.

## Practice and verify

Add a third item with zero units and a unit cost of 999. The total should stay 1447. Replace the first quantity with the JSON string `"3"` and confirm the script exits with the validation exception. Then remove a price field entirely and check that it also fails. Keeping these three fixtures makes it easy to tell whether a later refactor changes the contract.

## Carry it into Laravel

When the data comes from a form, validate its shape in a request class. Put the calculation somewhere a controller, a queue job, and a test can call without copying it.
