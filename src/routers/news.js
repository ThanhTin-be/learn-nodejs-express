const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index); // Định nghĩa route cho /news


module.exports = router;// Đảm bảo xuất router để sử dụng trong index.js 