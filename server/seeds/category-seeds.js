const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Skiing',
  },
  {
    category_name: 'Beaches',
  },
  {
    category_name: 'City',
  },
  {
    category_name: 'Cultural',
  },
  {
    category_name: 'Foody',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;