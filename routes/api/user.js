const router = require('express').Router();
const passport = require('passport');
const userController = require("../../controllers/userController");
const sgMail = require('@sendgrid/mail');

router.route("/")
    .post(userController.create)
    .put(userController.update)
    .delete(userController.delete)

router.route("/login")
    .post(
        passport.authenticate("local"), function (req, res) {
            res.json(req.user);
        }
    );
router.route("/logout")
    .get(
        function (req, res) {
            req.logout();
            res.redirect("/")
        }
    )

router.route("/all")
    .get(userController.readAll)

router.route('/user_data')
    .get(userController.readOne)

// router.route("/image")
//     .post(
//         cloudinary.v2.uploader.unsigned_upload(req.body.image, "prof_pic")
//     )
router.route("/send/")
    .get(
        function (req, res) {
            console.log("Sending the eamil");
            sgMail.setApiKey("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")
            const msg = {
                to: req.user.email, // Change to your recipient
                from: 'codingbarbershop@gmail.com', // Change to your verified sender
                subject: 'Please Verify Your Email',
                text: 'Verify your email',
                html: '<strong>Please click this link <a href="http://localhost:3000">Verify</a></strong>',
            }
            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    )


module.exports = router;