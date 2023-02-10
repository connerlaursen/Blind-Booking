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
                    <option value="history">History</option>
                    <option value="art">Art</option>
                    <option value="skiing">Skiing</option>
                </select>
            </label>
            <form>Max. Amount<input defaultValue="$">
            </input>Submit</form>
        </div>
    );
};

export default BookTrip;