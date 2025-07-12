import React from 'react';

const HowItWorks = () => {
  return (
    <section style={styles.section}>
      <div style={styles.placeholderBox}>
        <h2 style={styles.heading}>How It Works</h2>
        <p style={styles.subtext}>This area is reserved for a future explanation of how the platform works.</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    height: '80vh',
    backgroundColor: '#111827', // Tailwind's gray-900
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderBox: {
    width: '90%',
    maxWidth: '960px',
    border: '4px dashed #6B7280', // Tailwind's gray-500
    borderRadius: '16px',
    padding: '48px',
    textAlign: 'center',
    color: '#F9FAFB', // Tailwind's gray-100
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  subtext: {
    fontSize: '1.125rem',
    color: '#9CA3AF', // Tailwind's gray-400
  },
};

export default HowItWorks;
