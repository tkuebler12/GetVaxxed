const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    location: {
        type: String,
        required: 'Enter a location'
    },
    zipCode: {
        type: Number,
        required: 'Enter your ZIP code'
    }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;