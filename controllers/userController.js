const { response } = require("express");
const db = require("../models");


module.exports = {
    create: function(req, res) {
        const { email, password, username, profileUrl } = req.body
        db.User.findOne({
            where: { email }
           }).then(response =>{
               if (response) {
                   console.log("you already have an account")
               } else {
                db.User.create({
                    email,
                    password,
                    username,
                    profileUrl
                })
                .then((dbUser) => {res.json(dbUser)})
                .catch(err => {throw err});
               }
           })
         //res.redirect(307, "/api/login");
    },
    readAll: function(req, res) {
        db.User.findAll({})
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
    },
    // Parameters for findone, delete and update may need to be adjusted to something other than ID idk;
    readOne: function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
          } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
              email: req.user.email,
              username: req.user.username,
              id: req.user.id,
              profileUrl: req.user.profileUrl,
              createdAt: req.user.createdAt
            });
          }
    },
    delete: function(req, res) {
        db.User.destroy({
            where: { id: req.params.id }
        })
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
    },
    update: function(req, res) {
        db.User.update({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        }, { where: { id: req.body.id }})
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
    }
};