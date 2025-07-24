import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LMSAbout = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const stats = [
    { value: "10,000+", label: "Active Learners" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Platform Availability" },
    { value: "50+", label: "Courses Available" }
  ];

  return (
    <div 
      ref={ref}
      style={{
        padding: "100px 0",
        backgroundColor: "#f9fafc",
        position: "relative"
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "60px"
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#1f2937"
            }}
          >
            Redefining <span style={{ color: "#1a73e8" }}>Online Education</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            Athena LMS combines cutting-edge technology with pedagogical excellence
          </motion.p>
        </motion.div>
        
        {/* Content Area */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "50px"
        }}>
          {/* Video Container */}
          <motion.div
            style={{
              flex: "1",
              position: "relative",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {!isVideoLoaded && (
              <img 
                src="/images/lms-preview-fallback.gif" 
                alt="Athena LMS Preview" 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            )}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: isVideoLoaded ? 1 : 0,
                transition: "opacity 0.5s ease"
              }}
              onLoadedData={() => setIsVideoLoaded(true)}
              poster="/images/lms-video-poster.jpg"
            >
              <source src="/videos/lms-overview.mp4" type="video/mp4" />
            </video>
            <div 
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(5px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translate(-50%, -50%)";
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" style={{ fill: "white" }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            style={{
              flex: "1"
            }}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 style={{
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              color: "#1a73e8"
            }}>
              The Athena Difference
            </h3>
            <p style={{
              marginBottom: "1.5rem",
              lineHeight: "1.7",
              color: "#555"
            }}>
              Athena LMS isn't just another learning platform - it's a complete ecosystem 
              designed to engage learners, empower instructors, and deliver measurable results.
            </p>
            <p style={{
              marginBottom: "1.5rem",
              lineHeight: "1.7",
              color: "#555"
            }}>
              Our platform combines AI-driven personalization with intuitive course 
              creation tools and robust analytics to create a learning experience 
              that adapts to each user's needs.
            </p>
            
            {/* Stats Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginTop: "40px"
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div style={{
                    fontSize: "2.2rem",
                    fontWeight: "700",
                    color: "#1a73e8",
                    marginBottom: "5px"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    color: "#666"
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LMSAbout;