require('dotenv').config();
module.exports = {
  "development": {
    "username": "brandonpiercy",
    "password": "sqlROOTpW",
    "database": "snippet",
    "host": "brandon-aws-db.c0jpjktwneln.us-west-1.rds.amazonaws.com",
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
