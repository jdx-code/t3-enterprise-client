// import React from 'react';
// import logo from '/images/logo.png';

// function Header() {
//   return (
//     <header style={styles.header}>
//       <div style={styles.navbar}>
//         <img src={logo} alt="T3 Enterprise Logo" style={styles.logo} />
//         <nav>
//           <a href="#about" style={styles.navLink}>About Us</a>
//           <a href="#clients" style={styles.navLink}>Our Clients</a>
//           <a href="#services" style={styles.navLink}>Our Services</a>
//           <a href="#contact" style={styles.navLink}>Contact Us</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// const styles = {
//   header: {
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '10px 20px',
//     textAlign: 'center',
//   },
//   navbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   logo: {
//     maxWidth: '100px',
//   },
//   navLink: {
//     color: '#fff',
//     textDecoration: 'none',
//     marginLeft: '20px',
//     fontSize: '18px',
//   },
// };

// export default Header;


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

