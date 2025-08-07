# Query Parameters trong Node.js Express

## 1. Định nghĩa
- Query parameters là các cặp key-value nằm sau dấu `?` trên URL.
- Ví dụ: `/users?name=Tin&age=21`

## 2. Cách lấy query parameters trong Express
```js
app.get('/users', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});
```

## 3. Đặc điểm
- Không bắt buộc phải có trong URL.
- Có thể có nhiều query parameters, phân tách bằng dấu `&`.
- Dữ liệu truyền qua query parameters là dạng chuỗi.

## 4. Lưu ý quan trọng
- Query parameters **không bảo mật**: Không nên truyền thông tin nhạy cảm.
- Giá trị luôn là chuỗi, cần kiểm tra và chuyển đổi kiểu dữ liệu nếu cần.
- Nếu không có giá trị, trả về `undefined`.
- Có thể truyền mảng: `/users?tags=js&tags=node`
- Nên kiểm tra và validate dữ liệu nhận được từ query parameters.

## 5. Một số ví dụ
```js
// Truyền nhiều tham số
GET /search?keyword=nodejs&page=2

// Truyền mảng
GET /products?category=book&category=pen
req.query.category // ['book', 'pen']
```

## 6. So sánh với Route Params
- Query parameters: Không bắt buộc, dùng cho filter, sort, search.
- Route params: Bắt buộc, dùng để xác định resource cụ thể (`/users/:id`).

## 7. Thực hành kiểm tra và validate
```js
app.get('/search', (req, res) => {
    const { keyword, page } = req.query;
    if (!keyword) return res.status(400).send('Missing keyword');
    const pageNum = parseInt(page) || 1;
    // Xử lý tiếp...
});
```

## 8. Tổng kết
- Query parameters rất hữu ích cho việc lọc, tìm kiếm, phân trang.
- Luôn kiểm tra, validate dữ liệu nhận được từ client.
- Không dùng để truyền dữ liệu nhạy cảm.
