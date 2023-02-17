import NavBar from "../components/NavBar";
import DatePicker from 'react-datepicker';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

const { REACT_APP_BACKEND_API } = process.env;

console.log(REACT_APP_BACKEND_API)

const BookTrip = () => {
    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [maxPrice, setmaxPrice] = useState("0.00");
    const [numPassengers, setnumPassengers] = useState("0");
    const [category, setcategory] = useState("food");
    const [flightData, setFlightData] = useState([]);
    const [loading, setLoading] = useState(false);


     const handleSubmit = (e) => {
       

        setLoading(true)
        e.preventDefault();

            const url = `${REACT_APP_BACKEND_API}/book`;
            let requestData = `?maxPrice=${maxPrice}&numPassengers=${numPassengers}&category=${category}&departureDate=${departureDate}&returnDate=${returnDate}`
            fetch(url+requestData)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setFlightData(data)
            });
            
    //     try {
    //         fetch(url+requestData)
    //         .then(res=>res.json())
    //         .then(data=>console.log(data));
    //     } catch (err) {
    //         console.log(err);
    //     }
        }
  

    useEffect( () => {
        const url = `${REACT_APP_BACKEND_API}/book`;
        let requestData = `?maxPrice=${maxPrice}&numPassengers=${numPassengers}&category=${category}&departureDate=${departureDate}&returnDate=${returnDate}`
        setLoading(true);
        fetch(url+requestData)
            .then(res=>res.json())
            .then(data=> {
                setFlightData(data)
                setLoading(false)
    });


    }, [] )

    return (
        <div>
            <NavBar />
            <div className = "bookingCard">
            <form className="maxAmount" id="formCard">
                <div className="dateSelector">
                    <label className="travelDates">Departure Date</label>
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        minDate={new Date}

                    />

                    <label>Return Date</label>
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        minDate={new Date()}
                    />

                </div>
                <div id="inputs">
                    <label className="activityDropDown">
                        Select favorite activity:
                        <select className="activityDropDown" value={category} onChange={e => setcategory(e.target.value)}>
                            <option value="5">Food</option>
                            <option value="2">Beach</option>
                            <option value="4">History/Culture</option>
                            <option value="3">City</option>
                            <option value="1">Mountain/Skiing</option>
                        </select>
                    </label>
                    <label>Budget
                    </label>
                    <input value={maxPrice} onChange={e => setmaxPrice(e.target.value)} />
                    <label>Number of Passengers</label>
                    <input value={numPassengers} onChange={e => setnumPassengers(e.target.value)} />
                </div>
                <button onClick={handleSubmit} id="submitBtn">Submit</button>
            </form>

           

            {flightData.length > 0 ?(<p>loading</p>
            


            ):
            
            
            Object.hasOwn(flightData, "message") 
            
            ?(
                <p></p>
            
            )
            :(
                <ul>
                   airport: {flightData.arrivalCity}
                   airline: {flightData.testVar?.airlineCode}
                   price: {flightData.testVar?.lowestFare}

                </ul>
                

            )
            }
        </div>
            <footer id="content-wrap">
                <small id="footer">Copyright 2023 BBLLC. All Rights Reserved.</small>
            </footer>
        </div>
    );
};



export default BookTrip;