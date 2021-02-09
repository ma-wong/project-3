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
    "username": "etqf5uxcwq6frqwy",
    "password": "g0gda0kd1eqwjpe7",
    "database": "ntkd0otqp9hcrpcf",
    "host": "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
};
