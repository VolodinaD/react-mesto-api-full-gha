import React from 'react';
import '../index.css';
import logo from '../images/logo/logo-header.svg';

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
            <div className="header__container">
                <p className="header__email">{props.email}</p>
                <div>{props.children}</div>
            </div>
        </header>
    );
}

export default Header; 