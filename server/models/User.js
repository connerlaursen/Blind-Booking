const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false,
    }
},
{
    sequelize,
    modelName: 'user'
}
);

module.exports = User;