import React from 'react';

function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <p>Contact Us: 9864278059 | T3enterprise01@gmail.com</p>
      <p>Address : Paltan Bazar, Opp. SAI Gate, Near Nepali Mandir, Guwahati-08, Assam</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '50px',
  },
};

export default Footer;
