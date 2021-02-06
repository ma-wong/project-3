require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DBPassword,
    "database": "snippet",
    "host": process.env.DB_HOST,
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
    "username": "heubwt8pzctfthfn",
    "password": "b83u2mjk63vugrhk",
    "database": "jowowlugy12yujcd",
    "host": "dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
};
