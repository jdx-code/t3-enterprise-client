import React from 'react';
import visionImage from '/images/services.png';

function Vision() {
  return (
    <section id="vision" style={styles.vision}>
      <h2 style={styles.heading}>Our vision</h2>
      <p>At T3 Enterprise, our vision is to be a beacon of safety and security solutions, setting the standard for quality, innovation, and reliability. We strive to be at the forefront of technology and service, ensuring that our clients receive the best-in-class solutions for their safety needs.</p>
      <p>Thank you for choosing T3 Enterprise. Your safety is our priority, and we are here to serve you every step of the way.</p>
      <p><strong>Rehabari, Guwahati</strong></p>
      <img src={visionImage} alt="Fire Fighting Equipment" style={styles.visionImage} />
    </section>
  );
}

const styles = {
  vision: {
    padding: '50px 20px',
  },
  heading: {
    color: '#ffcc00',
    fontSize: '36px',
  },
  visionImage: {
    maxWidth: '100%',
  },
};

export default Vision;
