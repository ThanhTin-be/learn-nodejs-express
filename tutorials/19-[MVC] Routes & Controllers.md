# [MVC] Routes & Controllers trong Node.js Express

## 1. Tổng quan về MVC

**MVC (Model-View-Controller)** là một kiến trúc phần mềm giúp tách biệt các thành phần của ứng dụng:
- **Model**: Quản lý dữ liệu và logic nghiệp vụ.
- **View**: Hiển thị dữ liệu cho người dùng.
- **Controller**: Xử lý yêu cầu từ người dùng, tương tác với Model và trả về View.

## 2. Vai trò của Routes & Controllers

- **Routes**: Định nghĩa các endpoint (đường dẫn) mà ứng dụng sẽ phản hồi. Routes nhận request và chuyển tiếp đến Controller phù hợp.
- **Controllers**: Chứa logic xử lý cho từng route, thao tác với Model và trả về kết quả.

## 3. Cấu trúc thư mục MVC mẫu

```
project/
│
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── views/
│   └── userView.ejs
└── app.js
```

## 4. Ví dụ về Routes & Controllers

### a. Định nghĩa Route

```js
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
```

### b. Định nghĩa Controller

```js
// controllers/userController.js
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
};
```

## 5. Kết nối Routes vào ứng dụng

```js
// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => console.log('Server running'));
```

## 6. Lợi ích của MVC với Routes & Controllers

- Dễ bảo trì, mở rộng.
- Tách biệt rõ ràng giữa các phần của ứng dụng.
- Tái sử dụng code hiệu quả.

---

**Tóm lại:**  
Routes & Controllers là phần cốt lõi trong kiến trúc MVC của Express, giúp tổ chức code rõ ràng, dễ quản lý và phát triển.