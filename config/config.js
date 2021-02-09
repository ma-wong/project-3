require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "snippet",
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "rbawcypictsdyqlb",
    "password": "a24s3d5izjdk76ac",
    "database": "f0lf97qsgzo6m0n8",
    "host": "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
};
