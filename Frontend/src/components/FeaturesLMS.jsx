import React from 'react';
import { motion } from 'framer-motion';
import statistics from '../assets/statistics.jpg';
import usermanagement from '../assets/usermanagement.jpg';
import livelesson from '../assets/livelesson.jpg';
import livechat from '../assets/livechat.jpg';
import coursecreation from '../assets/coursecreation.jpg';
import certificate from '../assets/certificate.jpg';

const FeaturesLMS = () => {
  const features = [
    {
      icon: '📚',
      title: "Course Creation Tools",
      description: "Build interactive courses with multimedia content, assessments, and SCORM support",
      color: { background: "rgba(219, 234, 254, 1)", border: "rgba(191, 219, 254, 1)" },
      image: coursecreation,
      imageAlt: "Instructor creating an online course"
    },
    {
      icon: '📊',
      title: "Advanced Analytics",
      description: "Track learner progress, engagement metrics, and performance analytics in real-time",
      color: { background: "rgba(233, 213, 255, 1)", border: "rgba(216, 180, 254, 1)" },
      image: statistics,
      imageAlt: "Learning analytics dashboard"
    },
    {
      icon: '👥',
      title: "User Management",
      description: "Manage instructors, learners, and administrators with role-based permissions",
      color: { background: "rgba(209, 250, 229, 1)", border: "rgba(167, 243, 208, 1)" },
      image: usermanagement,
      imageAlt: "User management interface"
    },
    {
      icon: '🎥',
      title: "Live Sessions",
      description: "Conduct virtual classrooms with video conferencing and interactive whiteboards",
      color: { background: "rgba(254, 235, 200, 1)", border: "rgba(253, 213, 143, 1)" },
      image: livelesson,
      imageAlt: "Online live class session"
    },
    {
      icon: '💬',
      title: "Live Chats",
      description: "Enable real-time discussions and support between learners and instructors",
      color: { background: "rgba(224, 231, 255, 1)", border: "rgba(199, 210, 254, 1)" },
      image: livechat,
      imageAlt: "Live chat interface"
    },
    {
      icon: '🏆',
      title: "Certification System",
      description: "Issue digital certificates and badges with blockchain verification support",
      color: { background: "rgba(204, 251, 241, 1)", border: "rgba(153, 246, 228, 1)" },
      image: certificate,
      imageAlt: "Digital certificate example"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Floating animation for the whole section
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div style={{
      padding: "80px 20px",
      background: "linear-gradient(to bottom, #f9fafb, #ffffff)",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Header with floating effect */}
      <motion.div
        style={{
          textAlign: "center",
          marginBottom: "60px",
          maxWidth: "800px"
        }}
        animate={floatAnimation}
      >
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "16px"
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Powerful <span style={{ color: "#3b82f6" }}>Learning Management</span> Features
        </motion.h2>
        <motion.p
          style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            lineHeight: "1.5"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover our comprehensive suite of educational tools
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 20px"
        }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover="hover"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(229, 231, 235, 0.7)",
              cursor: "pointer",
              position: "relative"
            }}
          >
            {/* Image */}
            <div style={{
              position: "relative",
              height: "200px",
              overflow: "hidden"
            }}>
              <motion.img
                src={feature.image}
                alt={feature.imageAlt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div style={{
                position: "absolute",
                inset: "0",
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)"
              }} />
            </div>
            
            {/* Content */}
            <div style={{
              padding: "20px",
              backgroundColor: feature.color.background,
              borderTop: `4px solid ${feature.color.border}`
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px"
              }}>
                <motion.div
                  style={{
                    fontSize: "28px",
                    lineHeight: "1"
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0"
                }}>
                  {feature.title}
                </h3>
              </div>
              <p style={{
                color: "#4b5563",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                margin: "0"
              }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesLMS;