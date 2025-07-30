import React from "react";
import paul from "../assets/Paul.png";

const CreditorPaulintro = () => {
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
      padding: "80px 5%",
      width: "100%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(300px, 1fr) minmax(300px, 1fr)",
      gap: "60px",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box"
    }}>
      {/* Background elements */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "500px",
        height: "500px",
        background: "linear-gradient(45deg, #e0f7ff 0%, rgba(224,247,255,0) 70%)",
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        zIndex: 0
      }}></div>
      
      {/* Content Left Side - Now spans full available width */}
      <div style={{ 
        position: "relative", 
        zIndex: 2,
        maxWidth: "700px",
        justifySelf: "center"
      }}>
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          color: "#0f172a",
          marginBottom: "15px",
          background: "linear-gradient(90deg, #0f172a 0%, #0284c7 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}>
          Paulmichael Rowland
        </h1>
        
        <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
          <div style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #0284c7, #7dd3fc)",
            marginRight: "20px"
          }}></div>
          <h2 style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#64748b",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}>
            FOUNDER & VISIONARY
          </h2>
        </div>
        
        {/* Credentials */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "30px"
        }}>
          {["Founder, Creditor Academy", "Business Credit Architect", "Sovereignty Strategist"].map((item, index) => (
            <div key={index} style={{
              background: "rgba(2,132,199,0.1)",
              color: "#0284c7",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              whiteSpace: "nowrap"
            }}>
              {item}
            </div>
          ))}
        </div>
        
        <p style={{ 
          fontSize: "1.1rem",
          lineHeight: 1.8,
          color: "#334155",
          marginBottom: "40px"
        }}>
          The architect behind <strong style={{ 
            color: "#0284c7",
            fontWeight: 600,
            position: "relative"
          }}>
            <span style={{
              position: "absolute",
              bottom: "2px",
              left: 0,
              width: "100%",
              height: "8px",
              background: "rgba(2,132,199,0.2)",
              zIndex: -1
            }}></span>
            Creditor Academy
          </strong>, transforming how entrepreneurs access capital and build financial independence.
        </p>
        
        {/* Stats - Made more prominent */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}>
          {[
            { value: "$50K+", label: "Business Credit" },
            { value: "1.27B+", label: "Debt Eliminated" },
            { value: "1000s", label: "Entrepreneurs Helped" }
          ].map((stat, index) => (
            <div key={index} style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              textAlign: "center",
              transition: "transform 0.3s ease",
              minWidth: "150px"
            }}>
              <div style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#0284c7",
                lineHeight: 1,
                marginBottom: "5px"
              }}>{stat.value}</div>
              <div style={{
                fontSize: "0.9rem",
                color: "#64748b"
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Philosophy - Wider to fill space */}
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "5px",
            height: "100%",
            background: "linear-gradient(to bottom, #0284c7, #7dd3fc)"
          }}></div>
          <h3 style={{ 
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#0f172a",
            marginBottom: "15px",
            paddingLeft: "15px"
          }}>
            The Creditor Philosophy
          </h3>
          <p style={{ 
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#475569",
            paddingLeft: "15px",
            fontStyle: "italic"
          }}>
            "True financial freedom comes from understanding the systems of credit and capital. We don't just build credit scores - we architect financial sovereignty."
          </p>
        </div>
      </div>
      
      {/* Content Right Side - Adjusted for better balance */}
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "600px",
        justifySelf: "center"
      }}>
        {/* Image - Larger on bigger screens */}
        <div style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          maxWidth: "500px"
        }}>
          <div style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "150px",
            height: "150px",
            background: "linear-gradient(45deg, #e0f7ff 0%, rgba(224,247,255,0) 70%)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            zIndex: -1
          }}></div>
          <img
            src={paul}
            alt="Paulmichael Rowland"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -15px rgba(2,132,199,0.3)",
              border: "10px solid white"
            }}
          />
        </div>
        
        {/* Expertise - Wider to match image */}
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          width: "100%",
          maxWidth: "500px",
          margin: "40px 0 0",
          position: "relative"
        }}>
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#0284c7",
            marginBottom: "20px"
          }}>
            Key Expertise:
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            columns: "2",
            gap: "20px"
          }}>
            {[
              "Business Credit Architecture",
              "Private Wealth Systems",
              "Financial Sovereignty",
              "Credit Repair Mastery",
              "Corporate Structuring",
              "Asset Protection"
            ].map((item, index) => (
              <li key={index} style={{
                marginBottom: "12px",
                position: "relative",
                paddingLeft: "25px",
                fontSize: "1rem",
                color: "#334155",
                breakInside: "avoid"
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  color: "#0284c7",
                  fontWeight: "bold"
                }}>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditorPaulintro;