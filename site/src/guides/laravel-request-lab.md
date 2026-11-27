---
course: php-composer
title: "试试你的第一条 Laravel 路由"
description: "调整笔记本的购买数量，直接在浏览器里查看 Laravel 的回复。"
order: 1
checkpoint: "找出两本笔记本一共多少美分，再把数量留空，看看 Laravel 提示缺少哪个字段。"
minutes: 18
keywords: ["HTTP","routing","curl","request","422","路由","状态码"]
sources:
  - { label: "安装", url: "https://laravel.com/framework/docs/13.x/installation" }
  - { label: "HTTP 请求", url: "https://laravel.com/framework/docs/13.x/requests" }
  - { label: "验证响应格式", url: "https://laravel.com/framework/docs/13.x/validation#validation-error-response-format" }
---

路由告诉 Laravel，访问一个网址时该运行哪段代码。这里的 **GET** 请求是向应用询价。返回结果用 **JSON** 表示，它用名字和值来记录数据，例如 `total_cents` 表示总价，对应的值是 `798` 美分。

## 在自己的 Laravel 应用里重做

想亲手改单价？安装 PHP 和 Composer 后，在终端运行以下命令。第一次安装可以跟着 [Laravel 安装指南](https://laravel.com/framework/docs/13.x/installation) 操作。保持终端开启，后续请求使用 Artisan 输出的地址。

```bash
composer create-project laravel/laravel request-lab '^13.0'
cd request-lab
php artisan serve
```

## 把输入转换为响应

添加到 `routes/web.php`。如果文件已经导入 `Route`，只保留一条导入。这个计算器只读取参数，GET 请求不会修改数据。

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

另开终端，发送两次请求。

```bash
curl -i -H 'Accept: application/json' 'http://localhost:8000/lab/estimate?units=3'
curl -i -H 'Accept: application/json' 'http://localhost:8000/lab/estimate?units=51'
```

第一条应返回 200 和 `{"units":3,"total_cents":1197}`。第二条应返回 422，错误字段位于 `errors.units`。用 `Accept` 头告诉 Laravel，调用者希望收到 JSON 格式的校验错误。

## 练习与验收

执行 `php artisan route:list --path=lab/estimate` 确认 GET 路由已注册。先发一次缺少数量的请求，再访问 `/lab/not-found`，比较 422 与 404。分别传入 1 和 50，验证区间包含两个边界。
