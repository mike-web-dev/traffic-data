const express = require('express');
const router = express.Router();

/* GET examples page. */
router.get('/', function (req, res, next) {
    res.render('pages/examples/01_mapbox_layer', {
        layout: 'example',
        title: 'Load data from a Mapbox',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    The Data for Devon was downloaded from <a href="https://roadtraffic.dft.gov.uk/api">
                    roadtraffic.dft.gov.uk</a> and processed using <a href="https://www.qgis.org/en/site/">QGIS</a>. 
                    The data contained multiple entries for the same location, this data was filtered to contain 
                    locations/features with a unique Count Point ID.
                </p>
                <p>
                    It was then uploaded to <a href="https://www.mapbox.com/">mapbox</a> and converted into a 
                    <a href="https://docs.mapbox.com/vector-tiles/reference/">Vetor Tileset</a>. This can then be used 
                    to display points on the map. 
                </p>
                <p>
                    Click on a feature to view details and zoom to the location
                </p>`,
            gitUrl: '/'
        },
        page: [{title: 'Examples', url: '/examples'}, {title: 'Load data from a Mapbox'}]
    });
});

/* GET geojson layer page. */
router.get('/geojson-layer', function (req, res, next) {
    res.render('pages/examples/02_geojson_layer', {
        layout: 'example',
        title: 'Load data from a GeoJson',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    The same data was used as in the previous <a href="/examples">example</a> but this time we 
                    use the MapboxGL library ta asynchronously load the GeoJson file from an external source.
                </p>
                <p>
                    Click on a feature to view details and zoom to the location
                </p>`,
            gitUrl: '/'
        },
        page: [{title: 'Examples', url: '/examples'}, {title: 'Load data from a GeoJson'}]
    });
});

/* GET d3 layer page. */
router.get('/d3-load', function (req, res, next) {
    res.render('pages/examples/03_load_using_d3', {
        layout: 'example',
        title: 'Load data using D3',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    Because the original data contained multiple datasets for the same location, instead of displaying 
                    all locations/features we can use the unique use the same data from the first 
                    <a href="/examples">example</a> to filter data from an external CSV using the 
                    <a href="https://d3js.org/">d3.js</a> library.  
                </p>
                <p>
                    The data is displayed using <a href="https://datatables.net/">datatables</a>
                </p>
                <p>
                    Click on a feature to view details and zoom to the location
                </p>`,

        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Load data using D3'}]
    });
});

/* GET d3 overlay page. */
router.get('/d3-overlay', function (req, res, next) {
    res.render('pages/examples/04_d3_overlay', {
        layout: 'example',
        title: 'Using a D3 Overlay',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    In the previous example we used <a href="https://d3js.org/">d3.js</a> to load a GeoJson and CSV but 
                    it can do much more. d3.js has the ability to work with geospatial data and instead of using mapbox 
                    to render a GeoJson we can use d3.js to create an SVG overlay that displays the locations on a map.  
                </p>
                <p>
                    Click on a feature to view details and zoom to the location
                </p>`,

        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Using a D3 Overlay'}]
    });
});

/* GET search by location page. */
router.get('/search-by-location', function (req, res, next) {
    res.render('pages/examples/05_search_by_location', {
        layout: 'example',
        title: 'Search by Location',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    What if you don't know the name of the road or the Count Point ID, how do you know where to look? By
                    using the <a href="https://docs.mapbox.com/api/search/">Mabox Geocoder</a> and 
                    <a href="https://turfjs.org/">turf.js</a> it is possible to search for a location, create a buffer and 
                    identify which locations are within the buffer.
                </p>
                <p>
                    Click on a feature to view details and zoom to the location
                </p>`,

        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Search by Location'}]
    });
});

/* GET google street view page. */
router.get('/get-street-view', function (req, res, next) {
    res.render('pages/examples/06_google_street_view', {
        layout: 'example',
        title: 'Google Street View',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        googleApiKey: process.env.GOOGLEAPIKEY,
        info: {
            body: `
                <p>
                    Using the <a href="https://developers.google.com/maps/documentation/streetview/intro">Street View Static API</a>
                    it is possible to use the pre-calculated bearing and get an image of the location based on the 
                    location and bearing of the Count Point
                </p>
                <p>
                    Click on a feature to view an image of the location
                </p>`,
        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Street View'}]
    });
});

/* GET home page. */
router.get('/style-by-attribute', function (req, res, next) {
    res.render('pages/examples/07_style_by_attribute', {
        layout: 'example',
        title: 'Style data by attribute',
        url: req.url,
        mapboxToken: process.env.MAPBOXTOKEN,
        info: {
            body: `
                <p>
                    Instead of only showing the Count Point locations the complete dataset wast converted to GeoJson and
                    uploaded to mapbox. The data can then be filtered by the different attributes. Unfortunately due to 
                    the number of points in the dataset mapbox has limited the zoom level at whicg the data can be 
                    viewed. 
                </p>
                <p>
                    In addition to just viewing the data when clicking on a feature a pie chart has been created using
                    <a href=https://c3js.org/"">c3.js</a>
                </p>`,

        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Style data by attribute'}]
    });
});

/* GET chart types page. */
router.get('/chart-types', function (req, res, next) {
    res.render('pages/examples/08_chart_types', {
        layout: 'layout',
        title: 'Chart Types',
        url: req.url,
        info: {
            body: `
                <p>
                   An example of different chart types created using <a href=https://c3js.org/"">c3.js</a> and the data 
                   downloaded from <a href="https://roadtraffic.dft.gov.uk/downloads">roadtraffic.dft.gov.uk</a>
                </p>`,

        },
        gitUrl: '/',
        page: [{title: 'Examples', url: '/examples'}, {title: 'Chart Types'}]
    });
});


module.exports = router;
