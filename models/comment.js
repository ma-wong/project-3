module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
        }
    }
  });
  
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Comment;
};
