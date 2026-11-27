---
course: php-composer
title: "Try your first Laravel route"
description: "Change a notebook order and read Laravel’s reply in your browser."
order: 1
checkpoint: "Find the total for two notebooks in cents. Then leave the quantity out and identify which field Laravel asks for."
minutes: 18
keywords: ["HTTP","routing","curl","request","422","路由","状态码"]
sources:
  - { label: "Installation", url: "https://laravel.com/framework/docs/13.x/installation" }
  - { label: "HTTP requests", url: "https://laravel.com/framework/docs/13.x/requests" }
  - { label: "Validation response format", url: "https://laravel.com/framework/docs/13.x/validation#validation-error-response-format" }
---

A route tells Laravel which code to run for a web address. Here, a **GET** request asks for a price. The reply is **JSON**, a format that pairs names such as `total_cents` with values such as `798`.

## Run it in your own Laravel app

Want to change the price yourself? With PHP and Composer installed, run the commands below in a terminal. The [Laravel installation guide](https://laravel.com/framework/docs/13.x/installation) covers setup. Leave the server running and use the address Artisan prints.

```bash
composer create-project laravel/laravel request-lab '^13.0'
cd request-lab
php artisan serve
```

## Connect input to a response

Append the route to `routes/web.php`. If the generated file already imports `Route`, keep a single import. This calculator only reads input. A GET request to it does not change any data.

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/lab/estimate', function (Request $request) {
    $data = $request->validate([
        'units' => ['required', 'integer', 'between:1,50'],
    ]);

    $units = (int) $data['units'];

    return response()->json(['units' => $units, 'total_cents' => $units * 399]);
});
```

In a second terminal, send the following requests.

```bash
curl -i -H 'Accept: application/json' 'http://localhost:8000/lab/estimate?units=3'
curl -i -H 'Accept: application/json' 'http://localhost:8000/lab/estimate?units=51'
```

The first response should be 200 with `{"units":3,"total_cents":1197}`. The second should be 422 with an error under `errors.units`. The `Accept` header tells Laravel that this client expects JSON when validation fails.

## Practice and verify

Run `php artisan route:list --path=lab/estimate` and confirm the GET route is registered. Send a request without a quantity, then one to `/lab/not-found`. Compare the validation error with the 404 from an unregistered route. Try a value of 1 and then 50 to verify the inclusive bounds. These are different failures, and each has a different fix.
