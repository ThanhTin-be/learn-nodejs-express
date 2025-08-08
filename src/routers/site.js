const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/:slug', siteController.search);
router.use('/', siteController.index); // Định nghĩa route cho /news


module.exports = router;// Đảm bảo xuất router để sử dụng trong index.js 