const db = require("../models/");

module.exports = {
    create: function(req, res) {
      console.log("SUP BITCH")
        db.Comment.create({
          body: req.body.body,
          PostId: req.body.postid,
          UserId: req.body.userid
        })
        .then((dbComment) => {res.json(dbComment)})
        .catch(err => {throw err});
    },
    readAll: function(req, res) {
        db.Comment.findAll({
            where: {
              PostId: req.params.postid
            },
            include: db.User,
            order: [
              ['updatedAt', 'DESC'],
          ],
          }).then(function(dbComment) {
            res.json(dbComment);
      
          }).catch(function(err) {
            res.status(401).json(err);
          });
    },
  
};