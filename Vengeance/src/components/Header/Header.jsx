import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="nasha-header">
        <div className="logo">
            <img src="logo.png" alt="Logo" />
        </div>
        <nav className="nav-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><Link to="/maps">Dashboard</Link></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="search-login-user">
            <div className="login-user-icons">
                <Link to="/login" className="login-icon"><img src="login-icon.png" alt="Login"/></Link>
                <a href="#" className="user-icon"><img src="user-icon.png" alt="User"/></a>
            </div>
        </div>
    </header>
    )
}
export default Header;
