# 🧵 Hướng dẫn cài đặt và sử dụng Dart Sass trong Node.js Project
### Ở đây dùng SASS( dar sass) thay vì node-sass(vì đã cũ và deprecated)
---
### Bước 1:  Cài đặt Dart Sass
`npm install sass --save-dev `
### Bước 2: ở package.json update scripts 
    "scripts": {
    "watch": "sass src/resources/scss/app.scss src/public/css/app.css --watch"
    } 
### Bước 3: Chạy Sass Watcher `npm run watch` 
**Kết quả khi thành công:**
  Compiled src/resources/scss/app.scss to src/public/css/app.css.

---
## Tạo file nodemon.json
```bash
{
    "ext": "js json scss"
}
```