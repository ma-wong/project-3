const db = require("../models/");
const { Op } = require("sequelize");

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};


module.exports = {
    create: function(req, res) {
        db.Post.create({
            title: req.body.title,
            code: req.body.code,
            description: req.body.description,
            tags: req.body.tags,
            language: req.body.language,
            UserId: req.body.UserId
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch(err => {throw err});
    },
    readAll: function(req, res) {
        db.Post.findAll({limit: 100})
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    // Parameters for findone, delete and update may need to be adjusted to something other than ID idk;
    update: function(req, res) {
        db.Post.update({
            email: req.body.email,
            password: req.body.password,
            Postname: req.body.Postname
        }, { where: { id: req.body.id }})
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    delete: function(req, res) {
        db.Post.destroy({
            where: { id: req.params.id }
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    copies: function(req, res) {
        db.Post.findAll({
            include: [{
                model: db.PostData,
                }],
            limit: 100,
            order: [
                [db.PostData, 'copies', 'DESC']
              ]    
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    likes: function(req,res){
        db.Post.findAll({
            include: [{
                model: db.PostData,
                }],
            limit: 100,
            order: [
                [db.PostData, 'clicks', 'DESC']
              ]    
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },    
    comments: function(req,res){
        db.sequelize.query(`SELECT  posts.*,
        COUNT(*) as comment_count
        FROM posts
        INNER JOIN comments
            ON comments.PostId = posts.id
        GROUP BY posts.id
        ORDER BY comment_count DESC
        LIMIT 100`, { type: db.sequelize.QueryTypes.SELECT})
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    findByTitle: function(req, res) {
        db.Post.findAll({
            where: {
                title: {
                    [Op.regexp]: req.params.query
                }
            }, include: [{
                model: db.PostData,
                }],
            order: [
                [db.PostData, 'views', 'DESC']
              ],
            limit: 100
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    findByAuthor: function(req,res){
        db.Post.findAll({
            where: {UserId:req.params.author},
            limit: 100,
            order: [['createdAt', 'DESC']]
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    findByTags: function(req, res) {
        db.Post.findAll({
            where: {
                tags: {
                    [Op.regexp]: req.params.query
                }
            }, include: [{
                model: db.PostData,
                }],
            order: [
                [db.PostData, 'views', 'DESC']
              ]
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    findOne: function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: db.User
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    }
    // Still needs search by title and tag routes
};
