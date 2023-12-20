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
          <Link to="/NgoDashActions"><div className="eliment"><button>add</button> </div></Link>
          <div className="eliment"><button>update</button> </div>
          <div className="eliment"><button>delete</button> </div>
       </div>
       <div className="container-c2">
          <div className="eliment"><button>track</button> </div>
          <div className="eliment"><button>event</button> </div>
          <div className="eliment"><button>galary</button> </div>
       </div>
       <div className="container-c3">
          <div className="eliment"><button>profile</button> </div>
          <div className="eliment"><button>feedback</button> </div>
          <div className="eliment"><button>under construction</button> </div>
       </div>
       </div>
    </div>
 </div>
   )
}
export default NgoDashBoard;