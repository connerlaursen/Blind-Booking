import { Link } from "react-router-dom";

const NavBar = ({ clickOnSet }) => {
    const clickOnSignIn = () => (
        clickOnSet(true)
    )
    return (
        <div>
            <header>
                <nav>

                    <ul>
                        <li>
                            <Link className="ul" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="ul" to="/book">Book Trip</Link>
                        </li>
                        <li>
                            <Link className="ul" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="ul" to="/contact">Contact</Link>
                        </li>
                        <div className="topnav-right"> <li><Link className="ul" to="/login">Login</Link></li></div>
                    </ul>
                    <div>
                        <img id="logo" src="/BBLLC Logo2.png" width="350px" />
                        {/* <button onClick={clickOnSignIn}>sign in</button> */}
                    </div>
                </nav>
            </header>
            
        </div>
    )
}
export default NavBar;