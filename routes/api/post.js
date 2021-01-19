const router = require('express').Router();
const postController = require("../../controllers/postController");

router.route("/")
    .post(postController.create)
    .get(postController.readAll)

router.route("/:id")
    .destroy(postController.delete)
    .put(postController.update)

module.exports = router;