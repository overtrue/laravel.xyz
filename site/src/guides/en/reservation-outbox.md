---
course: reservation-capstone
title: "Record an outbox event in the same transaction"
description: "Persist pending work with the reservation and consume it without duplicating the audit effect."
order: 2
checkpoint: "With consumers paused a reservation leaves one pending event. Running the recorder twice processes it once."
minutes: 32
keywords: ["outbox","transaction","duplicate delivery","worker","发件箱","可靠投递","重放"]
sources:
  - { label: "Database locking and transactions", url: "https://laravel.com/framework/docs/13.x/database#database-transactions" }
  - { label: "Task scheduling", url: "https://laravel.com/framework/docs/13.x/scheduling" }
---

## Keep the event with the commit

Add a migration with the two tables below. Drop them in reverse order in `down()`. Run it before editing the route.

```php
Schema::create('reservation_outbox', function (Blueprint $table) {
    $table->uuid('request_id')->primary();
    $table->timestamp('created_at');
    $table->timestamp('processed_at')->nullable()->index();
});

Schema::create('reservation_audit', function (Blueprint $table) {
    $table->uuid('request_id')->primary();
    $table->timestamp('recorded_at');
});
```

In the previous route, put this insert immediately after the stock check, inside the same transaction. Each new reservation and its pending event will commit together. Duplicate request IDs return the existing reservation without inserting another event.

```php
DB::table('reservation_outbox')->insert([
    'request_id' => $key,
    'created_at' => now(),
]);
```

## Consume pending events

Append the command to `routes/console.php`, keeping imports only once. The consumer rereads pending IDs and attempts a conditional claim inside a database transaction. The audit effect and completion marker share that transaction.

```php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

Artisan::command('reservations:record', function () {
    $pending = DB::table('reservation_outbox')->whereNull('processed_at')
        ->orderBy('created_at')->orderBy('request_id')->limit(100)->pluck('request_id');

    foreach ($pending as $key) {
        DB::transaction(function () use ($key) {
            $claimed = DB::table('reservation_outbox')
                ->where('request_id', $key)->whereNull('processed_at')
                ->update(['processed_at' => now()]);

            if ($claimed === 1) {
                DB::table('reservation_audit')->insert([
                    'request_id' => $key, 'recorded_at' => now(),
                ]);
            }
        }, attempts: 3);
    }

    return 0;
});
```

Two consumers can see the same pending ID, but only one can update the unprocessed row. If the audit insert fails, the transaction rolls back its claim too. This guarantee applies to an effect in the same database. A message or email sent to an external provider still needs a way to detect duplicate deliveries.

## Practice and verify

Leave consumers stopped, then make a new reservation. It should succeed and leave one outbox row with a null processing timestamp. Run `php artisan reservations:record` twice. The timestamp should be set and there should be one audit row. For a repeated local run, schedule that command with the scheduler techniques from the reliability course.
