'use strict';

const fs = require('fs');
const axios = require('axios').default;
const turf = require('@turf/turf');

let data = [];

let baseUrl = 'https://roadtraffic.dft.gov.uk/api/count-points?filter[local_authority_id]=71';

async function getLocation(url) {
    try {
        const response = await axios.get(url);
        if (response.data.data) {
            data = [...data, ...response.data.data];
        }
        if (response.data.links.next !== null) {
            await getNext(response.data.links.next)
        } else {
            output();
        }
    } catch (error) {
        console.error(error);
    }
}

async function getNext(url) {
    console.error('next');
    await getLocation(url);
}



function output() {

    let features = data.map(function (point) {
        return turf.point([parseFloat(point.longitude), parseFloat(point.latitude) ], point);
    });

    let featureCollection = turf.featureCollection(features);
    fs.writeFileSync('./data/count-points.geojson', JSON.stringify(featureCollection));
}