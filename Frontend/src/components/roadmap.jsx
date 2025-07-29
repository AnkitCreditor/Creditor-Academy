import React from 'react';
import { motion } from 'framer-motion';
import roadmapImg from '../assets/logo_roadmap.png';
import Banner from '../assets/roadmap-banner.png';

import FirstStep from '../components/roadmap1';
import SecondStep from '../components/roadmap2';

const RoadmapSeries = () => {
  return (
    <section style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: 'linear-gradient(to bottom, #f9fafb 0%, #f0f9ff 100%)',
      paddingBottom: '80px'
    }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          height: '420px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(236,245,255,0.85) 50%, rgba(255,255,255,0.9) 100%)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 20px', maxWidth: '800px' }}>
          <motion.h1 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '24px',
              lineHeight: 1.2
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The <span style={{ color: '#2563eb' }}>Roadmap</span> Series
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'inline-block' }}
          >
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(8px)',
              padding: '12px 24px',
              borderRadius: '9999px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <span style={{ color: '#374151' }}>Only </span>
              <motion.span 
                style={{ color: '#2563eb' }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
              >
                $49
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 20px',
        paddingTop: '64px'
      }}>
        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            minHeight: '240px'
          }}>
            <motion.img
              src={roadmapImg}
              alt="Atlas Logo"
              style={{ width: '160px', height: 'auto' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          
          <div style={{
            padding: '40px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '20px',
              lineHeight: 1.3
            }}>
              Start Your Journey to <span style={{ color: '#2563eb' }}>Private Wealth</span>, Legal Freedom & Credit Power
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: '#4b5563',
              marginBottom: '24px',
              lineHeight: 1.6
            }}>
              The Roadmap Series by Paulmicheal, founder of Creditor Academy, is your gateway to exiting the public system, restoring your private status, and building real businesses using the power of credit and trust law.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {['Sovereignty', 'Credit Mastery', 'Trust Operations', 'Private Commerce'].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial/Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            marginTop: '64px'
          }}
        >
          <div style={{
            padding: '48px 20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 20px',
              color: 'white',
              opacity: 0.5
            }}>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <p style={{
              fontSize: '1.25rem',
              color: 'white',
              fontWeight: 500,
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              "Whether you're just getting started or ready to scale, this series gives you the full blueprint — from sovereignty and credit to trust operations and private commerce."
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '64px'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '24px'
          }}>
            Ready to Transform Your Financial Future?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)' 
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              fontWeight: 700,
              borderRadius: '9999px',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            Get The Roadmap Series Now
          </motion.button>
        </motion.div>
      </div>

      <FirstStep />
      <SecondStep />

    </section>

  );
};

export default RoadmapSeries;