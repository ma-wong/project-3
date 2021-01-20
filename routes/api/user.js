const router = require('express').Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)

router.route("/:id")
    .get(userController.readOne)
    .put(userController.update)
    .delete(userController.delete)

router.route("/all")
    .get(userController.readAll)

module.exports = router;