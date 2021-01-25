const router = require('express').Router();
const postDataController = require("../../controllers/postDataController");

router.route("/")
    .post(postDataController.create)
    .get(postDataController.read)

router.route("/:id")
    .put(postDataController.update)
    .get(postDataController.readOne)

module.exports = router;