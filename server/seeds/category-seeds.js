const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Mountains/Skiing',
  },
  {
    category_name: 'Beach',
  },
  {
    category_name: 'City',
  },
  {
    category_name: 'History/Culture',
  },
  {
    category_name: 'Food',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;