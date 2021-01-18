const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(10),
            //changed to get the server running 
            allowNull: false,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Post;
}