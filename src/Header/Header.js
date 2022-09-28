import React from 'react';
import logo from '../logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div className="header d-flex align-items-center">
             <img src={logo} alt=""/>
             <h1>BODY-BURN-CLUB</h1>
        </div>
    );
};

export default Header;