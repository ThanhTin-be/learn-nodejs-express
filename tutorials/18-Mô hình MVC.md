# Mô hình MVC (Model-View-Controller)

## 1. Tổng quan
MVC là một kiến trúc phần mềm giúp tách biệt các thành phần trong ứng dụng web, giúp dễ bảo trì, mở rộng và kiểm thử.

- **Model**: Quản lý dữ liệu, logic nghiệp vụ, tương tác với database.
- **View**: Hiển thị dữ liệu cho người dùng, giao diện người dùng.
- **Controller**: Nhận yêu cầu từ người dùng, xử lý và điều phối giữa Model và View.

## 2. Luồng hoạt động
1. Người dùng gửi yêu cầu (request) đến ứng dụng.
2. Controller nhận request, xử lý logic, gọi Model nếu cần.
3. Model truy xuất dữ liệu, trả về cho Controller.
4. Controller gửi dữ liệu đến View.
5. View hiển thị kết quả cho người dùng.

## 3. Ưu điểm
- Tách biệt rõ ràng giữa giao diện, xử lý và dữ liệu.
- Dễ bảo trì, mở rộng.
- Hỗ trợ kiểm thử từng phần riêng biệt.

## 4. Ví dụ trong Node.js/Express

```
/models/user.js      // Quản lý dữ liệu người dùng
/views/user.ejs      // Giao diện hiển thị thông tin người dùng
/controllers/user.js // Xử lý logic liên quan đến người dùng
```

## 5. Sơ đồ MVC

```
User <--> Controller <--> Model <--> Database
         |
       View
```

## 6. Ứng dụng thực tế
MVC được sử dụng rộng rãi trong các framework như Express (Node.js), Laravel (PHP), Django (Python), Ruby on Rails (Ruby).

---

**Tóm lại:** MVC giúp tổ chức mã nguồn rõ ràng, dễ phát triển và bảo trì ứng dụng web.