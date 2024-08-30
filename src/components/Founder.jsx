import React from 'react';

function Founder() {
  return (
    <section id="founder" style={styles.founder}>
      <h2 style={styles.heading}>Our Founder</h2>
      <p>
      <p>Meet <strong>Mr. Nilotpal Talukdar</strong>, the driving force behind T3 Enterprise. With his profound expertise in technical, managerial, and functional domains, Mr. Talukdar has led the firm with unwavering dedication. His versatile approach and commitment to excellence have been instrumental in shaping T3 Enterprise's journey.</p> 
      </p>
    </section>
  );
}

const styles = {
  founder: {
    padding: '50px 20px',
  },
  heading: {
    color: '#ffcc00',
    fontSize: '36px',
  },
};

export default Founder;
