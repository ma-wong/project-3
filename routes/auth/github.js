const router = require('express').Router();
const passport = require('passport');
const db = require("../../models");


router.route('/')
    .get(
    passport.authenticate('github',{ scope: [ 'user:email' ] }
    )
)

router.route('/callback')
    .get(
        passport.authenticate('github'),
        function(req, res) {
        const result = res
        console.log(req.query.code)
        console.log(req.user._json)
         const { email, password, login, avatar_url } = req.user._json
        db.User.findOne({
            where: { email }
           }).then(response =>{
               if (response) {
                   console.log("you already have an account")
               } else {
                db.User.create({
                    email: email,
                    password: "12345678",
                    username: login,
                    profileUrl: avatar_url
                })
                .then(
                    (dbUser) => {res.json(dbUser)}
                )
                .catch(err => {throw err});
               }
           }).then(() => {
            console.log("redirecting to home")
           })
        }
    )



module.exports = router;