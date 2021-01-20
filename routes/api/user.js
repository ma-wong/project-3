const router = require('express').Router();
const passport = require('passport');
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .get(userController.readOne)
    .put(userController.update)
    .delete(userController.delete)

router.route("/login")
    .post(
        function (req, res, next) {
            console.log("loging in");
            console.log(req.body)
            next()
        },
        passport.authenticate("local"),
        (req, res) => {
            console.log("logged in for reals", req.user);
            res.send(req.user)
        }
    );

router.route("/all")
    .get(userController.readAll)

module.exports = router;