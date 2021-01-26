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
      //  for (i = 0; i < userSeeds.length; i++) {
        //     db.User.create({
        //         email: userSeeds[i].email,
        //         username: userSeeds[i].username,
        //         password: userSeeds[i].password,
        //         profileUrl: userSeeds[i].profileUrl,
        //     })
        // }

    //    for (i = 0; i < postSeeds.length; i++) {
    //         db.Post.create({
    //             title: postSeeds[i].title,
    //             code: postSeeds[i].code,
    //             UserId: postSeeds[i].UserId,
    //             tags: postSeeds[i].tags,
    //             language: postSeeds[i].language,
    //             description: postSeeds[i].description
    //         })
    //     }

        for (i = 0; i < commentSeed.length; i++) {
            db.Comment.create({
                body: commentSeed[i].body,
                UserId: commentSeed[i].UserId,
                PostId: commentSeed[i].PostId,
            })
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
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
        description: "",
        tags: "rust, fizzbuzz",
        language: "",
        UserId: 1
    },

];

let userSeeds = [
    {
        email: "jimmy@gmail.com",
        password: "123455678",
        username: "jimmy123",
        profileUrl: "https://picsum.photos/300/300"
    },
    {
        email: "susan@gmail.com",
        password: "123455678",
        username: "susan123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "kevin@gmail.com",
        password: "123455678",
        username: "kevin123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "tom@gmail.com",
        password: "123455678",
        username: "tom123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "sarah@gmail.com",
        password: "123455678",
        username: "sarah123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "liam@gmail.com",
        password: "123455678",
        username: "liam123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "chris@gmail.com",
        password: "123455678",
        username: "chris123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "kim@gmail.com",
        password: "123455678",
        username: "kim123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "kyle@gmail.com",
        password: "123455678",
        username: "kyle123",
        profileUrl: "https://picsum.photos/200/300"
    },
    {
        email: "tina@gmail.com",
        password: "123455678",
        username: "tina123",
        profileUrl: "https://picsum.photos/200/300"
    }
]

let commentSeed = [
    {
        body: "great post",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "learned a lot",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "not a good post. No comments on why it works",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Will use this thanks!",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17
        },

    {
        body: "You make it so simple!",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17
    },

    {
        body: "Learned more from this site than I did in Uni",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17
    },

    {
        body: "Cheers from Sweeden",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Thanks for this.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Looked everywhere for this",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Great optimization",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Stuck on this for 3 hours and the answer is right here.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Why make my own stuff when I can take it from here",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "You saved my job",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: ":)",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "You're the best one on this site I swear",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Excelent thanks",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Why does this function need to be recursive",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "I need to bookmark this",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },

    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Nice",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    },
    {
        body: "Love this button.",
        UserId: Math.floor(Math.random() * 10) + 1,
        PostId: Math.floor(Math.random() * 15) + 17    }

]