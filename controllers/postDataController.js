const db = require("../models/postData.js");

module.exports = {
    create: function(req, res) {
        db.PostData.create(req.body)
        .then((dbPostData) => {res.json(dbPostData)})
        .catch(err => {throw err});
    },
    update: function(req, res) {
        db.PostData.update({
            where: { id: req.params.id }
        })
        .then((dbPostData) => {res.json(dbPostData)})
        .catch( err => {throw err});
    }
};