const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const turf = require('@turf/turf');

router.get('/locations', async (req, res) => {

    let data = [];

    let baseUrl = 'https://roadtraffic.dft.gov.uk/api/count-points?filter[local_authority_id]=71';

    async function getLocation(url) {

        await axios.get(url).then( async response => {

            if (response.data.data) {
                data = [...data, ...response.data.data];
            }

            if (response.data.links.next !== null) {

                await getNext(response.data.links.next)

            } else {

                output();

            }
        }).catch( error => {
            return res.status(401).send({error: "Unable to get locations"});
        })

    }

    async function getNext(url) {
        await getLocation(url);
    }

    function output() {

        let features = data.map(function (point) {
            return turf.point([parseFloat(point.longitude), parseFloat(point.latitude) ], point);
        });

        let featureCollection = turf.featureCollection(features);

        return res.json(featureCollection);
    }

    await getLocation(baseUrl);

});

module.exports = router;