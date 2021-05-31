const router = require("express").Router();
const axios = require('axios').default;

axios.get('https://www.vaccinespotter.org/api/v0/states.json', (req, res) => {
  console.log(req.body)
})
  .then((res) => {
    console.log("API Response")
    console.log("==========================")
    console.log(res.data);
  })
  .catch((err) => {
    if (err.res) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(err.res.data);
      console.log(err.res.status);
      console.log(err.res.headers);
    } else if (err.req) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(err.req);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', err.message);
    }
    console.log(err.config);
  });;

module.exports = router;