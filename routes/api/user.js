const router = require('express').Router();
const userController = require("../../controllers/userController");

router.route("/api/signup")
    .post(userController.create)

router.route("user/:id")
    .get(userController.readOne)
    .put(userController.update)
    .delete(userController.delete)

router.route("/user")
    .get(userController.readAll)

module.exports = router;