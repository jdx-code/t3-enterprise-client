import React from "react";

// Import client logos (replace these paths with your actual logo image paths)
import client1 from "/images/clients/01.jpeg";
import client2 from "/images/clients/02.jpeg";
import client3 from "/images/clients/03.jpeg";
import client4 from "/images/clients/04.jpeg";
import client5 from "/images/clients/05.jpeg";
import client6 from "/images/clients/06.jpeg";
import client7 from "/images/clients/07.jpeg";
import client8 from "/images/clients/08.jpeg";
import client9 from "/images/clients/09.jpeg";
import client10 from "/images/clients/10.jpeg";
import client11 from "/images/clients/11.jpeg";
import client12 from "/images/clients/12.jpeg";
import client13 from "/images/clients/13.jpeg";
import client14 from "/images/clients/14.jpeg";
import client15 from "/images/clients/15.jpeg";
import client16 from "/images/clients/16.jpeg";
import client17 from "/images/clients/17.jpeg";
import client18 from "/images/clients/18.jpeg";

function Clients() {
  // Array of client logos
  const clientLogos = [
    { id: 1, name: "", logo: client1 },
    { id: 2, name: "", logo: client2 },
    { id: 3, name: "", logo: client3 },
    { id: 4, name: "", logo: client4 },
    { id: 5, name: "", logo: client5 },
    { id: 6, name: "", logo: client6 },
    { id: 7, name: "", logo: client7 },
    { id: 8, name: "", logo: client8 },
    { id: 9, name: "", logo: client9 },
    { id: 10, name: "", logo: client10 },
    { id: 11, name: "", logo: client11 },
    { id: 12, name: "", logo: client12 },
    { id: 13, name: "", logo: client13 },
    { id: 14, name: "", logo: client14 },
    { id: 15, name: "", logo: client15 },
    { id: 16, name: "", logo: client16 },
    { id: 17, name: "", logo: client17 },
    { id: 18, name: "", logo: client18 },
  ];

  return (
    <section id="clients" style={styles.clients}>
      <h2 style={styles.heading}>Our Clients</h2>
      <div style={styles.logoContainer}>
        {clientLogos.map((client) => (
          <div key={client.id} style={styles.logoItem}>
            <img
              src={client.logo}
              alt={client.name}
              title={client.name}
              style={styles.logoImage}
            />            
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  
  clients: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
  },

  heading: {
    color: "#ffcc00",
    fontSize: "36px",
    marginBottom: "20px",
  },

  logoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },

  logoItem: {
    display: "flex",
    justifyContent: "center",   // vertical center
    alignItems: "center",       // horizontal center
    width: "160px",
    height: "120px",            // fixed height for perfect centering
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },

  logoImage: {
    maxWidth: "100%",
    maxHeight: "80px",
    objectFit: "contain",
  }, 

  logoItemHover: {
    transform: "scale(1.05)",
  },

  logoName: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  },
};

export default Clients;
