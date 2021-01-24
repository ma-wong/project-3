const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
const passport = require("./config/passport");
const routes = require("./routes");
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//limiting the payload size
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//passport
app.use(
  session({ secret: "placeholder", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
//NodeMailer Stuff
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "codingbarbershop@gmail.com",
    pass: "coding123barbershop"
  }
});
//send

// Define API routes here
app.use(routes);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"))
});

app.get("/api/user/send/", function(req, res) {

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: req.body.email, // Change to your recipient
  from: 'codingbarbershop@gmail.com', // Change to your verified sender
  subject: 'Please Verify Your Email',
  text: 'and easy to do anywhere, even with Node.js',
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

});


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
