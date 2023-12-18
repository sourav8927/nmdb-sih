import "./Register.css"
import { FcGoogle } from "react-icons/fc";
import { WiDirectionUpRight } from "react-icons/wi";
import { Link } from "react-router-dom";

function Register() {


  return (
    <div className="Register-container" id="container">
        <div className="Regform-container Regsign-in">
                    <form>
                        <h1>Register</h1>
                        <div className="Regsocial-icons">
                            <p className=""><FcGoogle /></p>
                        </div>
                            <span>or use your email password</span>
                            <input type="text" placeholder="Name" />
                            <input type="number" placeholder="Mobile no"/>
                            <input type="number" placeholder="Aadhar No"/>
                            <input type="email" placeholder="Your email"/>
                            <input type="password" placeholder=" Set password"/>
                            <input type="password"  placeholder="Confirm Password" />

                            <a href="#">Already registered ?<Link to="./LoginUser"> Login</Link> 
                            <p className="register-p">
                                <WiDirectionUpRight />
                             </p>
                                
                            </a>
                            <button  className="Regbtn">Sign In</button>
                    </form>
               </div>   
     </div>
  )
}

export default Register;