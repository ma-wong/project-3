const db = require("../models/");

module.exports = {
    create: function(req, res) {
        db.Cooment.create(req.body)
        .then((dbPost) => {res.json(dbPost)})
        .catch(err => {throw err});
    },
    readAll: function(req, res) {
        db.Comment.findAll({
            where: {
              postid: req.params.postid
            }
          }).then(function(dbComment) {
            res.json(dbComment);
      
          }).catch(function(err) {
            res.status(401).json(err);
          });
    },
    // Parameters for findone, delete and update may need to be adjusted to something other than ID idk;
    // Still needs search by title and tag routes
};