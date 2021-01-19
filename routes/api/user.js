const router = require('express').Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .get(userController.readAll)

router.route("/")
    .put(userController.update)
    .destroy(userController.delete)

module.exports = router;