import React from 'react';
import { motion } from 'framer-motion';

const features = [
  '24 Live Classes with Coach Mr. Rowland',
  '52 On-Demand Studio Lessons',
  'Powerful World-Class LMS',
  'Personal Studio Avatar to Guide You',
  'Downloadable Trust Templates + UCC Forms',
  'Real-Time Chatbot',
  'Law Comics + Game-Based Quizzes',
  'Private ID'
];

const EverythingYouGet = () => {
  return (
    <>
      {/* Video Embed */}
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          margin: '40px auto',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://www.youtube.com/embed/o_fQSOM2dtw"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="SPC Video"
          ></iframe>
        </div>
      </div>

      {/* Everything You Get Section */}
      <section
        style={{
          padding: '60px 5%',
          background: '#fff',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: 'auto',
            background: 'linear-gradient(to bottom right, #f0f4f8, #ffffff)',
            padding: '60px 40px',
            borderRadius: 25,
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.4rem',
              color: '#1a202c',
              fontWeight: 'bold',
              marginBottom: 15
            }}
          >
            <span style={{ color: '#0056b3' }}>Everything You Get</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#4b5563',
              fontSize: '1.1rem',
              marginBottom: 50
            }}
          >
            A fully immersive learning experience to help you lawfully reclaim your standing.
          </p>

          {/* Grid of Features */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 25
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#fff',
                  padding: '22px 20px',
                  borderRadius: 16,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default'
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 12px 35px rgba(0,0,0,0.08)'
                }}
              >
                {/* Icon (can be replaced with real ones) */}
                <div
                  style={{
                    flexShrink: 0,
                    background: '#e8f0fa',
                    padding: 10,
                    borderRadius: 12
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0056b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9 14s1.5 2 3 2 3-2 3-2"></path>
                    <path d="M9 9h.01"></path>
                    <path d="M15 9h.01"></path>
                  </svg>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1a2e55'
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EverythingYouGet;
