import "./NgoDashBoard.css"
import { Link } from "react-router-dom";

function NgoDashBoard(){
  
   return(
    <div className="dashbody">
    <div className="dashupperbody">
       <p>WELCOME USER</p>
    </div>
    <div className="dashlowerbody">
       <div className="outercontainer">
       <div className="container-c1">
          <Link to="/NgoDashActions"><div className="eliment"><p>add</p> </div></Link>
          <div className="eliment"><p>update</p> </div>
          <div className="eliment"><p>delete</p> </div>
       </div>
       <div className="container-c2">
          <div className="eliment"><p>track</p> </div>
          <div className="eliment"><p>event</p> </div>
          <div className="eliment"><p>galary</p> </div>
       </div>
       <div className="container-c3">
          <div className="eliment"><p>profile</p> </div>
          <div className="eliment"><p>feedback</p> </div>
          <div className="eliment"><p>3</p> </div>
       </div>
       </div>
    </div>
 </div>
   )
}
export default NgoDashBoard;