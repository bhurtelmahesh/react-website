import React from 'react';


const Header = () => {
    return(
    <header>
        <nav className="nav">
            <img src="./react.png"  className="nav-logo" alt="React Logo" />
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