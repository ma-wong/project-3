const db = require("../models/");

module.exports = {
    create: function(req, res) {
        db.PostData.create(req.body)
        .then((dbPostData) => {res.json(dbPostData)})
        .catch(err => {throw err});
    },
    update: function(req, res) {
        db.PostData.update(
              {
                copies: req.body.copies
              },
              {
              where: {
                PostId: req.params.id
              }
        })
        .then((dbPostData) => {res.json(dbPostData)})
        .catch( err => {throw err});
    },
    read: function(req, res) {
        db.PostData.findAll({})
        .then((dbPostData) => {res.json(dbPostData)})
        .catch( err => {throw err});
    },
    readOne: function(req, res) {
        db.PostData.findOne({
            where: { id: req.params.id }
        })
        .then((dbPostData) => {res.json(dbPostData)})
        .catch( err => {throw err});
    }
};