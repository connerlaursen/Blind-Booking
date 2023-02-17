import NavBar from "../components/NavBar";
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  console.log('login page')
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('get data!')
    // navigate('/book');
    fetch('http://localhost:3001/api/users/login',{
      method:"POST",
      body:JSON.stringify({
        email:"abc@abc.com",
        password:"12345678"
      })
    })
    .then(res=>res.json())
    .then(data=> {
      navigate('/book')
    })
  }

  function createUser(e) {
    e.preventDefault();
    fetch('http://localhost:3001/api/users/',{
      method:"POST",
      body:JSON.stringify({
        username:"johnDoe123",
        email:"abc@abc.com",
        password:"12345678",

      })
    })
    .then(res=>res.json())
    .then(data=> {
      navigate('/book')
    })
    }

  //use session cookies

  return (
    <div>
      <NavBar />
      <div class="loginCard">
        <div class="loginMainCard">
          <form method="post">
          <div class="form-elements">
            <h4> Existing Users Log In Below</h4>
            <div class="loginFields">
            <input type="text" name="u" placeholder="Username" required="required" />
            <input type="password" name="p" placeholder="Password" required="required" />
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large"
              onClick={handleSubmit}
            >Login</button>
            </div>
            </div>
          </form>
        </div>

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
        <div class="logoutMainCard">
          <form class="form signup-form">
            <div class="form-elements">
            <h4>New Users Create an Account Below</h4>
            <div class="loginFields">
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
              <button class="btn btn-primary" type="submit" onClick={createUser}>signup</button>
              
            </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login;