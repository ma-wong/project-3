const router = require('express').Router();
const passport = require('passport');
const userController = require("../../controllers/userController");
const sgMail = require('@sendgrid/mail');
const axios = require('axios') 

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
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: req.user.email, // Change to your recipient
                from: 'codingbarbershop@gmail.com', // Change to your verified sender
                subject: 'Please Verify Your Email',
                text: 'Verify your email',
                html: '<strong>Please click this link <a href="https://infinite-badlands-28326.herokuapp.com/">Verify</a></strong>',
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