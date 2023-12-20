import "./NgoDashBoard.css"
import { Link } from "react-router-dom";

function NgoDashBoard(){
  
   return(
    <div className="dashbody">
    <div className="dashupperbody">
       <p>WELCOME Nasha Mukti Kendra</p>
    </div>
    <div className="dashlowerbody">
       <div className="outercontainer">
       <div className="container-c1">
          <Link to="/NgoDashActions"><div className="eliment"><button>Add</button> </div></Link>
          <div className="eliment"><Link to="/testServer"><button style={{backgroundColor:"orange"}}>Test</button></Link></div>
          <div className="eliment"><button>Delete</button> </div>
       </div>
       <div className="container-c2">
          <div className="eliment"><button>Track</button> </div>
          <div className="eliment"><button>Event</button> </div>
          <div className="eliment"><button>Gallery</button> </div>
       </div>
       <div className="container-c3">
          <div className="eliment"><button>Profile</button> </div>
          <div className="eliment"><button>Feedback</button> </div>
          <div className="eliment"><button>Under Construction</button> </div>
       </div>
       </div>
    </div>
 </div>
   )
}
export default NgoDashBoard;