const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedDestinations = require('./destination-seeds');

// const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedDestinations();
  console.log('\n----- DESTINATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
