import React, { useState } from 'react';
import { FaCreditCard, FaChartLine, FaShieldAlt, FaHandHoldingUsd, FaBuilding, FaLightbulb, FaArrowRight, FaCheck } from 'react-icons/fa';
import { FiCreditCard, FiDollarSign, FiLayers, FiUserCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BusinessCreditMastery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const businessIdeas = [
    { icon: <FiCreditCard size={24} />, title: "Car Rental", subtitle: "Turo, HyreCar" },
    { icon: <FaBuilding size={24} />, title: "Airbnb", subtitle: "Rental Arbitrage" },
    { icon: <FiDollarSign size={24} />, title: "Merchant Services", subtitle: "Payment Processing" },
    { icon: <FiUserCheck size={24} />, title: "Coaching", subtitle: "Consulting" },
    { icon: <FiLayers size={24} />, title: "E-commerce", subtitle: "Dropshipping" },
    { icon: <FaLightbulb size={24} />, title: "Cleaning Services", subtitle: "Residential/Commercial" }
  ];

  const features = [
    {
      icon: <FaCreditCard />,
      title: "Build $200K+ Business Credit",
      description: "No SSN. No PG. No Banks. Financial sovereignty through UBOT Trusts",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <FaChartLine />,
      title: "Fix Personal Credit",
      description: "Our 'I Want Remedy Now' system lawfully disputes your public credit file",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <FaShieldAlt />,
      title: "Private Merchant Processing",
      description: "No banks, no KYC, no shutdowns - accept payments privately",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "0% APR Funding",
      description: "Stack funding at 0% APR to launch and scale your business fast",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.hero}
      >
        <h1 style={styles.heroTitle}>Unlock <span style={styles.highlight}>$200K+</span> in Business Credit</h1>
        <p style={styles.heroSubtitle}>Financial sovereignty without personal guarantees or banks</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.ctaButton}
        >
          Book Your $49 Roadmap Session <FaArrowRight style={{ marginLeft: 8 }} />
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What You'll Master</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                ...styles.featureCard,
                transform: hoveredCard === index ? 'translateY(-10px)' : 'none',
                boxShadow: hoveredCard === index ? '0 15px 30px rgba(0,0,0,0.12)' : '0 5px 15px rgba(0,0,0,0.08)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
              <div style={styles.featureImage}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Ideas Section */}
      <div style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <h2 style={styles.sectionTitle}>Launch These Businesses Using Business Credit</h2>
        <div style={styles.ideasGrid}>
          {businessIdeas.map((idea, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              style={styles.ideaCard}
            >
              <div style={styles.ideaIcon}>{idea.icon}</div>
              <h3 style={styles.ideaTitle}>{idea.title}</h3>
              <p style={styles.ideaSubtitle}>{idea.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={styles.ctaSection}
      >
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready for Financial Sovereignty?</h2>
          <p style={styles.ctaText}>Book your $49 Roadmap Session today and take the first step toward unlocking business credit</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={styles.ctaButton}
          >
            Contact Us Now <FaArrowRight style={{ marginLeft: 8 }} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    color: '#333',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
    borderRadius: 16,
    marginBottom: 60,
    color: 'white',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: 800,
    marginBottom: 20,
    lineHeight: 1.2,
  },
  highlight: {
    color: '#ffde59',
    textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    marginBottom: 30,
    opacity: 0.9,
  },
  ctaButton: {
    background: '#ffde59',
    color: '#333',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: 50,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '60px 0',
    marginBottom: 40,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: 50,
    color: '#2c3e50',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 30,
  },
  featureCard: {
    background: 'white',
    borderRadius: 12,
    padding: 30,
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 300,
  },
  featureIcon: {
    fontSize: '2rem',
    color: '#6e8efb',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: 15,
    color: '#2c3e50',
  },
  featureDescription: {
    color: '#666',
    lineHeight: 1.6,
    marginBottom: 20,
  },
  featureImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,
    zIndex: 0,
  },
  ideasGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 20,
  },
  ideaCard: {
    background: 'white',
    borderRadius: 12,
    padding: 25,
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  ideaIcon: {
    fontSize: '2rem',
    color: '#a777e3',
    marginBottom: 15,
  },
  ideaTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: 5,
    color: '#2c3e50',
  },
  ideaSubtitle: {
    color: '#666',
    fontSize: '0.9rem',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
    borderRadius: 16,
    padding: '60px 40px',
    marginBottom: 60,
    color: 'white',
  },
  ctaContent: {
    maxWidth: 800,
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: 20,
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: 30,
    opacity: 0.9,
    lineHeight: 1.6,
  },
};

export default BusinessCreditMastery;