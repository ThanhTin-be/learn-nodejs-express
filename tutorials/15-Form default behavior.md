# Form Default Behavior trong HTML

## 1. Form là gì?
Form (biểu mẫu) là thành phần HTML cho phép người dùng nhập dữ liệu và gửi về server.

```html
<form action="/submit" method="POST">
    <input type="text" name="username" />
    <button type="submit">Gửi</button>
</form>
```

## 2. Default Behavior của Form

### a. Gửi dữ liệu khi submit
- Khi nhấn nút submit, trình duyệt sẽ gửi dữ liệu form tới URL trong thuộc tính `action` bằng phương thức `method` (GET/POST).
- Trang sẽ bị reload (refresh) theo mặc định.

### b. Validation mặc định
- Nếu có các trường như `required`, trình duyệt sẽ kiểm tra trước khi gửi.

### c. Sự kiện mặc định
- Sự kiện `submit` sẽ được kích hoạt khi form được gửi.

## 3. Ngăn chặn Default Behavior

Trong JavaScript, có thể ngăn form reload/trang chuyển hướng bằng cách:

```js
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn hành vi mặc định
    // Xử lý dữ liệu tại client
});
```

## 4. Ứng dụng thực tế

- Xử lý form bằng AJAX (fetch, axios) để gửi dữ liệu mà không reload trang.
- Custom validation, hiển thị lỗi trực tiếp.

## 5. Tổng kết

- Default behavior giúp gửi dữ liệu dễ dàng.
- Có thể kiểm soát bằng JS để tạo trải nghiệm tốt hơn.

---

**Tham khảo:**  
- [MDN Web Docs: Form Submission](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)