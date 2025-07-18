import React from "react";
import LiveClassBanner from "../assets/LiveClassBanner.png";

const ClassLC = () => {
  return (
    <div className="w-full font-[Poppins]">
      {/* Banner Section */}
      <div style={{ position: "relative", maxWidth: "100%", height: "470px", overflow: "hidden" }}>
        <img
          src={LiveClassBanner}
          alt="Live Class Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Bottom CTA Section */}
      <section style={{ backgroundColor: "#eaf3f8", textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Don't Miss Out on the Next Live Class!
        </h2>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          <a
            href="https://meet.google.com/vmz-atgi-rpo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#5dade2",
              color: "white",
              textDecoration: "none",
              border: "none",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <strong>Join Live Session on Tuesday</strong>
          </a>

          <a
            href="https://meet.google.com/rvq-bhqr-kxv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#5dade2",
              color: "white",
              textDecoration: "none",
              border: "none",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <strong>Join Live Session on Thursday</strong>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ClassLC;
