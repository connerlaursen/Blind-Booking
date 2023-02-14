import NavBar from "../components/NavBar";
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'

function BookTrip() {
    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    return (
        <div>
            <NavBar />
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
                    <select className="activityDropDown">
                        <option value="food">Food</option>
                        <option value="beach">Beach</option>
                        <option value="history">History/Culture</option>
                        <option value="city">City</option>
                        <option value="skiing">Mountain/Skiing</option>
                    </select>
                </label>
                <form className="maxAmount">Max. Amount<input defaultValue="0.00">
                </input></form>
                <form className="numPass">Number of Passengers<input></input></form>
            </div>
            <button id="submitBtn">Submit</button>
        </div>
    );
};

export default BookTrip;