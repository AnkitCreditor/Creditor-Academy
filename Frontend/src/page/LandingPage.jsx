import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGlobe, FaYoutube, FaCreditCard, FaArrowRight } from 'react-icons/fa';
import { FiHexagon } from 'react-icons/fi';

import GameBanner from '../components/GameBanner.jsx';
import AboutSection from "../components/AboutSection";
import MasterclassBanner from '../components/MasterclassBanner';
import CoursesSection from '../components/CoursesSection';
import HeroCarousel from '../components/HeroCarousel.jsx';
import StatHighlights from '../components/stathighlight.jsx';
import ContactSection from '../components/ContactSection.jsx';
// import HomeSlider from '../components/home_slider.jsx';
import CreditorPaulintro from '../components/CreditorPaulintro.jsx';
import Teaching from '../components/Teaching.jsx';
import Roadmap from '../components/roadmap.jsx';
import Courses from '../components/CoursesSection';
import Event from '../components/eventadd.jsx';

import website from '../assets/Website_banner_2(2).webp';
import privateMerchant from '../assets/merchant (1).webp';
import RemedyBanner from '../assets/iwrnbanner.webp';
// import DemoRoadmap from '../components/roadmap_try.jsx';
import Rseries from '../components/Rseries.jsx';
import LiveClassBanner from "../assets/LiveClassBanner.webp";
const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroCarousel />
      <StatHighlights />
      <AboutSection /> 
      <CreditorPaulintro />
      <Teaching />
      <MasterclassBanner />
      <Event />
      <Roadmap />
      {/* <DemoRoadmap /> */}
      <Rseries />
      {/* <Courses /> */}
      <GameBanner />
      {/* <HomeSlider /> */}

        {/* Services Section */}
      <section style={{ 
        padding: '80px 5%', 
        background: 'radial-gradient(circle at 10% 20%, rgba(245, 245, 245, 0.9) 0%, rgba(255, 255, 255, 1) 100%)',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93, 173, 226, 0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 0, 0, 0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0
        }}></div>

        <div style={{ 
          maxWidth: '1300px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#2c3e50',
              marginBottom: '15px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Our Premium Services
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #5DADE2 0%, #3498db 100%)',
                  borderRadius: '2px',
                  transformOrigin: 'left center'
                }}
              />
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: '#7f8c8d',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Elevate your business with our cutting-edge solutions designed for the digital age
            </p>
          </motion.div>

          {/* Cards Container */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}>
            {/* Website Creation Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.03)',
                zIndex: 2
              }}
            >
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <motion.img 
                  src={website} 
                  alt="Website Creation" 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(93, 173, 226, 0.2) 0%, rgba(93, 173, 226, 0.5) 100%)'
                }}></div>
              </div>
              
              <div style={{
                padding: '30px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '30px',
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(93, 173, 226, 0.2)',
                  border: '2px solid #5DADE2'
                }}>
                  <FiHexagon style={{ 
                    color: '#5DADE2', 
                    fontSize: '30px',
                    position: 'absolute',
                    zIndex: 1
                  }} />
                  <FaGlobe style={{ 
                    color: '#5DADE2', 
                    fontSize: '20px',
                    position: 'relative',
                    zIndex: 2
                  }} />
                </div>
                
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  margin: '15px 0 10px'
                }}>Website Creation</h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#7f8c8d',
                  marginBottom: '25px',
                  lineHeight: 1.6
                }}>
                  Create sleek, responsive and stunning professional websites effortlessly—no coding needed. Empower your brand with a website that speaks volumes.
                </p>
                
                <motion.button
                  onClick={() => navigate('/website')}
                  whileHover={{ 
                    background: 'linear-gradient(90deg, #4a9bd3 0%, #5DADE2 100%)',
                    boxShadow: '0 10px 20px rgba(93, 173, 226, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    padding: '12px 25px',
                    background: 'linear-gradient(90deg, #5DADE2 0%, #4a9bd3 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 5px 15px rgba(93, 173, 226, 0.2)'
                  }}
                >
                  Explore Now <FaArrowRight style={{ fontSize: '14px' }} />
                </motion.button>
              </div>
            </motion.div>

            {/* Live Class Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.03)',
                zIndex: 2
              }}
            >
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <motion.img 
                  src={LiveClassBanner} 
                  alt="Live Class" 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.4) 100%)'
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <FaYoutube style={{ color: '#ff0000', fontSize: '30px' }} />
                </div>
              </div>
              
              <div style={{
                padding: '30px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '30px',
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(255, 0, 0, 0.2)',
                  border: '2px solid #ff0000'
                }}>
                  <FiHexagon style={{ 
                    color: '#ff0000', 
                    fontSize: '30px',
                    position: 'absolute',
                    zIndex: 1
                  }} />
                  <FaYoutube style={{ 
                    color: '#ff0000', 
                    fontSize: '20px',
                    position: 'relative',
                    zIndex: 2
                  }} />
                </div>
                
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  margin: '15px 0 10px'
                }}>Live Class</h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#7f8c8d',
                  marginBottom: '25px',
                  lineHeight: 1.6
                }}>
                  Join our interactive live classes every Tuesday & Thursday. Enjoy insights, Q&A and Live sessions featuring deep insights, and hands-on learning.
                </p>
                
                <motion.button
                  onClick={() => navigate('/liveclass')}
                  whileHover={{ 
                    background: 'linear-gradient(90deg, #cc0000 0%, #ff0000 100%)',
                    boxShadow: '0 10px 20px rgba(255, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    padding: '12px 25px',
                    background: 'linear-gradient(90deg, #ff0000 0%, #cc0000 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 5px 15px rgba(255, 0, 0, 0.2)'
                  }}
                >
                  Go to Live Class <FaArrowRight style={{ fontSize: '14px' }} />
                </motion.button>
              </div>
            </motion.div>

            {/* Private Merchant Processing Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.03)',
                zIndex: 2
              }}
            >
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <motion.img 
                  src={privateMerchant} 
                  alt="Private Merchant Processing" 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(46, 204, 113, 0.2) 0%, rgba(46, 204, 113, 0.4) 100%)'
                }}></div>
              </div>
              
              <div style={{
                padding: '30px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '30px',
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(46, 204, 113, 0.2)',
                  border: '2px solid #2ecc71'
                }}>
                  <FiHexagon style={{ 
                    color: '#2ecc71', 
                    fontSize: '30px',
                    position: 'absolute',
                    zIndex: 1
                  }} />
                  <FaCreditCard style={{ 
                    color: '#2ecc71', 
                    fontSize: '20px',
                    position: 'relative',
                    zIndex: 2
                  }} />
                </div>
                
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#2c3e50',
                  margin: '15px 0 10px'
                }}>Private Merchant Processing</h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#7f8c8d',
                  marginBottom: '25px',
                  lineHeight: 1.6
                }}>
                  Discover tailored payment solutions designed to empower your business with customized, seamless payment solutions.
                </p>
                
                <motion.button
                  onClick={() => navigate('/pmp')}
                  whileHover={{ 
                    background: 'linear-gradient(90deg, #27ae60 0%, #2ecc71 100%)',
                    boxShadow: '0 10px 20px rgba(46, 204, 113, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  style={{
                    padding: '12px 25px',
                    background: 'linear-gradient(90deg, #2ecc71 0%, #27ae60 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 5px 15px rgba(46, 204, 113, 0.2)'
                  }}
                >
                  Learn More <FaArrowRight style={{ fontSize: '14px' }} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*<StatsSection />*/}
      {/* <Mascot/> */}
      
    </>
  );
};

export default LandingPage;
