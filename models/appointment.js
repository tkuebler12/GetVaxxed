const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: Number,
        required: 'Enter your desired time'
    },
    value: {
        type: String,
        required: 'Enter your desired location'
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;