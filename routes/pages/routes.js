const router = require('express').Router();

router.get('/', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    // res.render('home', { url: baseUrl });
    res.redirect('/enquiry');
});
router.get('/enquiry', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('enquiry', { url: baseUrl });
});
router.get('/testdrive', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('testdrive', { url: baseUrl });
});
router.get('/emicalculator', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('emicalculator', { url: baseUrl });
});

router.get('/service', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('service', { url: baseUrl });
});

router.get('/homeservice', (req, res) => {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('homeservice', { url: baseUrl });
});

module.exports = router;