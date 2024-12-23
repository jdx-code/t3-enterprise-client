import React from 'react';
import offeringsImage from '/images/offerings.jpg';

function Offerings() {
  return (
    <section id="offerings" style={styles.offerings}>
      <h2 style={styles.heading}>Our Offerings</h2>      
      <p><strong>Electrical and Civil Works:</strong> From electrical installations to civil construction, T3 Enterprise offers a comprehensive range of services. Our commitment to quality ensures that every project is executed seamlessly.</p>
      <p><strong>Hygiene and Health Safety:</strong> With an unwavering commitment to public health, we have diversified into hygiene-related products. Our offerings include sanitizers, disinfectant cleaners, and hospital equipment, serving both residential and institutional needs.</p>
      <img src={offeringsImage} alt="Fire Fighting Equipment" style={styles.offeringsImage} />
    </section>
  );
}

const styles = {
  offerings: {
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
  offeringsImage: {
    maxWidth: '100%',
  },
};

export default Offerings;
