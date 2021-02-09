
import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomUserImage: function() {
    return axios.get(BASEURL);
  },
  signUpUser: function(userData) {
    return axios.post("/api/user/", userData)
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
  getUserEmail: function(email) {
    return axios.get("/api/user/check_user_email/" + email)
  },

  updatePassword: function() {
    return axios.put("/api/user/")
  },

  getPostCopies: function(){
    return axios.get("/api/post/copies/")
  },
  getPostLikes: function(){
    return axios.get("/api/post/likes/")
  },
  getPostComments: function(){
    return axios.get("/api/post/comments/")
  },
  getPostsBySearch: function(query) {
    return axios.get("/api/post/search/" + query);
  },
  getPostsByAuthor: function(author){
    return axios.get("/api/post/author/" + author)
  },
  getPostsByTag: function(tag){
    return axios.get("/api/post/tag/" + tag)
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
    return axios.get("/api/comment/" + postId)
  },
  postComment: function(commentData) {
    return axios.post("/api/comment", commentData)
  },
  sendEmail: function(email) {
    return axios.get("/api/user/send/", email)
  },
  sendResetEmail: function(email) {
    return axios.get("api/user/send/reset/" + email)
  },
  createPost: function(postData) {
    return axios.post("/api/post", postData);
  },
  getUserById: function() {
    return axios.get("/api/user/")
  },
  githubRedirect: function() {
    return axios.get("/api/github/callback")
  }
};