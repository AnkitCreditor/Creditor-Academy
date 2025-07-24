import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LMSHowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const steps = [
    {
      title: "Engaging Learning",
      description: "Access interactive courses with videos, readings, and activities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      color: "#4fc3f7",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Knowledge Check",
      description: "Test your understanding with interactive quizzes and assessments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      color: "#29b6f6",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Earn Badges",
      description: "Collect achievement badges as you master each concept",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      color: "#039be5",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Get Certified",
      description: "Receive verifiable certificates upon course completion",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="14" x2="16" y2="14"></line>
          <line x1="12" y1="17" x2="16" y2="17"></line>
          <line x1="10" y1="11" x2="18" y2="11"></line>
        </svg>
      ),
      color: "#0288d1",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div 
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(to bottom, #ffffff 0%, #e1f5fe 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyLDEzNiwyMDksMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')"
      }}></div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: "2"
      }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "60px"
          }}
        >
          <h2 style={{
            fontSize: "2.8rem",
            color: "#333",
            marginBottom: "15px"
          }}>
            How <span style={{ color: "#0288d1", fontWeight: "700" }}>Athena LMS</span> Works
          </h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#555",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Your journey from learning to certification in 4 simple steps
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 0"
        }}>
          {/* Timeline Line */}
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            background: "linear-gradient(to bottom, #4fc3f7, #0288d1)",
            borderRadius: "10px",
            zIndex: "1"
          }}></div>
          
          {/* Timeline Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              style={{
                position: "relative",
                display: "flex",
                width: "100%",
                marginBottom: "60px",
                zIndex: "2",
                alignItems: "center",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse"
              }}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <motion.div 
                style={{
                  flex: "1",
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.3s ease"
                  }}
                />
                <motion.div 
                  style={{
                    position: "absolute",
                    bottom: "-25px",
                    right: index % 2 === 0 ? "25px" : "auto",
                    left: index % 2 !== 0 ? "25px" : "auto",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                    zIndex: "3",
                    transition: "all 0.3s ease",
                    backgroundColor: step.color
                  }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
              
              {/* Content Container */}
              <div style={{
                flex: "1",
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 5px 25px rgba(0, 0, 0, 0.08)",
                margin: index % 2 === 0 ? "0 30px 0 50px" : "0 50px 0 30px",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  [index % 2 === 0 ? "left" : "right"]: "-10px",
                  width: "20px",
                  height: "20px",
                  background: "white",
                  transform: "translateY(-50%) rotate(45deg)"
                }}></div>
                
                <div style={{ 
                  color: step.color,
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "10px"
                }}>
                  0{index + 1}
                </div>
                <h3 style={{
                  fontSize: "1.4rem",
                  marginBottom: "10px",
                  color: "#333"
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {step.description}
                </p>
                <div style={{
                  height: "4px",
                  width: "60px",
                  borderRadius: "2px",
                  marginTop: "15px",
                  backgroundColor: step.color
                }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "80px"
          }}
        >
          <motion.a
            href="https://aathenaa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "15px 30px",
              background: "#0288d1",
              color: "white",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 5px 15px rgba(2, 136, 209, 0.2)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(2, 136, 209, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Journey
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "10px" }}>
              <path d="M5 12h13M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default LMSHowItWorks;