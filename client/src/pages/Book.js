import NavBar from "../components/NavBar";
import DatePicker from 'react-datepicker';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

const { REACT_APP_BACKEND_API } = process.env;

console.log(REACT_APP_BACKEND_API)

function BookTrip() {
    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [maxPrice, setmaxPrice] = useState("0.00");
    const [numPassengers, setnumPassengers] = useState("0");
    const [category, setcategory] = useState("food");

    async function handleSubmit(e) {
        e.preventDefault();

        const url = `${REACT_APP_BACKEND_API}/booking`;

        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    maxPrice: maxPrice,
                    numPassengers: numPassengers,
                    category: category,
                    departureDate: departureDate,
                    returnDate: returnDate
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setmaxPrice("");
                setnumPassengers("");
                setcategory("");
                setDepartureDate("");
                setReturnDate("");
                // setMessage("User created successfully");
            } else {
                // setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar />
            <form className="maxAmount">
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
                        minDate={new Date}
                    />

                </div>
                <div id="inputs">
                    <label className="activityDropDown">
                        Select favorite activity:
                        <select className="activityDropDown" value={activityDropDown} onChange={e => setactivityDropDown(e.target.value)}>
                            <option value="food">Food</option>
                            <option value="beach">Beach</option>
                            <option value="history">History/Culture</option>
                            <option value="city">City</option>
                            <option value="skiing">Mountain/Skiing</option>
                        </select>
                    </label>
                    <label>Max. Amount</label>
                    <input value={maxAmount} onChange={e => setmaxAmount(e.target.value)} />
                    <label>Number of Passengers</label>
                    <input value={numPass} onChange={e => setnumPass(e.target.value)} />
                </div>
                <button onClick={handleSubmit} id="submitBtn">Submit</button>
            </form>
        </div>
    );
};



export default BookTrip;