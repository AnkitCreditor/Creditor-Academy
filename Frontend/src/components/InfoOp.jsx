import React from "react";
import { motion } from "framer-motion";

const InfoOp = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const listItemAnim = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Header Section */}
   <motion.div
  style={{
    background: "linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 100%)",
    padding: "80px 20px",
    position: "relative",
    overflow: "hidden"
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }}
>
  {/* Decorative elements */}
  <div style={{
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(2, 136, 209, 0.1) 0%, rgba(2, 136, 209, 0) 70%)"
  }}></div>
  
  <div style={{
    position: "absolute",
    bottom: "-150px",
    left: "-150px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(2, 136, 209, 0.08) 0%, rgba(2, 136, 209, 0) 70%)"
  }}></div>

  <motion.div
    style={{
      maxWidth: "1000px",
      margin: "auto",
      background: "rgba(255, 255, 255, 0.7)",
      borderRadius: "20px",
      padding: "60px",
      boxShadow: "0 15px 50px rgba(2, 136, 209, 0.15)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      position: "relative",
      zIndex: 1
    }}
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h1
      style={{ 
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        marginBottom: "20px",
        fontWeight: "800",
        textAlign: "center",
        color: "#0369a1",
        lineHeight: 1.2
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      OPERATE <span style={{ color: "#0288d1" }}>PRIVATE</span>
    </motion.h1>

    <motion.p
      style={{ 
        fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
        marginBottom: "30px",
        textAlign: "center",
        color: "#0f172a",
        lineHeight: 1.7,
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Protect Your Assets & Run Your Business in the Private
    </motion.p>

    <motion.div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "16px",
        padding: "30px",
        marginBottom: "40px",
        borderLeft: "4px solid #0288d1",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p style={{
        fontSize: "1.1rem",
        lineHeight: 1.8,
        color: "#334155",
        margin: 0
      }}>
        This powerful course teaches you how to build business trusts, create PMAs (Private Membership Associations), 
        and operate without state oversight. You'll learn how to structure businesses, real estate, and commerce 
        in the private, away from contracts that expose you to liability and control.
      </p>
    </motion.div>

    <motion.div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(2, 136, 209, 0.25)",
        transform: "perspective(1000px) rotateX(5deg)",
        transition: "transform 0.5s ease"
      }}
      whileHover={{ transform: "perspective(1000px) rotateX(0)" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div style={{ position: "relative", paddingTop: "56.25%", height: 0 }}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none"
          }}
          src="https://drive.google.com/file/d/1JDzWkLSFtHMuuRceyogbfCTdM3o2NgJp/preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Operate Private Video"
        ></iframe>
      </div>
    </motion.div>
  </motion.div>
</motion.div>

 {/* Two Column Section */}
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    padding: "60px 5%",
    background: "linear-gradient(135deg, #e0e7ef, #e0f2fe 90%)",
    gap: "36px",
    justifyContent: "center",
    alignItems: "stretch",
  }}
