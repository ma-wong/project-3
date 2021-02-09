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
            // db.User.findOne({
            //     where: {username: req.user.username}
            // }).then((dbUser) => {
            //     console.log(dbUser)
            //     delete dbUser.dataValues.password
            //     delete dbUser._previousDataValues.password
            //     res.json(dbUser)
            // })
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
            password: req.body.password,
        }, { where: { username: req.body.username }})
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
    },

    readOneNotLoggedin: function(req, res) {
        console.log("looking for user with email")
            db.User.findOne({
                where: {email: req.params.email}
            }).then((dbUser) => {
                if (!dbUser) {
                    res.json({})
                } else {
                console.log(dbUser)
                delete dbUser.dataValues.password
                delete dbUser._previousDataValues.password
                res.json(dbUser)
                }
            }).catch(err => {throw err});
    }
};