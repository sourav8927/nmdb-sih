import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutus.css";
import Abt_content from "../Abt-content/Abt_content";
function Aboutus()
{
    return(
    <>
     <center><h1 className="abt-us">About Us</h1></center>
      <Abt_content></Abt_content>
      <Abt_content></Abt_content>
    </>
    )
}
export default Aboutus;