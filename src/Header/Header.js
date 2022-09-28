import React from 'react';
import logo from '../logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div className="header d-flex align-items-center mb-4">
             <img src={logo} alt=""/>
             <h3>BODY-BURN-CLUB</h3>
        </div>
    );
};

export default Header;