import NavBar from "../components/NavBar";

function Login() {
    console.log('login page')
    return (
        <div>
            <NavBar />
            <form method="post">
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
    </form>
        </div>
    )
    
}

export default Login;