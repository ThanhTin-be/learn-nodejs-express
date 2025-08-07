const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');// ✔ đúng cách

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // ✔ sử dụng path.join để tạo đường dẫn chính xác cho thư mục public

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs', // ✔ sử dụng extname để chỉ định phần mở rộng
})); // ✔ sử dụng engine()
app.set('view engine', 'hbs'); // ✔ đặt view engine là hbs
app.set('views', path.join(__dirname, 'resources\\views',)); // ✔ dùng path.join chuẩn hơn


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
