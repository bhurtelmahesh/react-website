import React from 'react';
import logo from './react.png';



const Header = () => {
    return(
    <header>
        <nav className="nav">
            <img src={logo}  className="nav-logo" alt="React Logo" />
            <ul className="nav-items">
                <li><a href="/">Pricing</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>       
        </nav>
    </header>
    );
}

export default Header;