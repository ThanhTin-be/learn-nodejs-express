# Hướng dẫn sử dụng Bootstrap trong Node.js Express

## 1. Giới thiệu về Bootstrap

Bootstrap là một framework CSS phổ biến giúp xây dựng giao diện web nhanh chóng, đẹp mắt và đáp ứng tốt trên nhiều thiết bị.

## 2. Cài đặt Bootstrap 

### Cách 1: Sử dụng CDN (recommend)

Thêm đoạn sau vào file HTML (ở đây là `layouts\main.hbs`):

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Cách 2: Cài đặt qua npm

```bash
npm install bootstrap
```

Sau đó, import vào file CSS hoặc JS chính:

```js
// Trong file JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

## 3. Sử dụng Bootstrap trong Express

### Cấu trúc thư mục mẫu

```
src/
├── public/
│   └── css/
├── resources/
│   └── views
│       └── layouts
|           └── main.hbs
├── app.js
```

### Thiết lập static files

```js
// app.js
const express = require('express');
const app = express();

app.use(express.static('public'));
```

### Thêm Bootstrap vào giao diện

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-primary">Hello Bootstrap!</h1>
        <button class="btn btn-success">Click me</button>
    </div>
</body>
</html>
```

## 4. Một số thành phần Bootstrap phổ biến

- **Button:**  
    ```html
    <button class="btn btn-primary">Primary</button>
    ```

- **Alert:**  
    ```html
    <div class="alert alert-warning">Cảnh báo!</div>
    ```

- **Card:**  
    ```html
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Tiêu đề card</h5>
            <p class="card-text">Nội dung card.</p>
        </div>
    </div>
    ```

- **Navbar:**  
    ```html
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    ```

## 5. Tài liệu tham khảo

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Express Static Middleware](https://expressjs.com/en/starter/static-files.html)

---

**Lưu ý:**  
Luôn kiểm tra phiên bản Bootstrap bạn sử dụng để đảm bảo tính tương thích.
