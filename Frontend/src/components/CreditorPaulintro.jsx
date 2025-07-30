import React, { useEffect, useRef } from "react";
import paul from "../assets/Paul.png";

const CreditorPaulintro = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(to right, #e0f7ff, #ffffff)",
        padding: "60px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/* CEO Image */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "400px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src={paul}
          alt="Paulmichael Rowland"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* CEO Info */}
      <div
        style={{
          flex: "2 1 500px",
          padding: "20px 40px",
          color: "#033e54",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Meet <span style={{ color: "#0284c7" }}>Paulmicheal Rowland</span>
        </h2>
        <h4 style={{ fontSize: "1.3rem", marginBottom: "20px", color: "#0f172a" }}>
          Founder, Creditor Academy | Business Credit Architect | Sovereignty Strategist
        </h4>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Paulmichael Rowland is a visionary entrepreneur and the founder of{" "}
          <strong>Creditor Academy</strong>, a results-driven platform empowering people to
          launch real businesses, build bulletproof credit profiles, and reclaim financial
          sovereignty—without relying on savings or banks.
        </p>

        <p style={{ fontSize: "1.05rem", marginTop: "16px", lineHeight: "1.8" }}>
          With deep expertise in business credit, credit repair, and private wealth systems,
          he’s helped thousands secure <strong>$10k–$50k+</strong> in business credit—often
          with no personal guarantee.
        </p>

        <div
          style={{
            background: "#f0f9ff",
            padding: "15px 20px",
            marginTop: "25px",
            borderLeft: "5px solid #0284c7",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>🚀 His Mission:</h4>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.6", fontSize: "1.05rem" }}>
            <li> Eliminate $1.27B+ in consumer debt</li>
            <li> Launch income-producing businesses using credit</li>
            <li> Reclaim sovereignty through law and trusts</li>
            <li> Teach the roadmap to legal private living</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditorPaulintro;
