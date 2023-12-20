import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Ashok from "../../assets/logo/ashok_stombh.png";
import Logo from "../../assets/logo/logo1.png"
import Appimg from "../../assets/images/Nmba_app.jpg";
import { Link } from "react-router-dom";
function Footer()
{
    return(
       
        <footer className="footer-section">
        <div className="container">
           
                
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo-box">
                                <div className="footer-logo">
                                    <a href="#"><img src={Ashok} className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-logo">
                                    <a href="#"><img src={Logo} className="img-fluid " alt="logo" /></a>
                                </div>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/locateCentre">Locate Center</Link></li>
                               <li><Link to="">Servies</Link></li>
                                <li><Link to="/Dashboard">Dashboard</Link></li>
                               <li><Link to="">Contact</Link></li>
                               <li><Link to="">About Us</Link></li>
                               <li><Link to="">Socials</Link></li>
                               <li><Link to="">FAQ</Link></li>

                              
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            
                            
                            <div className="subscribe-form">
                               
                                <img src={Appimg} alt="app-image" />
                    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
       
    )
}

export default Footer;