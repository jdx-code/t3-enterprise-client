import React from 'react';
import servicesImage from '/images/services.jpg';

function Services() {
  return (
    <section id="services" style={styles.services}>
      <h2 style={styles.heading}>Our Services</h2>
      <p>
        <strong>Industrial Safety Products:</strong><br />
        Our expertise lies in offering a diverse array of industrial safety
        products, meticulously curated to meet the specific needs of our
        clients. From personal protective equipment to advanced safety gear, we
        have you covered.
      </p>
      <p>
        <strong>Fire Fighting Systems:</strong><br />
        Preventing and responding to fire hazards is our priority. Our
        state-of-the-art fire-fighting systems are designed to safeguard lives
        and properties by providing early detection and rapid response
        solutions.
      </p>
      <p>
        <strong>Water Treatment Solutions:</strong><br />
        T3 Enterprise extends its services to water treatment solutions,
        including WTP and ETP systems. We believe in sustainable practices and
        aim to contribute to a cleaner environment.
      </p>
      <p>
        <strong>Fabrication and Engineering:</strong><br />
        Our skilled team excels in fabrication and engineering projects. We take
        pride in offering quality solutions, be it structural fabrication or
        specialized engineering requirements.
      </p>
      <img src={servicesImage} alt="Fire Fighting Equipment" style={styles.servicesImage} />
    </section>
  );
}

const styles = {
  services: {
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
  servicesImage: {
    maxWidth: '100%',
  },
};

export default Services;
