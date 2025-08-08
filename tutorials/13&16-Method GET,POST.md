# Tất tần tật về Method GET và POST trong Node.js & Express

## 1. Giới thiệu

- **Client (người dùng)** là thiết bị hoặc ứng dụng gửi yêu cầu đến server để lấy hoặc gửi dữ liệu.
- **Server (máy chủ)** là nơi xử lý các yêu cầu từ client và trả về kết quả.
- **GET** và **POST** là hai HTTP method phổ biến dùng để giao tiếp giữa client và server.
- Trong Express, chúng ta sử dụng các method này để xử lý request từ client.

---

## 2. Method GET

- **GET** dùng để lấy dữ liệu từ server.
- Dữ liệu gửi lên thông qua URL (query string).
- Không nên dùng GET để gửi dữ liệu nhạy cảm.

**Ví dụ:**

```js
app.get('/users', (req, res) => {
    // Lấy danh sách users
    res.send('Danh sách users');
});
```

**Lấy dữ liệu từ query:**

```js
app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Tìm kiếm với từ khóa: ${keyword}`);
});
```

---

## 3. Method POST

- **POST** dùng để gửi dữ liệu lên server (thường là tạo mới).
- Dữ liệu gửi lên thông qua body của request.
- Thường dùng với form hoặc API.

**Ví dụ:**

```js
app.post('/users', (req, res) => {
    const user = req.body;
    // Xử lý tạo user mới
    res.send('User đã được tạo');
});
```

**Lưu ý:** Cần dùng middleware như `express.json()` để đọc dữ liệu từ body.

```js
app.use(express.json());
```

---

## 4. So sánh GET và POST

| Tiêu chí        | GET (sever -> client)        | POST (client -> sever)     |
|-----------------|------------------------------|----------------------------|
| Dữ liệu gửi lên | Query string (URL)           | Body của request           |
| Bảo mật         | Kém (dễ lộ qua URL)          | Tốt hơn (ẩn trong body)    |
| Dung lượng      | Giới hạn bởi URL             | Không giới hạn             |
| Dùng cho        | Lấy dữ liệu                  | Tạo mới, gửi dữ liệu       |

---

## 5. Thực hành với Express

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello GET!');
});

app.post('/hello', (req, res) => {
    res.send('Hello POST!');
});

app.listen(3000, () => {
    console.log('Server chạy ở port 3000');
});
```

---

## 6. Tổng kết

- Client gửi yêu cầu GET hoặc POST đến server để lấy hoặc gửi dữ liệu.
- Server nhận và xử lý các yêu cầu này, trả về kết quả cho client.
- GET: Lấy dữ liệu, dùng cho truy vấn.
- POST: Gửi dữ liệu, dùng cho tạo mới hoặc xử lý form.
- Express hỗ trợ cả hai method dễ dàng.
