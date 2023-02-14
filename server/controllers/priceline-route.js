// const router = require('express').Router();

const axios = require("axios");
require('dotenv').config();

async function callPriceline(userInput){
const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
  params: {
    date_departure: userInput.departureDate,// this will be a variable/input
    location_departure: 'SEA', 
    location_arrival: userInput.arrivalCity, // this will be a variable/input
    class_type: 'ECO',
    sort_order: 'PRICE',
    itinerary_type: 'ROUND_TRIP',
    price_min: '100',
    date_departure_return: userInput.returnDate, //this will be a variable/input
    number_of_passengers: userInput.numPassengers,//this will be a variable/input
    price_max: userInput.maxPrice //this will be a variable/input
  },
  headers: {
    'X-RapidAPI-Key': "4296f5bfe6msh980cd81462aad7bp160fdajsnbc15ada63a33",
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};
console.log("userInput",userInput)

var userInputMaxprice = userInput.maxPrice
console.log("options", options)



var response = await new Promise((res, rej) => {
  axios.request(options)
  .then(function (response) {
    // console.log(response.data)
  var price = response.data.totalTripSummary.airline;
  let lowestFare = Infinity;
  let airlineCode = null; 
  for (var i=0; i<price.length; i++){
    let fare = price[i].lowestTotalFare.amount;
    if(fare < lowestFare){
      lowestFare = fare
      airlineCode = price[i].code
    }
    console.log("This is the price [i] response", price[i])
  }
  console.log(price)
  console.log(userInput.maxPrice)
  allResults = price.filter(fare => fare.lowestTotalFare.amount < userInputMaxprice);
  

  res({
  price,
  lowestFare,
  airlineCode, 
  allResults
  })
	
}).catch(function (error) {
	console.error(error);
  res(null)
});

})
return response;
// var response = await axios.request(options)
// console.log(response);
// .then(function (response) {
//   var price = response.data.totalTripSummary.airline;
//   let lowestFare = Infinity;
//   let airlineCode = null; 
//   for (var i=0; i<price.length; i++){
//     let fare = price[i].lowestTotalFare.amount;
//     if(fare < lowestFare){
//       lowestFare = fare
//       airlineCode = price[i].code
//     }
//     console.log(price[i])
//   }
  
//   console.log(price);
//   console.log(lowestFare);
//   console.log(airlineCode)

//   return response;
	
// }).catch(function (error) {
// 	console.error(error);
// });

}

module.exports = callPriceline;