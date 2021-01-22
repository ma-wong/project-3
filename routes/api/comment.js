const router = require('express').Router();
const commentController = require("../../controllers/commentController");

router.route("/:postid")
    .post(commentController.create)
    .get(commentController.readAll)
