import React, { useState } from 'react';
import { FaGamepad, FaMedal, FaUsers, FaChevronRight, FaPlay, FaStar, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GBanner from '../assets/game_banner.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const GameBanner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={{ fontFamily: 'Poppins, sans-serif', overflow: 'hidden' }}>
      {/* Enhanced Gamified Sovereignty Academy Section */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          padding: '100px 6%',
          background: 'linear-gradient(135deg, #c8ddfa 0%, #9abcd2 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '5%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(0, 86, 179, 0.1)',
          borderRadius: '50%',
          filter: 'blur(15px)'
        }}></div>

        <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(0, 86, 179, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)',
              padding: '12px 30px',
              borderRadius: '30px',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              color: '#0056b3',
              letterSpacing: '1px'
            }}>
              INTERACTIVE LEARNING
            </span>
          </motion.div>
          
          <h2 style={{ 
            fontSize: '3rem', 
            color: '#003772', 
            fontWeight: 800, 
            marginBottom: '15px',
            lineHeight: '1.2'
          }}>
            The First-Ever<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #0056b3, #007BFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Gamified Sovereignty Academy</span>
          </h2>
          
          <p
            style={{
              fontSize: '1.2rem',
              color: '#2c3e50',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            No more boring slideshows — just real simulation games, XP, documents,
            badges, and fun learning through action!
          </p>
        </div>

        {/* Enhanced Grid Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '20px',
          }}
        >
          {[
            {
              title: 'Real Simulation Games',
              desc: 'Experience learning by playing with engaging, real-world legal scenarios.',
              icon: <FaGamepad size={30} color="#fff" />,
              color: 'linear-gradient(135deg, #0056b3, #007BFF)',
              hoverColor: 'linear-gradient(135deg, #004896, #0062cc)'
            },
            {
              title: 'Earn XP & Unlock Badges',
              desc: 'Answer questions to unlock badges, contracts, docs & exclusive templates.',
              icon: <FaMedal size={30} color="#fff" />,
              color: 'linear-gradient(135deg, #ff7e29, #ffa057)',
              hoverColor: 'linear-gradient(135deg, #e57225, #ff944c)'
            },
            {
              title: 'Interactive Experience',
              desc: 'Engage with sound, effects, leaderboards, and multiplayer challenges.',
              icon: <FaUsers size={30} color="#fff" />,
              color: 'linear-gradient(135deg, #2ecc71, #27ae60)',
              hoverColor: 'linear-gradient(135deg, #29b765, #219652)'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '40px 30px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease-in-out',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                color: '#2c3e50',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Animated background element */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: hoveredCard === index ? '100%' : '5px',
                background: item.color,
                transition: 'height 0.4s ease',
                zIndex: 0,
                opacity: 0.1
              }}></div>
              
              {/* Icon Wrapper */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                style={{
                  marginBottom: '25px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: item.color,
                  boxShadow: '0 8px 20px rgba(0, 86, 179, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginInline: 'auto',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0 auto',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '20px'
                }}
              >
                {item.desc}
              </p>
              
              {/* Learn more link */}
              <motion.div 
                whileHover={{ x: 5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#0056b3',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'pointer'
                }}
              >
                Learn more <FaChevronRight size={12} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Enhanced Game of the Month */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          textAlign: 'center',
          padding: '80px 6%',
          background: 'linear-gradient(to bottom, #f8fbff, #ffffff)',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', 
          background: 'rgba(0, 86, 179, 0.1)', padding: '8px 20px', borderRadius: '20px', 
          marginBottom: '15px' }}>
          <FaTrophy color="#0056b3" size={16} />
          <span style={{ color: '#0056b3', fontWeight: 600, fontSize: '0.9rem' }}>
            FEATURED GAME
          </span>
        </div>
        
        <h2 style={{ color: '#0056b3', fontSize: '2.8rem', marginBottom: '10px', fontWeight: 800 }}>
          <span style={{ color: 'rgb(0, 0, 0)' }}>Game of the Month:</span>{' '}
          <span style={{ 
            color: 'rgb(35, 111, 161)',
            background: 'linear-gradient(135deg, #236fa1, #0056b3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Creditor Football</span>
        </h2>
        
        <p style={{ color: 'rgba(105, 111, 111, 1)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Play your way to private power with football-themed quizzes and XP boosts. 
          Score legal knowledge goals and climb the leaderboard!
        </p>        
      </motion.div>

      {/* Enhanced Hero Promo */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          position: 'relative',
          background: `linear-gradient(rgba(10, 20, 40, 0.85), rgba(10, 20, 40, 0.9)), url(${GBanner}) center center / cover no-repeat`,
          padding: '120px 5% 180px',
          color: 'white',
          textAlign: 'left',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '500px',
            height: '500px',
            border: '2px solid rgba(0, 186, 255, 0.1)',
            borderRadius: '50%',
          }}
        />
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '-40%',
            left: '-10%',
            width: '400px',
            height: '400px',
            border: '2px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
          }}
        />

        {/* Left Dots */}
        <div style={{ position: 'absolute', top: '40px', left: '30px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 8px)', gap: '8px' }}>
            {[...Array(4)].map((_, idx) => (
              <motion.div 
                key={`left-dot-${idx}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                style={{ width: '8px', height: '8px', background: '#a8b1c1', borderRadius: '50%' }} 
              />
            ))}
          </div>
        </div>

        {/* Right Dots */}
        <div style={{ position: 'absolute', top: '40px', right: '20px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 8px)', gap: '8px' }}>
            {[...Array(6)].map((_, idx) => (
              <motion.div 
                key={`right-dot-${idx}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                style={{ width: '8px', height: '8px', background: '#00baff', borderRadius: '50%' }} 
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '3px', background: '#00baff' }}></div>
            <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', color: '#00baff' }}>
              NEW RELEASE
            </span>
          </div>
          
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '15px', color: '#00baff' }}>
            CREDITOR<br />FOOTBALL
          </h4>
          
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: '1.1', marginBottom: '25px' }}>
            <motion.span 
              animate={{ textShadow: ['0 0 0px #00baff', '0 0 10px #00baff', '0 0 0px #00baff'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ color: '#00baff' }}
            >PLAY.</motion.span><br />
            <span style={{ color: '#ffffff' }}>LEARN.</span><br />
            <motion.span 
              animate={{ textShadow: ['0 0 0px #00baff', '0 0 10px #00baff', '0 0 0px #00baff'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              style={{ color: '#00baff' }}
            >POWER UP.</motion.span>
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '40px', lineHeight: '1.6' }}>
            Master private concepts through the excitement of football. Build your private<br/>
            literacy while having fun in this immersive learning experience.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <motion.a 
              href="https://creditorfootball.netlify.app/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(to right, #00baff, #007bff)',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 5px 15px rgba(0, 186, 255, 0.4)',
              }}
            >
              <FaPlay size={14} />
              Play Now
            </motion.a>
            
            {/* <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              Learn More
            </motion.a> */}
          </div>

          {/* Feature Tags - Now positioned below buttons in a single row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'flex-start',
            }}
          >
            {[
              '2D Interactive Field',
              'Football + Law Quizzes',
              'XP System & Leaderboard',
              'Sound & Effects',
              'Solo or Multiplayer',
              'Monthly Updates',
            ].map((text, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  padding: '10px 18px',
                  background: 'rgba(219, 238, 255, 0.9)',
                  color: '#0056b3',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GameBanner;