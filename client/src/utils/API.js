import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomUserImage: function() {
    return axios.get(BASEURL);
  },
  signUpUser: function(userData) {
    return axios.post("/api/user", userData)
  },
  loginUser: function(userData) {
    return axios.post("/api/user/login", userData)
  },
  logOutUser: function() {
    return axios.get("/api/user/logout");
  },
  getUser: function() {
    return axios.get("api/user/user_data")
  },
  getPost: async function(id) {
    return axios.get("/api/post/" + id);
  },
  getPostAll: function(){
    return axios.get("/api/post/")
  }
};