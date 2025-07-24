import { motion } from 'framer-motion';
import { useState } from 'react';

const LMSCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitted email:', email);
      setIsLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div style={{
      padding: "100px 0",
      background: "linear-gradient(to right, #ffffff 0%, #e1f5fe 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        gap: "60px"
      }}>
        {/* CTA Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1",
            zIndex: "2"
          }}
        >
          <h2 style={{
            fontSize: "2.5rem",
            color: "#333",
            marginBottom: "20px"
          }}>
            Ready to Transform Your Learning Experience?
          </h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "40px",
            maxWidth: "500px"
          }}>
            Join the Athena LMS waitlist and be the first to know when we launch
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
              <div style={{
                display: "flex",
                position: "relative"
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  style={{
                    flex: "1",
                    padding: "18px 25px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0288d1";
                    e.target.style.boxShadow = "0 0 0 3px rgba(2, 136, 209, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e0e0e0";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <motion.button
                  type="submit"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                    padding: "13px 25px",
                    background: "#0288d1",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(2, 136, 209, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "50%",
                      borderTopColor: "white",
                      animation: "spin 1s ease-in-out infinite"
                    }}></span>
                  ) : (
                    <>
                      Notify Me
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                textAlign: "center",
                maxWidth: "500px"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 style={{
                fontSize: "1.5rem",
                color: "#333",
                marginBottom: "10px"
              }}>
                Thank you for joining our waitlist!
              </h3>
              <p style={{
                color: "#666",
                marginBottom: "20px"
              }}>
                We'll notify you as soon as Athena LMS is ready.
              </p>
              <motion.button
                style={{
                  padding: "13px 25px",
                  background: "transparent",
                  color: "#0288d1",
                  border: "2px solid #0288d1",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "20px"
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(2, 136, 209, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
              >
                Join Again
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flex: "1",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            zIndex: "2"
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Athena LMS Dashboard Preview" 
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </motion.div>
      </div>

      {/* Animation for spinner */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LMSCTA;