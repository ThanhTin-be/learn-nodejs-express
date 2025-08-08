const newsRouter = require('./news'); // Import router cho news
const siteRouter = require('./site'); // Import router cho site

function route(app) {
    app.use('/news', newsRouter); // Sử dụng router cho /news
    app.use('/', siteRouter); // Sử dụng router cho trang chủ và các route khác


}

module.exports = route;