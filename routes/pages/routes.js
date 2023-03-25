const router = require('express').Router();

router.get('/', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('home', { url: baseUrl });
});

module.exports = router;