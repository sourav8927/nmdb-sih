import "./Header.css"
function Header(){
    return(
        <header className="nasha-header">
        <div className="logo">
            <img src="logo.png" alt="Logo" />
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
                <a href="#" className="login-icon"><img src="login-icon.png" alt="Login"/></a>
                <a href="#" className="user-icon"><img src="user-icon.png" alt="User"/></a>
            </div>
        </div>
    </header>

    )
}
export default Header;