import React from 'react';
import visionImage from '/images/vision.jpg';

function Vision() {
  return (
    <section id="vision" style={styles.vision}>
      <h2 style={styles.heading}>Our vision</h2>
      <p>At T3 Enterprise, our vision is to be a beacon of safety and security solutions, setting the standard for quality, innovation, and reliability. We strive to be at the forefront of technology and service, ensuring that our clients receive the best-in-class solutions for their safety needs.</p>
      <p>Thank you for choosing T3 Enterprise. Your safety is our priority, and we are here to serve you every step of the way.</p>      
      <img src={visionImage} alt="Fire Fighting Equipment" style={styles.visionImage} />

      {/* <p><strong>Address : Paltan Bazar, Opp. SAI Gate, Near Nepali Mandir, Guwahati-08, Assam</strong></p> */}
    </section>
  );
}

const styles = {
  vision: {
    padding: '50px 20px',
    fontSize: "18px", // Standard font size for paragraph
    lineHeight: "1.6", // Better readability
    textAlign: "justify", // Optional: Aligns the paragraph neatly
  },
  heading: {
    color: '#ffcc00',
    fontSize: '36px',
    textAlign: "center",
  },
  visionImage: {
    maxWidth: '100%',
  },
};

export default Vision;
