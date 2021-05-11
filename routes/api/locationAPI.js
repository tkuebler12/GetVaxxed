const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Location = require('./api/location.js');

router.post('/location', function(req, res, next){
    location = new Location(req.body);
    newLocation.save()
         .then(item => {
             res.json(newLocation);
     })
     .catch(err => {
        res.status(400).send("unable to save to database");
     });
});


router.get('/location', (req, res) => {
    Location.find({})
    .sort({})
    .then(dbLocation => {
        res.json(dbLocation);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;