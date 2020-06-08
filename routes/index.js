const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/landing', {
        layout: 'default',
        title: 'Traffic Data Visualisation',
        url: req.url,
        page: [{title: 'Traffic Data Visualisation'}],
        gitUrl: 'https://github.com/mike-web-dev/traffic-data'
    });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('pages/home', {
        layout: 'default',
        title: 'Home',
        url: req.url,
        page: [{title: 'Home'}],
        gitUrl: 'https://github.com/mike-web-dev/traffic-data'
    });
});

/* GET dashboard page. */
router.get('/next-steps', function (req, res, next) {
    res.render('pages/next_steps', {
        layout: 'default',
        title: 'Next Steps',
        url: req.url,
        page: [{title: 'Next Steps'}],
        gitUrl: 'https://github.com/mike-web-dev/traffic-data'
    });
});

module.exports = router;
