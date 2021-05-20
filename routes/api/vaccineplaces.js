const router = require("express").Router();
const axios = require('axios').default;

axios.get('https://www.vaccinespotter.org/api/v0/states.json')
  .then((response) => {
    res.send(response.data);
  });

module.exports = router;