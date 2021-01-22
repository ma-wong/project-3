const router = require('express').Router();
const commentController = require("../../controllers/commentController");

router.route("/:postid")
    .post(postController.create)
    .get(postController.readAll)
