import React, { useState } from "react";
import {
  Landmark,
  CreditCard,
  BadgeCheck,
  FolderCog,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const Teaching = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const teachings = [
    {
      icon: CreditCard,
      title: "Business Credit Mastery",
      desc: "Unlock vendor lines, revolving credit, and high-limit cards to fund your business or side hustle—without touching personal savings.",
      details: [
        "Establish business credit with no personal guarantee",
        "Access $50,000+ in vendor credit lines",
        "Build corporate credit scores (DUNS, PAYDEX)",
        "Secure high-limit business credit cards",
      ],
      cta: "Get Funding Blueprint",
    },
    {
      icon: BadgeCheck,
      title: "Personal Credit Repair",
      desc: "Dispute, delete, and rebuild your credit profile using proven strategies that restore your financial reputation and open new doors.",
      details: [
        "Remove collections and late payments",
        "Challenge inaccurate credit report items",
        "Rebuild credit with authorized user tradelines",
        "Rapid rescoring techniques",
      ],
      cta: "Repair My Credit",
    },
    {
      icon: Landmark,
      title: "Become Private",
      desc: "Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.",
      details: [
        "Status correction documentation",
        "Private EIN acquisition",
        "SPC filing process",
        "Sovereignty legal framework",
      ],
      cta: "Start Private Process",
    },
    {
      icon: FolderCog,
      title: "Operate Private",
      desc: "Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.",
      details: [
        "UBOT trust setup",
        "Private Membership Association creation",
        "Asset protection strategies",
        "Tax minimization structures",
      ],
      cta: "Protect My Business",
    },
    {
      icon: Briefcase,
      title: "Business-in-a-Box Coaching",
      desc: "Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.",
      details: [
        "Car rental business blueprint",
        "Digital agency startup system",
        "Tax preparation practice setup",
        "E-commerce turnkey solutions",
      ],
      cta: "Explore Business Models",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "2.75rem",
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: "800",
            color: "#0f172a",
            background: "linear-gradient(90deg, #075985, #0284c7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}
        >
          What He Empowers You With
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {teachings.map((item, idx) => {
            const isHovered = hoveredCard === idx;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => toggleExpand(idx)}
                style={{
                  background: isHovered ? "#0369a1" : "#ffffff",
                  color: isHovered ? "#ffffff" : "#0f172a",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.1)",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-6px)" : "none",
                  border: "1px solid rgba(186, 230, 253, 0.5)",
                  cursor: "pointer",
                }}
              >
                <div style={{ padding: "30px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "60px",
                        height: "60px",
                        background: isHovered
                          ? "rgba(255,255,255,0.1)"
                          : "#e0f2fe",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={28} color={isHovered ? "#ffffff" : "#0369a1"} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          margin: "0 0 12px 0",
                          fontSize: "1.35rem",
                          fontWeight: "700",
                          color: isHovered ? "#ffffff" : "#0f172a",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                          margin: 0,
                          color: isHovered ? "#e0f2fe" : "#334155",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      {expandedCard === idx ? (
                        <ChevronUp size={24} color={isHovered ? "#fff" : "#64748b"} />
                      ) : (
                        <ChevronDown size={24} color={isHovered ? "#fff" : "#64748b"} />
                      )}
                    </div>
                  </div>

                  {expandedCard === idx && (
                    <div style={{ marginTop: "25px" }}>
                      <ul
                        style={{
                          margin: "0 0 25px 0",
                          paddingLeft: "20px",
                          listStyleType: "none",
                        }}
                      >
                        {item.details.map((detail, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "12px",
                              position: "relative",
                              paddingLeft: "30px",
                              color: isHovered ? "#f0fdfa" : "#0f172a",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "4px",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                backgroundColor: isHovered ? "#0ea5e9" : "#bae6fd",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: isHovered ? "#ffffff" : "#0369a1",
                                }}
                              ></div>
                            </div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <button
                        style={{
                          background: isHovered
                            ? "white"
                            : "linear-gradient(90deg, #0284c7, #0ea5e9)",
                          color: isHovered ? "#0369a1" : "white",
                          border: "none",
                          padding: "12px 24px",
                          borderRadius: "8px",
                          fontWeight: "600",
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
                        }}
                      >
                        {item.cta}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
       <div
          style={{
            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(2, 132, 199, 0.3)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
          }}></div>
          
          <h3 style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "20px",
            position: "relative"
          }}>
            More Than a Credit Expert
          </h3>
          
          <p style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            maxWidth: "800px",
            margin: "0 auto 30px",
            position: "relative"
          }}>
            Paulmicheal is leading a financial sovereignty movement. Whether you're looking to eliminate debt, 
            launch a business, or step fully into the private, he provides the complete roadmap to achieve it 
            legally, quickly, and powerfully.
          </p>
          
          <button
            style={{
              background: "white",
              color: "#0369a1",
              border: "none",
              padding: "16px 40px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
            }}
          >
            Join The Movement
            <span style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
              transform: "rotate(45deg)",
              transition: "all 0.5s ease",
              opacity: 0
            }}></span>
          </button>
        </div>
    </section>
  );
};

export default Teaching;
