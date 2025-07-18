import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaIdBadge, FaCheckCircle, FaFileContract, FaShieldAlt, FaUniversity, FaGraduationCap } from "react-icons/fa";
import CourseSop from "../assets/CourseSop.jpg";

const outcomes = [
  {
    text: "Private ID — Filed, Sealed & Verified",
    icon: <FaIdBadge />
  },
  {
    text: "Secured Party Creditor Standing — Fully Executed",
    icon: <FaShieldAlt />
  },
  {
    text: "Status Correction Record Binder — Court-Ready",
    icon: <FaFileContract />
  },
  {
    text: "Irrevocable Trust — Registered with EIN & Security",
    icon: <FaUniversity />
  },
  {
    text: "UCC Filings — Done Correctly with Full Protections",
    icon: <FaCheckCircle />
  },
  {
    text: "Graduate Ready to Operate Fully in the Private",
    icon: <FaGraduationCap />
  },
];

const reasons = [
  "You're done being “presumed” and want lawful standing.",
  "You want full control of your legal and commercial identity.",
  "You want to learn and implement SPC & status correction.",
  "You're ready to graduate with a Private ID, Trust, and full lawful power.",
];

const OutcomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div style={{ height: "60px" }} />

      {/* Outcome Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "#eef5ff",
          padding: "60px 5%",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            color: "#2c3e50",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "rgb(0, 86, 179)" }}>Your Outcome</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#595f66",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            marginBottom: "40px",
          }}
        >
          Graduate empowered with everything you need to live lawfully and
          privately.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {outcomes.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              style={{
                background: "#ffffff",
                borderLeft: "5px solid #3498db",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <p
                style={{
                  color: "#0056b3",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Fit Section */}
      <section
        style={{
          padding: "80px 5%",
          background: "#f8fafc",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <h2
          data-aos="fade-up"
          style={{
            fontSize: "clamp(2rem, 6vw, 2.6rem)",
            color: "#0f172a",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          <strong>
            <span style={{ color: "rgb(0, 86, 179)" }}>
              Is This Course Right For You?
            </span>
          </strong>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Text Column */}
          <div>
            {reasons.map((reason, index) => (
              <div
                key={index}
                data-aos="fade-right"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  background: "#ffffff",
                  padding: "20px",
                  borderRadius: "14px",
                  marginBottom: "20px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    marginRight: "16px",
                    fill: "#0284c7",
                  }}
                >
                  <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1 15l7-7-1.4-1.4L11 14.2l-2.6-2.6L7 13l4 4z"></path>
                </svg>
                <p style={{ margin: 0, color: "#334155" }}>{reason}</p>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div data-aos="fade-left" style={{ textAlign: "center" }}>
            <img
              src={CourseSop}
              alt="Empowerment Visual"
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OutcomeSection;
