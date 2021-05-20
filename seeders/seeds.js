let mongoose = require("mongoose");
let db = require("../models/location");

mongoose.connect("mongodb://localhost/covid", {
  useNewUrlParser: true,
  useFindAndModify: false
});