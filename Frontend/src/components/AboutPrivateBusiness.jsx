import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircle, CheckCircle, ArrowRight, DollarSign, Phone,
  Briefcase, Star, Search, Shield, CreditCard,
  Car, Home, Droplet, Mic, FileText, Calendar, BookOpen,
  MessageSquare, ShoppingCart, Plus, Minus, Zap
} from 'lucide-react';

import GameBanner from './GameBanner';

import cardaccount from '../assets/cardaccount.jpg';
import pubiccredit from '../assets/publiccredit.jpg';
import luxurypersonal from '../assets/luxurypersonal.jpg';
import acceptpayments from '../assets/acceptpayments.jpg';
import stack from '../assets/stack.jpg';
import begin from '../assets/begin.jpg';
import Remedy from '../assets/Remedy_Result_3.jpg';
import MP from '../assets/PMP2.jpg';

const AboutPrivateBusiness = () => {
  const colors = {
    primary: '#0369a1',
    primaryLight: '#e0f2fe',
    secondary: '#0ea5e9',
    dark: '#0c4a6e',
    light: '#ffffff',
    background: '#f8fafc',
    text: '#334155',
    accent: '#38bdf8',
    mutedText: '#64748b',
    success: '#10b981',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)',
    gradientHover: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
  };

  const features = [
    { title: "Structure UBOTs to unlock vendor and card accounts", image: cardaccount, icon: <Shield size={24} color={colors.secondary} /> },
    { title: "Dispute & fix your public credit file lawfully", image: pubiccredit, icon: <Search size={24} color={colors.success} /> },
    { title: "Improve personal credit for loans & mortgages", image: luxurypersonal, icon: <CreditCard size={24} color="#8b5cf6" /> },
    { title: "Accept payments privately with non-KYC gateways", image: acceptpayments, icon: <CreditCard size={24} color={colors.secondary} /> },
    { title: "Stack funding at 0% APR to launch and scale fast", image: stack, icon: <Zap size={24} color="#ec4899" /> },
  ];

  const checklistItems = [
    { text: "Review your goals and credit profile", completed: false },
    { text: "Choose the best funding path", completed: false },
    { text: "Set up your private payment system", completed: true },
  ];

  const [expandedIdeas, setExpandedIdeas] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // Responsive glass card style
  const glassCardStyle = {
    background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)`,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
    borderRadius: 24,
    overflow: 'hidden',
    padding: 'clamp(24px, 5vw, 48px)',
    margin: '0 16px',
  };

  // Utility for rgba conversion
  const hexToRgba = (hex, alpha = 1) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.length === 3 ? hex[0].repeat(2) : hex.slice(0, 2), 16);
    const g = parseInt(hex.length === 3 ? hex[1].repeat(2) : hex.slice(2, 4), 16);
    const b = parseInt(hex.length === 3 ? hex[2].repeat(2) : hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Slider navigation
  const getMaxSlides = () => {
    if (windowWidth >= 1024) return Math.max(0, features.length - 3); // 3 cards visible
    if (windowWidth >= 640) return Math.max(0, features.length - 2); // 2 cards visible
    return Math.max(0, features.length - 1); // 1 card visible
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, getMaxSlides()));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: 40,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: colors.dark,
          color: colors.light,
          padding: '120px 20px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: 20,
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #ffffff, #e0f2fe)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SENIOR: Private Business Credit
          </motion.h1>

          <motion.p
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 40,
              lineHeight: 1.5,
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build $200K+ in Business Credit — <span style={{ color: colors.accent }}>No SSN. No PG. No Banks.</span>
          </motion.p>

          <motion.div
            style={{
              maxWidth: 800,
              margin: '0 auto',
              aspectRatio: '16 / 9',
              position: 'relative',
              cursor: 'pointer',
              borderRadius: 16,
              overflow: 'hidden',
              border: `2px solid ${colors.secondary}`,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
            whileHover={{ scale: 1.02 }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => alert('Video player will be implemented here.')}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <PlayCircle size={60} color={colors.light} />
            </div>
            <img
              src={begin}
              alt="Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <motion.div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '40px auto 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 60,
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Enhanced Intro Section */}
        <motion.section
          style={{
            ...glassCardStyle,
            padding: '60px 30px',
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            borderRadius: 24,
          }}
          variants={scaleUp}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              style={{
                flex: 1,
                minWidth: 320,
                maxWidth: 480,
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                transition: 'transform 0.3s ease',
              }}
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <img
                src={begin}
                alt="Financial Sovereignty"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              style={{ flex: 1, minWidth: 300, maxWidth: 600 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  color: colors.text,
                  lineHeight: 1.8,
                  fontWeight: 500,
                  marginBottom: '1.5rem',
                }}
              >
                This isn't just funding. It's{' '}
                <span
                  style={{
                    color: colors.primary,
                    fontWeight: 700,
                    background: `linear-gradient(120deg, ${colors.primaryLight} 0%, rgba(255,255,255,0) 90%)`,
                    padding: '4px 10px',
                    borderRadius: 6,
                    display: 'inline-block',
                    boxShadow: '0 0 0 3px rgba(0,0,0,0.05)',
                  }}
                >
                  financial sovereignty
                </span>
                .
              </p>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  color: colors.text,
                  lineHeight: 1.75,
                  marginBottom: '1.8rem',
                }}
              >
                Learn to build elite business credit with{' '}
                <strong style={{ color: colors.primary, fontWeight: 600 }}>UBOT Trusts</strong>, repair your personal credit,
                and establish Private Merchant Processing — no banks, no KYC, no risk of shutdowns.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 35 }}>
                <motion.button
                  whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '14px 28px',
                    background: colors.primary,
                    color: '#fff',
                    borderRadius: 10,
                    fontWeight: 600,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </motion.button>

                <motion.button
                  whileHover={{ y: -4, boxShadow: `0 10px 20px ${colors.primary}40` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '14px 28px',
                    background: 'transparent',
                    color: colors.primary,
                    border: `2px solid ${colors.primary}`,
                    borderRadius: 10,
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Watch Video
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section (Slider) */}
        {/* Features Section (Slider) */}
<motion.section style={glassCardStyle} variants={scaleUp}>
  <motion.h2
    style={{
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 700,
      color: colors.dark,
      marginBottom: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'center',
    }}
    variants={slideUp}
  >
    <CheckCircle size={28} color={colors.secondary} />
    What You'll Master:
  </motion.h2>

  <div style={{
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
    overflow: 'hidden'
  }}>
    <motion.button
      onClick={prevSlide}
      disabled={currentSlide === 0}
      whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
      whileTap={{ scale: currentSlide === 0 ? 1 : 0.9 }}
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: colors.light,
        border: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
        opacity: currentSlide === 0 ? 0.5 : 1
      }}
      aria-label="Previous slide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>

    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px 0',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(calc(-${currentSlide * (280 + 20)}px))`, // 280px card width + 20px gap
        width: 'fit-content'
      }}
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          style={{
            width: '280px',
            background: colors.light,
            borderRadius: 16,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: `1px solid ${colors.primaryLight}`,
            margin: '0 10px'
          }}
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12 }}
            loading="lazy"
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                background: 'rgba(14, 165, 233, 0.1)',
                padding: 10,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {feature.icon}
            </div>
            <p style={{ fontSize: 16, fontWeight: 500, flex: 1 }}>{feature.title}</p>
          </div>
          <div
            style={{
              padding: 12,
              background: 'rgba(14, 165, 233, 0.05)',
              borderRadius: 8,
              borderLeft: `3px solid ${colors.secondary}`,
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 1.6, color: colors.text }}>
              Detailed explanation about this feature and how it benefits your business.
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.button
      onClick={nextSlide}
      disabled={currentSlide >= getMaxSlides()}
      whileHover={{ scale: currentSlide >= getMaxSlides() ? 1 : 1.1 }}
      whileTap={{ scale: currentSlide >= getMaxSlides() ? 1 : 0.9 }}
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: colors.light,
        border: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: currentSlide >= getMaxSlides() ? 'not-allowed' : 'pointer',
        opacity: currentSlide >= getMaxSlides() ? 0.5 : 1
      }}
      aria-label="Next slide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>
  </div>

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  }}>
    {Array.from({ length: getMaxSlides() + 1 }).map((_, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.2 }}
        onClick={() => goToSlide(index)}
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: index === currentSlide ? colors.primary : 'rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
      />
    ))}
  </div>
