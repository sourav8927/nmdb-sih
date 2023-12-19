import "./Header.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
// import LoginPng from "./img/login.png";

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const hideMenu = () => {
        setShowMenu(false);
    }

    return (
        <>
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/locateCentre">Locate Center</Link></li>
                            <li><a href="#">Services</a></li>
                            <li><Link to="/Dashboard">Dashboard</Link></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="search-login-user">
                        <div className="nav-helpline">
                            <h3>Helpline Number: +91 1800 2560 880</h3>
                        </div>
                        <div className="login-icons">
                            <span>
                            </span>
                            <Link to='Cuser' className="login-icon"><img src="img/login.png" alt="Login" /></Link>
                            {/* <a href="#" className="user-icon"><img src="user-icon.png" alt="User"/></a> */}
                        </div>
                    </div>
                </div>


            </header>
        </>
    )
}
export default Header;
