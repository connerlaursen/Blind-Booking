const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedDestinations = require('./destination-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedDestinations();

  process.exit(0);
};

seedAll();
