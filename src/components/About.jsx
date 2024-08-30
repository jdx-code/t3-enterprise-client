import React from 'react';

function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>About Us</h2>
      <p>
        Welcome to T3 Enterprise! <br />
        At T3 Enterprise, we are committed to providing comprehensive safety and
        security solutions for a wide range of industries. With a strong
        foundation dating back to 2017, we have evolved from trading safety
        products to becoming a holistic service provider. Our journey has been
        fueled by dedication, expertise, and a drive to ensure the safety and
        well-being of individuals, properties, and businesses. 
      </p>
    </section>
  );
}

const styles = {
  about: {
    padding: '50px 20px',
  },
  heading: {
    color: '#ffcc00',
    fontSize: '36px',
  },
};

export default About;
