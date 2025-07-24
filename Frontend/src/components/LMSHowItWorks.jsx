import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LMSHowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
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
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
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
      image: "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=600"
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
      image: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600"
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80"
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyLDEzNiwyMDksMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')",
          opacity: 0.12,
          zIndex: 0
        }}
      ></div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2
        }}
      >
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
          <h2
            style={{
              fontSize: "2.8rem",
              color: "#333",
              marginBottom: "15px"
            }}
          >
            How <span style={{ color: "#0288d1", fontWeight: "700" }}>Athena LMS</span> Works
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Your journey from learning to certification in 4 simple steps
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 0"
          }}
        >
          {/* Timeline Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "6px",
              height: "100%",
              background: "linear-gradient(to bottom, #4fc3f7, #0288d1)",
              borderRadius: "10px",
              zIndex: 1,
              filter: "drop-shadow(0 0 6px rgba(2,136,209,0.3))"
            }}
          ></div>

          {/* Timeline Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  marginBottom: "60px",
                  zIndex: 2,
                  alignItems: "center",
                  flexDirection: isEven ? "row" : "row-reverse"
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
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease"
                  }}
                  whileHover={{ scale: 1.05 }}
                  tabIndex={0}
                  aria-label={step.title}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
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
                      bottom: "-20px",
                      right: isEven ? "25px" : "auto",
                      left: !isEven ? "25px" : "auto",
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      boxShadow: "0 10px 26px rgba(0, 0, 0, 0.16)",
                      zIndex: "3",
                      backgroundColor: step.color,
                      userSelect: "none"
                    }}
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Content Container */}
                <div
                  style={{
                    flex: "1",
                    background: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 5px 30px rgba(0, 0, 0, 0.1)",
                    margin: isEven
                      ? "0 30px 0 50px"
                      : "0 50px 0 30px",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      [isEven ? "left" : "right"]: "-15px",
                      width: "30px",
                      height: "30px",
                      background: "white",
                      transform: "translateY(-50%) rotate(45deg)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.06)"
                    }}
                  ></div>

                  <div
                    style={{
                      color: step.color,
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "12px"
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "12px",
                      color: "#222"
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.65",
                      fontSize: "1.05rem"
                    }}
                  >
                    {step.description}
                  </p>
                  <div
                    style={{
                      height: "4px",
                      width: "60px",
                      borderRadius: "3px",
                      marginTop: "20px",
                      backgroundColor: step.color,
                      boxShadow: `0 4px 6px ${step.color}70`
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.85, duration: 0.7 }}
          style={{
            textAlign: "center",
            marginTop: "90px"
          }}
        >
          <motion.a
            href="https://aathenaa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 36px",
              background: "#0288d1",
              color: "white",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.18rem",
              userSelect: "none",
              boxShadow: "0 6px 18px rgba(2, 136, 209, 0.25)"
            }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 9px 28px rgba(2, 136, 209, 0.35)"
            }}
            whileTap={{ scale: 0.97 }}
            aria-label="Start Learning Journey"
          >
            Start Learning Journey
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "14px" }}
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <path d="M5 12h13"></path>
              <path d="M12 5l7 7-7 7"></path>
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default LMSHowItWorks;
