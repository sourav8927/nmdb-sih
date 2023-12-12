import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
// import LoginPng from "./img/login.png";

function Header() {
  return (
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <Link to="/maps">Dashboard</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="search-login-user">
        <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
        </div>
          <div className="login-icons">
            <Link to="/login" className="login-icon">
              <img src="img/login.png" alt="Login" />
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
