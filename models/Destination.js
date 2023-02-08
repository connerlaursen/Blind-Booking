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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.String,
        allowNull: false,
    },
    category_id: {
        type: Datatypes.INTEGAR,
        references: {
            model: 'category',
            key: 'id',
        },
    },
},
{
    sequelize,
    modelName: 'destination'
}
);

module.exports = Destination;