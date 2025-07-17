import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Interactive Sessions",
    desc: "Ask questions and get real-time answers during our engaging sessions.",
    img: "https://img.freepik.com/premium-photo/live-button-with-play-icon-rendering_327483-180.jpg?w=740",
  },
  {
    title: "Expert Mentors",
    desc: "Learn from professionals with years of real-world experience.",
    img: "https://img.freepik.com/premium-photo/portrait-manager-man-with-arms-crossed-startup-success-teamwork-with-partnership-face-male-person-employee-with-leadership-collaboration-meeting-with-happiness-profit-growth_590464-187930.jpg?w=740",
  },
  {
    title: "Session Replays",
    desc: "Missed a class? No problem — access full replays anytime.",
    img: "https://img.freepik.com/premium-photo/three-people-are-sitting-front-tv-that-has-man-it_1286328-3032.jpg?w=740",
  },
];

const LiveClassesSection = () => {
  return (
    <div>
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Why Join Our Live Classes?
        </h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            fontSize: "16px",
            color: "#555",
          }}
        >
          Get real-time answers to your questions, interact with experienced
          mentors, and build your skills through engaging sessions every week.
        </p>
      </motion.section>

      {/* Features Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "30px 20px",
          backgroundColor: "#f1f1f1",
          flexWrap: "wrap",
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              width: "300px",
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              style={{
                width: "100%",
                height: "199px",
                objectFit: "cover",
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ marginBottom: "10px" }}>{feature.title}</h3>
            <p style={{ color: "#555" }}>{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default LiveClassesSection;
