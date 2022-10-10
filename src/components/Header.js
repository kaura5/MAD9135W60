import React from 'react';
import logo from '.././logo.svg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Context and React Router</p>
        </header>
    )
}

export default Header;