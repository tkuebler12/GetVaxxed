import axios from "axios";

export default {

  getVaccine: function() {
    return axios.get("/api/vaccineplaces");
  },

  getVaccine: function(id) {
    return axios.get("/api/vaccineplaces/" + id);
  },
 
  deleteVaccine: function(id) {
    return axios.delete("/api/vaccineplaces/" + id);
  },
 
  saveVaccine: function(vaccineData) {
    return axios.post("/api/vaccineplaces", vaccineData);
  }
};



// const withAuth = (req, res, next) => {
//     // If the user is not logged in, redirect the request to the login route
//     if (!req.session.logged_in) {
//       res.json('This is not for you!');
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;

