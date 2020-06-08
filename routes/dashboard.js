const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', function (req, res, next) {
    res.render('pages/dashboard', {
        layout: 'dashboard',
        title: 'Dashboard Mockup',
        url: '/dashboard',
        mapboxToken: process.env.MAPBOXTOKEN,
        googleApiKey: process.env.GOOGLEAPIKEY,
        info: {
            body: `
                <p>
                   This is a mockup of how the different methods and technologies used in the 
                   <a href="/examples">examples</a> could be incorporated into a dashboard. Sadly we have run out of 
                   time and the dashboard will need to wait for another day. 
                </p>`,
        },
        gitUrl: 'https://github.com/mike-web-dev/traffic-data/blob/master/views/pages/dashboard.hbs',
    });
});

module.exports = router;
