
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        const slug = req.params.slug;
        res.send('news-detail !!', { slug }); // Truyền slug vào view
    }
}

module.exports = new NewsController;