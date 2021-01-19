const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        })
        .then((dbUser) => {res.json(dbUser)})
        .catch(err => {throw err});
    },
    readAll: function(req, res) {
        db.User.findAll({})
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
    },
    // Parameters for findone, delete and update may need to be adjusted to something other than ID idk;
    readOne: function(req, res) {
        db.User.findOne({
             where: { id: req.params.id}
            })
        .then((dbUser) => {res.json(dbUser)})
        .catch( err => {throw err});
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