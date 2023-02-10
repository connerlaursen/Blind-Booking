//starter file
// import NavBar from "./NavBar.js"
//const NavBar = require("./navBar")
const NavBar = ({ clickOnSet }) => {
    const clickOnSignIn = () => (
        clickOnSet(true)
    )
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={clickOnSignIn}>sign in</button>
        </nav>
    )
}

const LoadingComp = () => (
    <div>
        <h1>Blind-Booking</h1>
        <p1>Get away for less</p1>
    </div>
)

const AuthForm = () => {
    return (<form><input>

    </input></form>)

}
const App = () => {
    console.log(process.env.PUBLIC_URL)
    const [clickOn, setClickOn] = React.useState(false)
    console.log(clickOn)
    return (
        <section>
            <NavBar clickOnSet={setClickOn}></NavBar>
            {clickOn ? <AuthForm /> : <LoadingComp />}
        </section>
    )
}

ReactDOM.render(

    <App />
    ,
    document.getElementById("app")
)

//ReactDOM.render(<p1>Choose for less</p1>, document.getElementById("slogan"))
