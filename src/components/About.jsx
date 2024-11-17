import React from "react";

function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>Welcome to T3 Enterprise</h2>
      <p style={styles.content}>
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
    padding: "120px 20px 50px",
    textAlign: "center", // Centers all text in the section
  },
  heading: {
    color: "#ffcc00",
    fontSize: "48px", // Increased font size for the heading
    fontWeight: "bold",
    marginBottom: "20px",
  },
  content: {
    color: "#333",
    fontSize: "18px", // Standard font size for paragraph
    lineHeight: "1.6", // Better readability
    textAlign: "justify", // Optional: Aligns the paragraph neatly
  },
};

export default About;
