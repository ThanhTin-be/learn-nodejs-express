# Basic Routing in Node.js Express

## 1. Khái niệm Routing
- Routing là quá trình xác định cách ứng dụng phản hồi các yêu cầu HTTP đến một endpoint (URL) cụ thể.
- Mỗi route gồm: phương thức HTTP (GET, POST, PUT, DELETE, ...) và đường dẫn URL.

## 2. Định nghĩa Route cơ bản
```js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```
- `app.get`: Xử lý yêu cầu GET.
- `'/'`: Đường dẫn gốc.
- Callback nhận `req` (request) và `res` (response).

## 3. Các phương thức HTTP phổ biến
- `GET`: Lấy dữ liệu.
- `POST`: Gửi dữ liệu mới.
- `PUT`: Cập nhật dữ liệu.
- `DELETE`: Xóa dữ liệu.

## 4. Route Parameters
- Truyền tham số động qua URL.
```js
app.get('/users/:id', (req, res) => {
    res.send(req.params.id);
});
```
- Truy cập bằng `req.params`.

## 5. Query Parameters
- Truyền dữ liệu qua URL sau dấu `?`.
```js
app.get('/search', (req, res) => {
    res.send(req.query.q);
});
```
- Truy cập bằng `req.query`.

## 6. Middleware trong Routing
- Có thể thêm middleware để xử lý trước khi vào route.
```js
app.use((req, res, next) => {
    // Xử lý trước
    next();
});
```

## 7. Route Grouping (Router)
- Tách route thành module riêng với `express.Router()`.
```js
const router = require('express').Router();
router.get('/profile', ...);
app.use('/users', router);
```

## 8. Lưu ý quan trọng
- Thứ tự khai báo route quan trọng, route khai báo trước sẽ được kiểm tra trước.
- Route cụ thể nên đặt trước route tổng quát (ví dụ: `/users/:id` trước `/users`).
- Tránh trùng lặp đường dẫn và phương thức.
- Luôn xử lý lỗi và kiểm tra dữ liệu đầu vào.

## 9. Trả về dữ liệu
- Có thể trả về HTML, JSON, file, hoặc redirect.
```js
res.json({ name: 'John' });
res.sendFile(__dirname + '/index.html');
res.redirect('/login');
```

## 10. Kết luận
- Routing là nền tảng của ứng dụng web với Express.
- Hiểu rõ cách hoạt động và các lưu ý giúp xây dựng ứng dụng hiệu quả, dễ bảo trì.
