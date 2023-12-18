import "./Login.css"
import { FcGoogle } from "react-icons/fc";
import { WiDirectionUpRight } from "react-icons/wi";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="Login-container" id="container">
        <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <p className=""><FcGoogle /></p>
                        </div>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <a href="#">Forget Your Password?<Link to="/registerPage"> Register</Link> 
                            <p className="Login-p">
                                <WiDirectionUpRight />
                             </p>
                                
                            </a>
                            <button className="signinbtn">Sign In</button>
                    </form>
               </div>
            </div>
  )
}

export default Login;