const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const PostData = sequelize.define("PostData", {
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        clicks: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        copies: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        }
    });
    PostData.associate = function(models) {
        PostData.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Post;
}