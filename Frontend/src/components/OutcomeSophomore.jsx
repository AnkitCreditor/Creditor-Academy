import React from "react";
import CourseSop from "../assets/CourseSop.jpg";

const outcomes = [
  "Private ID — Filed, Sealed & Verified",
  "Secured Party Creditor Standing — Fully Executed",
  "Status Correction Record Binder — Court-Ready",
  "Irrevocable Trust — Registered with EIN & Security",
  "UCC Filings — Done Correctly with Full Protections",
  "Graduate Ready to Operate Fully in the Private",
];

const reasons = [
  "You're done being “presumed” and want lawful standing.",
  "You want full control of your legal and commercial identity.",
  "You want to learn and implement SPC & status correction.",
  "You're ready to graduate with a Private ID, Trust, and full lawful power.",
];

const OutcomeSection = () => {
  return (
    <>
      {/* Divider */}
      <div style={{ height: "60px" }} />

      {/* Outcome Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "#eef5ff",
          padding: "60px 50px",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.2rem",
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
            fontSize: "1.05rem",
            marginBottom: "40px",
          }}
        >
          Graduate empowered with everything you need to live lawfully and
          privately.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {outcomes.map((text, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderLeft: "5px solid #3498db",
                padding: "25px 20px",
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
                  gap: "10px",
                  margin: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#0056b3"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    stroke="#0056b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="9" r="1" fill="#0056b3" />
                  <circle cx="15" cy="9" r="1" fill="#0056b3" />
                </svg>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hover Lift Section */}
      <section
        style={{
          padding: "80px 5%",
          background: "#f8fafc",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Left Text Column */}
          <div>
            {reasons.map((reason, index) => (
              <div
                key={index}
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

          {/* Right Image Column */}
          <div style={{ textAlign: "center" }}>
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
