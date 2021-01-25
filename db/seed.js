const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("../models");
const passport = require("../config/passport");
const routes = require("../routes");
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
//send
// Define API routes here
app.use(routes);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"))
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    for (i=0; i < postSeeds.length; i++){
        db.Post.create({
            title: postSeeds[i].title,
            code: postSeeds[i].code,
            UserId: postSeeds[i].UserId,
            tags: postSeeds[i].tags,
            language: postSeeds[i].language,
            user: postSeeds[i].user,
            description: postSeeds[i].description
        })
        .then(console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
          ))
        .catch(err => {throw err});
    }
  
  });
});

let postSeeds = [
    {
    title: "Fizz Buzz",
    code: `enum FizzBuzz {
        Fizz,
        Buzz,
        FizzBuzz,
    }
    fn main() {
        let mut ans = vec![];
        for i in 0..100 {
            if i % 5 == 0 && i % 3 == 0 {
            } else if i % 5 == 0 {
                vec.push(FizzBuzz::Fizz)
            } else if i % 3 == 0 {
                vec.push(FizzBuzz::Buzz)
            }
        }
    }`,     
    description: "",
    tags: "rust, fizzbuzz",
    language: "",
    user: "wlawsonkelly",
    UserId: 1
    },
    {
        title: "Fizz Buzz",
        code: `enum FizzBuzz {
            Fizz,
            Buzz,
            FizzBuzz,
        }
        fn main() {
            let mut ans = vec![];
            for i in 0..100 {
                if i % 5 == 0 && i % 3 == 0 {
                } else if i % 5 == 0 {
                    vec.push(FizzBuzz::Fizz)
                } else if i % 3 == 0 {
                    vec.push(FizzBuzz::Buzz)
                }
            }
        }`,     
        description: "A Rust implementation of fizzbuzz",
        tags: "rust, fizzbuzz",
        language: "Rust",
        user: "wlawsonkelly",
        UserId: 1
    },
];

for (i=0; i < postSeeds.length; i++){
    db.Post.create({
        title: postSeeds[i].title,
        code: postSeeds[i].code,
        UserId: postSeeds[i].UserId,
        tags: postSeeds[i].tags,
        language: postSeeds[i].language,
        user: postSeeds[i].user
    })
    .then((dbPost) => {res.json(dbPost)})
    .catch(err => {throw err});
}