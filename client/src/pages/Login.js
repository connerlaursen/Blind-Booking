import NavBar from "../components/NavBar";
import {useNavigate} from 'react-router';

function Login() {
    const navigate = useNavigate();
    console.log('login page')
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('get data!')
        navigate('/');
    }

    //use session cookies
    
    return (
        <div>
            <NavBar />
            <form method="post">
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button
            type="submit"
            class="btn btn-primary btn-block btn-large"
            onClick={handleSubmit}
        >Login</button>
    </form>
        </div>
    )
    
}

export default Login;