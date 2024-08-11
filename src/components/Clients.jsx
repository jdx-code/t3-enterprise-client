import React from 'react';
import clientsImage from '/images/clients.png';

function Clients() {
  return (
    <section id="clients" style={styles.clients}>
      <h2 style={styles.heading}>Our Clients</h2>
      <img src={clientsImage} alt="Clients Logos" style={styles.clientsImage} />
    </section>
  );
}

const styles = {
  clients: {
    padding: '50px 20px',
  },
  heading: {
    color: '#ffcc00',
    fontSize: '36px',
  },
  clientsImage: {
    maxWidth: '100%',
  },
};

export default Clients;