</motion.section>
        {/* GameBanner */}
        <GameBanner />

        {/* Business Ideas Section */}
        <motion.section
          style={{
            ...glassCardStyle,
            marginTop: 40,
            padding: 'clamp(24px, 5vw, 40px)',
          }}
          variants={scaleUp}
        >
          <motion.h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              color: colors.dark,
              marginBottom: 30,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              justifyContent: 'center',
              width: '100%',
              textAlign: 'center',
            }}
            variants={slideUp}
          >
            <Briefcase size={28} color={colors.secondary} />
            Launch These Businesses Using Business Credit
          </motion.h2>

          <motion.div variants={fadeIn}>
            <motion.h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: colors.dark,
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Star size={20} color={colors.secondary} />
              Top 10 Ideas:
            </motion.h3>

            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 16,
                marginBottom: 30,
              }}
              variants={containerVariants}
            >
              {[
                { name: "Car Rental (Turo, HyreCar)", icon: <Car size={20} color="#3b82f6" /> },
                { name: "Airbnb / Rental Arbitrage", icon: <Home size={20} color="#8b5cf6" /> },
                { name: "Merchant Services / Payment Processing", icon: <CreditCard size={20} color="#10b981" /> },
                { name: "Coaching / Consulting", icon: <MessageSquare size={20} color="#ec4899" /> },
                { name: "E-commerce / Dropshipping", icon: <ShoppingCart size={20} color="#f59e0b" /> },
                { name: "Cleaning Services", icon: <Droplet size={20} color="#06b6d4" /> },
                { name: "Podcast / Digital Studio", icon: <Mic size={20} color="#ef4444" /> },
                { name: "Credit Repair / Funding Agency", icon: <FileText size={20} color="#84cc16" /> },
                { name: "Virtual Office / Notary Services", icon: <Calendar size={20} color="#f97316" /> },
                { name: "Tax Prep & Bookkeeping", icon: <BookOpen size={20} color="#6366f1" /> },
              ].map((idea, index) => (
                <motion.div
                  key={`top10-${index}`}
                  style={{
                    background: colors.light,
                    borderRadius: 12,
                    padding: 16,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    border: `1px solid ${colors.primaryLight}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    boxShadow: `0 8px 20px rgba(3, 105, 161, 0.15)`,
                    borderColor: colors.secondary,
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(14, 165, 233, 0.1)',
                      padding: 10,
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {idea.icon}
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 500, flex: 1 }}>{idea.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div style={{ marginTop: 24, position: 'relative' }}>
              <motion.div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: colors.primary,
                  color: colors.light,
                  borderRadius: 20,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  boxShadow: `0 2px 8px ${colors.primaryLight}`,
                  position: 'relative',
                  zIndex: 2,
                }}
                whileHover={{ background: colors.secondary, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedIdeas(!expandedIdeas)}
              >
                <span style={{ fontSize: 14, fontWeight: 600, marginRight: 8 }}>
                  {expandedIdeas ? 'Hide' : '+15 More'}
                </span>
                {expandedIdeas ? <Minus size={16} color={colors.light} /> : <Plus size={16} color={colors.light} />}
              </motion.div>

              <AnimatePresence>
                {expandedIdeas && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: colors.primaryLight,
                      borderRadius: '0 16px 16px 16px',
                      padding: 20,
                      position: 'relative',
                      left: -16,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -12,
                        left: 16,
                        width: 24,
                        height: 12,
                        background: colors.primaryLight,
                        clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                      }}
                    />

                    <motion.div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: 12,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {[
                        "Mobile Notary", "Box Truck Freight", "ATMs",
                        "Funnel Agency", "Event Rentals", "Dispatching",
                        "360 Photo Booths", "Supplement Brands", "Print-on-Demand",
                        "Detailing", "Subscription Boxes", "Virtual Assistants",
                        "Online Courses", "Pet Services & more"
                      ].map((idea, index) => (
                        <motion.div
                          key={`more-${index}`}
                          style={{
                            background: colors.light,
                            borderRadius: 8,
                            padding: '10px 12px',
                            fontSize: 14,
                            fontWeight: 500,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                          }}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <div
                            style={{ width: 6, height: 6, borderRadius: '50%', background: colors.primary }}
                          />
                          {idea}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          style={{ ...glassCardStyle, marginTop: 40, textAlign: 'center' }}
          variants={scaleUp}
        >
          <motion.h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              color: colors.dark,
              marginBottom: 20,
            }}
            variants={slideUp}
          >
            Next Step:
          </motion.h2>

          <motion.p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: colors.text,
              lineHeight: 1.6,
              marginBottom: 24,
            }}
            variants={fadeIn}
          >
            Book your <strong>$49 Roadmap Session</strong> and meet your assigned counselor to:
          </motion.p>

          <motion.ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 auto 24px',
              maxWidth: 500,
            }}
            variants={containerVariants}
          >
            {checklistItems.map((item, index) => (
              <motion.li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 15,
                  marginBottom: 12,
                  padding: 12,
                  borderRadius: 8,
                  background: item.completed ? '#f0fdf4' : 'rgba(14, 165, 233, 0.05)',
                  border: `1px solid ${item.completed ? '#10b981' : colors.primaryLight}`,
                }}
                variants={itemVariants}
              >
                {item.completed ? (
                  <CheckCircle size={18} color="#10b981" />
                ) : (
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: `2px solid ${colors.mutedText}`,
                      borderRadius: 4,
                      flexShrink: 0,
                    }}
                  />
                )}
                <span style={{ color: item.completed ? colors.success : colors.text }}>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              fontSize: 18,
              fontWeight: 600,
              color: colors.dark,
              marginBottom: 24,
            }}
            variants={fadeIn}
          >
            <DollarSign size={20} color={colors.secondary} />
            <span>
              Session: <strong style={{ color: colors.primary }}>$49</strong>
            </span>
          </motion.div>

          <motion.button
            style={{
              background: colors.gradient,
              color: colors.light,
              border: 'none',
              padding: '16px 24px',
              fontSize: 16,
              borderRadius: 12,
              cursor: 'pointer',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              margin: '0 auto',
              maxWidth: 350,
              width: '100%',
              justifyContent: 'center',
            }}
            whileHover={{ background: colors.gradientHover }}
            whileTap={{ scale: 0.98 }}
            variants={slideUp}
          >
            <Phone size={18} />
            <span>Contact Us Now</span>
            <ArrowRight size={18} />
          </motion.button>
        </motion.section>
      </motion.div>

      {/* Global styles for keyframes */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPrivateBusiness;
