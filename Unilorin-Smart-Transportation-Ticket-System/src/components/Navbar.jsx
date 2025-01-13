import React from 'react';
import logo from '../assets/unilorin-logo.png';

function Navbar() {
return (
    <div>
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo flex align-middle">
                        <img src={logo} style={{ height: "50px", width: "auto" }} className="pe-2" alt=""/>
                        <h1 className="hey" style={{ paddingTop : "14px" }}><a href=""><c className="unilorin">University Of Ilorin</c></a></h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="">Login</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>  
    </div>
)
}

export default Navbar;