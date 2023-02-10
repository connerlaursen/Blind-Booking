// const router = require('express').Router();
const axios = require("axios");
require('dotenv').config();

const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
  params: {
    date_departure: '2023-07-22',// this will be a variable/input
    location_departure: 'SEA', //this will be a variable/input
    location_arrival: 'JFK', // this will be a variable/input
    class_type: 'ECO',
    sort_order: 'PRICE',
    itinerary_type: 'ROUND_TRIP',
    price_min: '100',
    date_departure_return: '2023-07-28', //this will be a variable/input
    number_of_passengers: '1',//this will be a variable/input
    price_max: 600 //this will be a variable/input
  },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST 
  }
};




axios.request(options).then(function (response) {
  var price = response.data.totalTripSummary.airline;
  let lowestFare = Infinity;
  let airlineCode = null; 
  for (var i=0; i<price.length; i++){
    let fare = price[i].lowestTotalFare.amount;
    if(fare < lowestFare){
      lowestFare = fare
      airlineCode = price[i].code
    }
    console.log(price[i])
  }
  
  console.log(price);
  console.log(lowestFare);
  console.log(airlineCode)
	
}).catch(function (error) {
	console.error(error);
});