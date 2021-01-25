module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
        }
    },
    profileUrl: {
    type: DataTypes.STRING,
    allowNull: false
    }
  });
  

  Comment.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Comment;
};
