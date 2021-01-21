const router = require('express').Router();
const passport = require('passport');
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .put(userController.update)
    .delete(userController.delete)

router.route("/login")
    .post(
        passport.authenticate("local"), function(req, res) {
            res.json(req.user);
        }
    );
router.route("/logout")
        .get(
            function(req, res) {
                req.logout();
            }
        )

router.route("/all")
    .get(userController.readAll)

router.route('/user_data')
    .get(userController.readOne)

module.exports = router;