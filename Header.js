
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Chrome</div>
      <nav className="nav">
        <a href="#">Features</a>
        <a href="#">Privacy</a>
        <a href="#">Download</a>
      </nav>
    </header>
  );
}

export default Header;
