import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomUserImage: function() {
    return axios.get(BASEURL);
  },
  signUpUser: function(userData) {
    return axios.post("api/user", userData)
  }
};