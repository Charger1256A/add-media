import React from 'react';
import './Header.css';
import logo from '/Users/adityaram/Documents/add-media/src/assets/logo.png';

function Header() {
    return (
        <div class="header">
            <div className="header__left">
            <img
                className="header__logo"
                src={logo}
                alt="logo"
                />
            </div>
        </div>
    )
}

export default Header
