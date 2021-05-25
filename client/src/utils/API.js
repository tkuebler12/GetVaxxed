import axios from "axios";

export default {
  
  getUser: function() {
    return axios.get("/api/userRoutes");
  },
  
  saveUser: function(userData) {
    return axios.post("/api/userRoutes", userData);
  }
};
