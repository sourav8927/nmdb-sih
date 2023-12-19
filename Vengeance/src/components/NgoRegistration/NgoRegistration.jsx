import "./NgoRegistration.css"
import { FcGoogle } from "react-icons/fc";
import { WiDirectionUpRight } from "react-icons/wi";

function NgoRegistration(){
    return(
        <div className="wrapper">
        <div className="title">
           NGO Registration
        </div>
        <div className="form">
           <div className="inputfield">
              <label>NGO Name</label>
              <input type="text" className="input" />
           </div>  
           <div className="inputfield">
            <label>Ngo ID</label>
            <input type="text" className="input" />
         </div>  
           <div className="inputfield">
              <label>Password</label>
              <input type="password" className="input" />
           </div>  
          <div className="inputfield">
              <label>Confirm Password</label>
              <input type="password" className="input" />
           </div> 
           
            <div className="inputfield">
              <label>Email Address</label>
              <input type="text" className="input"/>
           </div> 
          <div className="inputfield">
              <label>Phone Number</label>
              <input type="text" className="input"/>
           </div> 
          <div className="inputfield">
              <label>Address</label>
              <textarea className="textarea"></textarea>
           </div> 
          <div className="inputfield">
              <label>Postal Code</label>
              <input type="text" className="input"/>
           </div> 
          <div className="inputfield terms">
              <label className="check">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <p>Agreed to terms and conditions</p>
           </div> 
          <div className="inputfield">
            <input type="submit" value="Register" className="btn"/>
          </div>
        </div>
    </div>	 
    )
}
export default NgoRegistration;