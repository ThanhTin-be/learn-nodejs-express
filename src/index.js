const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');// ✔ đúng cách

const app = express();
const port = 3000;

const route = require('./routers/'); // sử dụng require để import router
app.use(express.static(path.join(__dirname, 'public'))); // ✔ sử dụng path.join để tạo đường dẫn chính xác cho thư mục public
app.use(express.urlencoded({ extended: true })); //  sử dụng express.urlencoded() để parse dữ liệu từ form (html lên sever)
app.use(express.json()); //  sử dụng express.json() để parse dữ liệu JSON (javascript lên sever)

// HTTP logger
// app.use(morgan('combined')); 

// Template engine
app.engine('hbs', engine({
    extname: '.hbs', // ✔ sử dụng extname để chỉ định phần mở rộng
})); //  sử dụng engine()
app.set('view engine', 'hbs');  // ✔ đặt view engine là hbs
app.set('views', path.join(__dirname, 'resources\\views',));
// router init
route(app); // gọi hàm route để sử dụng các router đã định nghĩa


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



