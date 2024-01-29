import "./Header.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo/logo1-light.png";
import logoD from "../../assets/logo/logo1.png"
import { RiLoginCircleFill } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";

function Header(props) {

    // const [showMenu, setShowMenu] = useState(false);
    // const hideMenu = () => {
    //     setShowMenu(false);
    // }
    // const isLoggedIn = false;

    return (
        <>
            <header className="header">
                <div className="mini-header">
                    <div className="mini-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="zoom-lang">
                        <div className="zoom">
                            <button title="Increase Font Size">+A</button>
                            <button title="Default Font Size">A</button>
                            <button title="Decrease Font Size">-A</button>
                        </div>
                        <div className="lang">
                            <button className="bigbutton">Language</button>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="logo">
                        <img className="logo-img" src={logoD} alt="Logo" />
                        <div className="name-tag">
                            <h3>Kendriya Nasha Mukti Portal</h3>
                            <p>A step towards Addiction free India</p>
                        </div>
                    </div>
                    {/* <nav className="nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/locateCentre">Locate Center</Link></li>
                            <Link to="/Services"><li><a href="#">Services</a></li></Link>
                            <li><Link to="/Dashboard">Dashboard</Link></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav> */}
                    <div className="search-login-user">
                        <div className="nav-helpline">
                            <h3>Helpline Number: +91 1800 2560 880</h3>
                        </div>
                        <div>
                            {
                                props.isLoggedIn ?
                                    <>
                                        <Link to = '/'>
                                            <div className="login-icon">
                                                LOGOUT &nbsp;
                                                <AiOutlineLogin />
                                            </div>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/Cuser'>
                                            <div className="login-icon">
                                                LOGIN &nbsp;
                                                <RiLoginCircleFill />
                                            </div>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>


            </header>
        </>
    )
}

Header.defaultProps = {
    isLoggedIn : false
};


export default Header;

