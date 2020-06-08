const express = require('express');
const router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('/data/locations.geojson');

router.get('/locations', (req, res) => {
    if(data){
        return res.json(JSON.parse(data));
    }
    return res.status(401).send({error: "Unable to get latest Events"});
});

module.exports = router;