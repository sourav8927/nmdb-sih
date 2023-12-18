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

                            <div className="input-box">
                              <label>Name</label>
                               <input type="text" placeholder="Enter your name" />
                            </div>

                             <div className="input-box">
                              <label>Mobile No</label>
                              <input type="number" placeholder="Enter your mobile no"/>
                            </div>
                           
                           
                             <div className="input-box">
                              <label >Date of Birth</label>
                            <input type="date" placeholder="Enter your DOB" />
                            </div>

                             <div className="input-box">
                              <label >Aadhar No</label>
                            <input type="number" placeholder="Enter Aadhar no"/>
                            </div>
                            
                           <div className="input-box">
                              <label >Email</label>
                            <input type="email" placeholder="Enter your email"/>
                            </div>
                            
                             <div className="input-box">
                            <label >Set Password</label>
                            <input type="password" placeholder=" Set your password"/>
                            </div>
                           
                            <div className="input-box">
                            <label >Confirm Password</label>
                            <input type="password" placeholder="Confirm your password"/>
                            </div>
                            
                            
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