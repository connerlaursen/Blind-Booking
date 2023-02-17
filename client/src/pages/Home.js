import NavBar from "../components/NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <div id="dreamVacay">
                <h1>A DREAM VACATION FOR A DREAM PRICE</h1>
                <p>We are currently in the beta phase for Blind Booking and are only offering flight options out of Seattle as the home airport.
                    Please be on the lookout for other departure cities in the future!
                </p>
            </div>
            <footer id="content-wrap">
                <small id="footer">Copyright 2023 BBLLC. All Rights Reserved.</small>
            </footer>

        </div>
    )
}

export default Home;
