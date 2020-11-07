const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
            }
    },
    thesis_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'thesis',
            key: 'id'
            }
    },
    comment_opinion:{
        type: DataTypes.STRING,
        allowNull: false,
        isIn: [['support', 'oppose', 'neutral']]
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
