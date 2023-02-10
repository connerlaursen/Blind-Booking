const User = require('./User');
const Category = require('./Category');
const Destination = require('./Destination');

Category.hasMany(Destination, {
    foreignKey: 'category_id',
});

Destination.belongsTo(Category, {
    foreignKey: 'category_id',
});

module.exports = { User, Category, Destination };