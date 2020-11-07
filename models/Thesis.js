const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Thesis extends Model {}

// create fields/columns for Post model
Thesis.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thesis_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      security_id: {
          type: DataTypes.STRING,
          references:{
            model: 'security',
            key: 'ticker'
          }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'thesis'
    }
  );

  module.exports = Thesis;