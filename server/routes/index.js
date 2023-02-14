const router = require('express').Router();
const callPriceline = require('../controllers/priceline-route');
const { Destination, Category } = require('../models');

router.get('/destination', async (req, res) => {
    console.log(req.query)
    const {category} = req.query;
    const {departureDate} = req.query;
    const {returnDate} = req.query;
    const {maxPrice} = req.query;
    const {numPassengers} = req.query;
    let userInput = { category, departureDate, returnDate, maxPrice, numPassengers }
    console.log("category", category);
    
    let categoryCode = await Destination.findAll({
       where: {
        category_id: category
       }
    })

    categoryCode = categoryCode.map(code => code.dataValues.airport_code)
    console.log(categoryCode)

    function pickRandomCity(categoryCode){
        let min = Math.ceil(0);
        let max = Math.floor(categoryCode.length - 1 );
        let random = parseInt( Math.floor(Math.random() * (max - min) + min))
        return random
    }

  
    
    
    var testVar 
    var randomIndex
    var arrivalCity
    while (!testVar && categoryCode.length>0){
        randomIndex = pickRandomCity(categoryCode);
        arrivalCity = categoryCode[randomIndex]
        categoryCode = categoryCode.filter((item,index)=> index != randomIndex)
        
        userInput.arrivalCity = arrivalCity
        console.log(arrivalCity)
        testVar = await callPriceline(userInput)
        

    }
    console.log({testVar})
  

    if (testVar == null){
        res.json({ message:"No flights found for your max price" })
    } else{
    res.json({testVar, arrivalCity});}
});

module.exports = router;