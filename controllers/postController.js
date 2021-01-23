const db = require("../models/");

module.exports = {
    create: function(req, res) {
        db.Post.create({
            title: req.body.title,
            code: req.body.code,
            userid: req.body.userid,
            tags: req.body.tags
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch(err => {throw err});
    },
    readAll: function(req, res) {
        db.Post.findAll({})
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
    findOne: function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    views: function(req,res){
        db.Post.findAll({
            include: {
              model: PostData,
              order: [
                ['views', 'DESC']
            ]}
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    comments: function(req,res){
        db.Post.findAll({
            include: {
              model: Comment,
              order: [
                ['views', 'DESC']
            ]}
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    },
    likes: function(req,res){
        db.Post.findAll({
            include: {
              model: PostData,
              order: [
                ['likes', 'DESC']
            ]}
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    }
    // Still needs search by title and tag routes

    // This is my attempt at the API route, its not correct, pls help -Morgan
    findByTitle: function(req, res) {
        db.Post.findAll({
            where: {
                title: req.body
            }
        })
        .then((dbPost) => {res.json(dbPost)})
        .catch( err => {throw err});
    }
};