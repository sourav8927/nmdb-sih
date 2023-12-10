import "./Header.css"
import React from "react";
function Header(){
    return(
        
        <header className="header">
            <div className="mini-header">
            <div className="mini-logo">
            <img src="logo.png" alt="Logo" />
        </div>
            <div className="zoom-lang">
                <div className="zoom">
                <button>+A</button>
                <button>A</button>
                <button>-A</button>
                </div>
                <div className="lang">
                    <button className="bigbutton">Language</button>
                </div>
            </div>
            </div>
        <div className="main-header">
        <div className="logo">
            <img className="logo-img" src="img/logo.png" alt="Logo" />
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="search-login-user">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="login-user-icons">
                <a href="#" className="login-icon"><img className="login-img" src="img/login.png" alt="Login"/></a>
                {/* <a href="#" className="user-icon"><img src="user-icon.png" alt="User"/></a> */}
            </div>
        </div>
        </div>
    </header>

    )
}
export default Header;