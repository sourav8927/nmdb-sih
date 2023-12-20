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
          <span>Using your Affiliation ID and Password</span>
          <input type="text" placeholder="Affiliation ID" />
          <input type="password" placeholder="Password" />
          <Link to="/NgoDashBoard"><button className="signinbtn">Sign In</button></Link>
          {/* <div className="dont-have-acc">
            <p>Don't have account? &nbsp;</p>
            <Link to="/registerPage"><p>Register Yourself<WiDirectionUpRight /></p></Link>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login;