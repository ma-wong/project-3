const router = require('express').Router();
const commentController = require("../../controllers/commentController");

router.route("/")
    .post(commentController.create)

router.route("/:postid")
    .get(commentController.readAll)


module.exports = router;