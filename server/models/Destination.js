const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Destination extends Model {}

Destination.init(
{  
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    destination_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    airport_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER
    },
},
{
    sequelize,
    modelName: 'destination'
}
);

module.exports = Destination;