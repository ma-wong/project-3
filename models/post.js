const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(200000),
            allowNull: false,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.ARRAY(Sequelize.TEXT),
            allowNull: true
        }
    });
    return Post;
}