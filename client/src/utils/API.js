
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
    return axios.get("/api/user/user_data");
  },
  getPostViews: function(){
    return axios.get("/api/post/views/")
  },
  getPostLikes: function(){
    return axios.get("/api/post/likes/")
  },
  getPostComments: function(){
    return axios.get("/api/post/comments/")
  },
  getPostsBySearch: function(query) {
    return axios.get("/api/post/search/" + query );
  },
  getPost: async function(id) {
    return axios.get("/api/post/" + id);
  },  
  getPostAll: function() {
    return axios.get("/api/post/");
  },
  getPostData: function(postId) {
    return axios.get("/api/postdata/" + postId);
  },
  updatePostData: function(postId, postData) {
    return axios.put("/api/postdata/" + postId, postData);
  },
  getComments: function(postId) {
    return axios.get("api/comment/" + postId)
  },
  postComment: function(postId, commentBody) {
    return axios.post("api/comment/" + postId, commentBody)
  },
  sendEmail: function(email) {
    return axios.get("/api/user/send/", email)
  },
  createPost: function(postData) {
    return axios.post("/api/post", postData);
  }
};