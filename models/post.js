const { Sequelize } = require("sequelize");
const { sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.TEXT,
            //changed to get the server running 
            allowNull: false,
        },       
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    Post.associate = function(models) {
        Post.hasOne(models.PostData, {
            onDelete:"cascade",
            allowNull: false
        });
        Post.hasMany(models.Comment, {
            onDelete: "cascade"
          });
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Post;
}