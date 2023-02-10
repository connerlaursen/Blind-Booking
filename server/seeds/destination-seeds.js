const { Destinations } = require('../../models');

const destinationData = [

// skiing category

  {
    destination_name: 'Seattle',
    airport_code: 'SEA',
    price: 0,
    category_id: 1,
  },
  {
    destination_name: 'Salt Lake City',
    airport_code: 'SLC',
    price: 0,
    category_id: 1,
  },
  {
    destination_name: 'Denver',
    airport_code: 'DEN',
    price: 0,
    category_id: 1,
  },
  {
    destination_name: 'Boise',
    airport_code: 'BOI',
    price: 0,
    category_id: 1,
  },

// beaches category

  {
    destination_name: 'Honolulu',
    airport_code: 'HNL',
    price: 0,
    category_id: 2,
  },
  {
    destination_name: 'San Diego',
    airport_code: 'SAN',
    price: 0,
    category_id: 2,
  },
  {
    destination_name: 'Miami',
    airport_code: 'MIA',
    price: 0,
    category_id: 2,
  },
  {
    destination_name: 'Los Angeles',
    airport_code: 'LAX',
    price: 0,
    category_id: 2,
  },

// city category

  {
    destination_name: 'New York City',
    airport_code: 'JFK',
    price: 0,
    category_id: 3,
  },
  {
    destination_name: 'Chicago',
    airport_code: 'ORD',
    price: 0,
    category_id: 3,
  },
  {
    destination_name: 'San Francisco',
    airport_code: 'SFO',
    price: 0,
    category_id: 3,
  },
  {
    destination_name: 'Atlanta',
    airport_code: 'ATL',
    price: 0,
    category_id: 3,
  },

// cultural category

  {
    destination_name: 'Washington DC',
    airport_code: 'DCA',
    price: 0,
    category_id: 4,
  },
  {
    destination_name: 'Philidelphia',
    airport_code: 'PHL',
    price: 0,
    category_id: 4,
  },
  {
    destination_name: 'Savana',
    airport_code: 'SAV',
    price: 0,
    category_id: 4,
  },
  {
    destination_name: 'San Antonio',
    airport_code: 'SAT',
    price: 0,
    category_id: 4,
  },

// foody category

  {
    destination_name: 'Portland',
    airport_code: 'PDX',
    price: 0,
    category_id: 5,
  },
  {
    destination_name: 'Vegas',
    airport_code: 'LAS',
    price: 0,
    category_id: 5,
  },
  {
    destination_name: 'New Orleans',
    airport_code: 'MSY',
    price: 0,
    category_id: 5,
  },
  {
    destination_name: 'Austin',
    airport_code: 'AUS',
    price: 0,
    category_id: 5,
  },
];

const seedDestinations = () => Destinations.bulkCreate(destinationData);

module.exports = seedDestinations;
