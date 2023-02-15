import NavBar from "../components/NavBar";
import {useNavigate} from 'react-router';

function Login() {
    const navigate = useNavigate();
    console.log('login page')
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('get data!')
        navigate('/book');
    }

    //use session cookies
    
    return (
        <div>
            <NavBar />
                <form method="post">
                <h1> Log In</h1>
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            onClick={handleSubmit}
        >Login</button>
    </form>

                {/* <form method="post">
                <h1> Create Account</h1>
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button
            type="submit"
            className="btn btn-primary btn-block btn-large"
            onClick={handleSubmit}
        >Create</button>
    </form> */}

    <form class="form signup-form">
      <div class="form-group">
        <label for="username-signup">Username:</label>
        <input class="form-input" type="text" id="username-signup" />
      </div>
      <div class="form-group">
        <label for="email-signup">Email:</label>
        <input class="form-input" type="text" id="email-signup" />
      </div>
      <div class="form-group">
        <label for="password-signup">Password:</label>
        <input class="form-input" type="password" id="password-signup" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">signup</button>
      </div>
    </form>
        </div>
    )
    
}

export default Login;