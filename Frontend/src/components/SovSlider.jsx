import React, { useState, useEffect, useRef } from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaUserLock,
  FaFileContract,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";

const SovSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const cards = [
    {
      title: "Status Correction",
      desc: "Learn how to correct your legal status and establish sovereignty",
      Icon: FaBalanceScale,
      color: "#426be6",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Legal Fictions",
      desc: "Understand legal fictions and how to rebut presumption",
      Icon: FaGavel,
      color: "#7648be",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Private Jurisdiction",
      desc: "Remove yourself from public jurisdiction effectively",
      Icon: FaUserLock,
      color: "#23a26c",
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Essential Documents",
      desc: "Create the necessary legal documents and private contracts",
      Icon: FaFileContract,
      color: "#e28019",
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Estate Protection",
      desc: "Begin protecting yourself and your estate properly",
      Icon: FaShieldAlt,
      color: "#e14040",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Responsive logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 4;
  const totalSlides = cards.length - visibleCards + 1;

  const nextSlide = () => {
    setCurrentIndex((i) => Math.min(i + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipe = 50; // pixels threshold

    if (distance > minSwipe) {
      nextSlide();
    } else if (distance < -minSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const styles = {
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f7f9fc",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
    },
    headerIcon: {
      fontSize: "2.5rem",
      color: "#dd3447",
    },
    header: {
      textAlign: "center",
      fontSize: "2.2rem",
      fontWeight: 700,
      color: "#0b3d78",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1.1rem",
      color: "#63676d",
      marginBottom: "40px",
    },
    sliderWrapper: {
      position: "relative",
      padding: "0 50px",
    },
    slider: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
    },
    card: {
      flex: `0 0 ${100 / visibleCards}%`,
      padding: "10px",
      boxSizing: "border-box",
    },
    cardInner: {
      background: "#fff",
      borderRadius: "18px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      overflow: "hidden",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    cardImage: { height: "180px", overflow: "hidden" },
    cardImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
    },
    iconWrapper: (color) => ({
      width: "60px",
      height: "60px",
      borderRadius: "12px",
      backgroundColor: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "150px",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: `0 4px 12px ${color}55`,
    }),
    icon: {
      fontSize: "28px",
      color: "#fff",
    },
    cardContent: {
      padding: "30px 16px 20px",
      textAlign: "center",
      flex: 1,
      marginTop: "25px",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#333",
    },
    desc: {
      fontSize: "0.95rem",
      color: "#666",
      lineHeight: "1.4",
    },
    navBtn: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#fff",
      border: "1px solid #ddd",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
      cursor: "pointer",
      zIndex: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      color: "#333",
    },
    prevBtn: { left: "0px" },
    nextBtn: { right: "0px" },
    dotsContainer: {
      textAlign: "center",
      marginTop: "30px",
    },
    dot: {
      display: "inline-block",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#ccc",
      margin: "0 5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    activeDot: {
      background: "#426be6",
    },
    swipeIndicator: {
      marginTop: "10px",
      fontSize: "0.9rem",
      color: "#666",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
    },
    swipeArrow: {
      fontSize: "14px",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      {/* Fade-in Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.headerContainer}>
          <GoGoal style={styles.headerIcon} />
          <div style={styles.header}>What You'll Learn</div>
        </div>

        <div style={styles.subtitle}>
          Master these essential concepts to take control of your legal standing
        </div>
      </motion.div>

      {/* Slider */}
      <div
        style={styles.sliderWrapper}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          style={{
            ...styles.navBtn,
            ...styles.prevBtn,
            display: currentIndex === 0 ? "none" : "flex",
          }}
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <div style={{ overflow: "hidden" }}>
          <div style={styles.slider}>
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  ...styles.card,
                  flexBasis: `calc(100% / ${visibleCards})`,
                }}
              >
                <div style={styles.cardInner}>
                  <div style={styles.cardImage}>
                    <img src={card.img} alt={card.title} style={styles.cardImg} />
                  </div>
                  <div style={styles.iconWrapper(card.color)}>
                    <card.Icon style={styles.icon} />
                  </div>
                  <div style={styles.cardContent}>
                    <div style={styles.title}>{card.title}</div>
                    <div style={styles.desc}>{card.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          style={{
            ...styles.navBtn,
            ...styles.nextBtn,
            display:
              currentIndex >= cards.length - visibleCards ? "none" : "flex",
          }}
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots + Swipe Indicator */}
      <div style={styles.dotsContainer}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              ...(currentIndex === i ? styles.activeDot : {}),
            }}
            onClick={() => setCurrentIndex(i)}
          />
        ))}

        {isMobile && (
          <div style={styles.swipeIndicator}>
            <FaChevronLeft style={styles.swipeArrow} />
            <span>Swipe or use arrows</span>
            <FaChevronRight style={styles.swipeArrow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SovSlider;
