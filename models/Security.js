const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Security extends Model {}

Security.init(
    {
        ticker: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'security'
    }
);


module.exports = Security;