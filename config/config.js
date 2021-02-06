require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.USERNAME,
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
    "username": "brandonpiercy",
    "password": "sqlROOTpW",
    "database": "snippet",
    "host": "brandon-aws-db.c0jpjktwneln.us-west-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
};
