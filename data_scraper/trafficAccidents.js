'use strict';

const fs = require('fs');
const axios = require('axios').default;
const turf = require('@turf/turf');

// Use fs.readFile() method to read the file
fs.readFile('../public/data/polling_district.geojson', 'utf8', function(err, data){

    let polling_district = JSON.parse(data);

    fs.readFile('../public/data/traffic_accidents.geojson', 'utf8', async function(err, data2){

        let traffic_accidents = JSON.parse(data2);

        // Display the file content
        console.log(traffic_accidents);

        await turf.featureEach(polling_district, function (currentFeature, featureIndex) {
            let ptsWithin = turf.pointsWithinPolygon(traffic_accidents, currentFeature);
            currentFeature.properties.accidents = ptsWithin.features.length;
            let casualties = 0;
            for(let i=0; i < ptsWithin.features.length; i++){
                casualties = casualties + parseInt(ptsWithin.features[i].properties.Number_of_Casualties);
            }
            currentFeature.properties.casualties = casualties;
        });

        fs.writeFileSync('./data/polling_district.geojson', JSON.stringify(polling_district));

    });


});