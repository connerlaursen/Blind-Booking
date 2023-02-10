import NavBar from "../components/NavBar";

function BookTrip() {
    return (
        <div>
            <NavBar />      

            <label>
                Pick your favorite activity:
                <select id="options">
                    <option value="food">Food</option>
                    <option value="beach">Beach</option>
                    <option value="history">History/Culture</option>
                    <option value="art">City</option>
                    <option value="skiing">Mountain/Skiing</option>
                </select>
            </label>
            <form>Max. Amount<input defaultValue="$">
            </input></form>
            <form>Number of Passengers<input></input></form>
        </div>
    );
};

export default BookTrip;