import React, { useState } from 'react';
import logo from '/images/logo.png';
import './Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        <img src={logo} alt="T3 Enterprise Logo" className="logo" />
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#clients" className="nav-link">Our Clients</a>
          <a href="#services" className="nav-link">Our Services</a>
          <a href="#offerings" className="nav-link">Our Offerings</a> {/* New Link */}
          <a href="#vision" className="nav-link">Our Vision</a> {/* New Link */}
          <a href="#founder" className="nav-link">Our Founder</a> {/* New Link */}
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