>
  {/* --- Learn Card --- */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 16px 38px rgba(16,185,129,0.12)" }}
    transition={{ type: "spring", stiffness: 200 }}
    style={{
      flex: "1 1 340px",
      borderRadius: "22px",
      padding: "36px",
      background: "linear-gradient(120deg, #f8fafc 60%, #e0f2fe 120%)",
      border: "1px solid #d1fae5",
      boxShadow: "0 12px 32px rgba(59,130,246,0.08)",
      backdropFilter: "blur(3px)",
      overflow: "hidden",
      minWidth: 320,
      position: "relative",
    }}
  >
    {/* Fancy Header Bar */}
    <div
      style={{
        height: "8px",
        width: "52px",
        background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    />
    <h2 style={{
      fontSize: "2em",
      color: "#1e3a8a",
      marginBottom: "20px",
      fontWeight: 800,
      letterSpacing: "-1px"
    }}>
      What You’ll Learn
    </h2>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "26px" }}>
      {[
        "Set up and operate a UBOT business trust",
        "Create lawful PMAs for private services, coaching, or healing",
        "Hold real estate in private trust structures",
        "Build intergenerational estate protection and privacy",
        "Operate outside the UCC and statutory commercial codes",
      ].map((text, i) => (
        <motion.li
          whileHover={{ x: 10, color: "#2563eb" }}
          key={i}
          style={{
            margin: "0 0 18px 0",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "1.08em",
            transition: "color .15s"
          }}
        >
          <svg
            style={{ minWidth: "22px", marginRight: "13px" }}
            viewBox="0 0 24 24" width={22} height={22}
          >
            <circle cx="12" cy="12" r="10" fill="#2563eb" opacity="0.2"/>
            <circle cx="12" cy="12" r="7" fill="#2563eb" />
          </svg>
          <span style={{flex: 1}}>{text}</span>
        </motion.li>
      ))}
    </ul>
    <div
      style={{
        marginTop: "36px",
        fontWeight: 600,
        background: "linear-gradient(90deg, #fef2f2 60%, #fca5a5)",
        padding: "16px 24px",
        borderLeft: "6px solid #e11d48",
        borderRadius: "11px",
        color: "#991b1b",
        backdropFilter: "blur(1.5px)"
      }}
    >
      Until you're operating through a lawful{" "}
      <span style={{ color: "#e11d48", fontWeight: 700 }}>Private Trust</span>,
      you're not truly private.
    </div>
  </motion.div>

  {/* --- Connector --- */}
  <motion.div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      minWidth: "80px"
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    {/* Pulsing Gradient Circle */}
    <motion.div
      style={{
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e3a8a, #10b981)",
        boxShadow: "0 0 22px 0 #10b98190",
      }}
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    />
    {/* Glow Line */}
    <motion.div
      style={{
        width: "6px",
        height: "90px",
        background: "linear-gradient(180deg, #1e3a8a 20%, #10b981 85%)",
        borderRadius: "8px",
        margin: "14px 0",
        filter: "blur(0.5px)",
        opacity: 0.95,
      }}
      animate={{ scaleY: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Rotating Swap Icon */}
    <motion.div
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        border: "2px solid #10b981",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "19px",
        color: "#0e519f",
        fontWeight: "bold"
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      ⇄
    </motion.div>
  </motion.div>

  {/* --- Business Model Card --- */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 16px 38px rgba(16,185,129,0.13)" }}
    transition={{ type: "spring", stiffness: 200 }}
    style={{
      flex: "1 1 340px",
      borderRadius: "22px",
      padding: "36px",
      background: "linear-gradient(120deg,#f8fafc 60%,#d1fae5 120%)",
      border: "1px solid #bbf7d0",
      boxShadow: "0 12px 32px rgba(16,185,129,0.09)",
      backdropFilter: "blur(3px)",
      minWidth: 320,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Header Bar */}
    <div
      style={{
        height: "8px",
        width: "52px",
        background: "linear-gradient(90deg, #10b981, #34d399)",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    />
    <h2 style={{
      fontSize: "2em",
      color: "#059669",
      marginBottom: "18px",
      fontWeight: 800,
      letterSpacing: "-0.5px"
    }}>
      Business Models You Can Launch:
    </h2>
    <p style={{
      color: "#374151",
      fontSize: "1.08em",
      lineHeight: 1.7,
      margin: "0 0 20px"
    }}>
      This course is your private operating system.<br/><span style={{color:"#059669",fontWeight:600}}>It’s not theory — it’s execution of a bulletproof private structure.</span>
    </p>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "22px" }}>
      {[
        "Real Estate Holding and Leasing via Trusts",
        "Wellness or Healing PMAs",
        "Private Homeschools or Coaching Centers",
        "Skilled Trades & Artisan Guilds (under PMA)",
        "Trust-Based Estate & Wealth Protection Services",
      ].map((item, i) => (
        <motion.li
          whileHover={{ x: 10, color: "#10b981" }}
          key={i}
          style={{
            margin: "0 0 18px 0",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "1.08em",
            transition: "color .15s"
          }}
        >
          <svg
            style={{ minWidth: "22px", marginRight: "13px" }}
            viewBox="0 0 24 24" width={22} height={22}
          >
            <path d="M9 16.2L4.8 12 3.4 13.4 9 19 21 7l-1.4-1.4z"
              fill="#10b981" />
            <circle cx="12" cy="12" r="10" fill="#10b981" opacity="0.11"/>
          </svg>
          <span style={{flex: 1}}>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
</div>



    </>
  );
};

export default InfoOp;
