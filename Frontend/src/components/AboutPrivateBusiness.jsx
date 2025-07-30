import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPrivateBusiness = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.fade-in');
    if (section) observer.observe(section);
  }, []);

  const styles = {
    section: {
      backgroundColor: '#e0f2fe',
      padding: '60px 20px',
      fontFamily: 'Inter, sans-serif',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '1100px',
      margin: '0 auto',
      gap: '40px',
      alignItems: 'flex-start',
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      opacity: 0,
      transform: 'translateY(40px)',
      transition: 'all 0.6s ease-in-out',
    },
    text: {
      flex: '1 1 100%',
      color: '#1e293b',
    },
    title: {
      fontSize: '34px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#0f172a',
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#0284c7',
    },
    description: {
      fontSize: '16px',
      marginBottom: '30px',
      color: '#475569',
      lineHeight: '1.6',
    },
    sectionBlock: {
      marginBottom: '30px',
    },
    heading: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#0f172a',
    },
    ul: {
      paddingLeft: '20px',
      listStyleType: 'none',
    },
    li: {
      fontSize: '15px',
      marginBottom: '10px',
      paddingLeft: '1em',
      position: 'relative',
      color: '#334155',
    },
  };

  const NextStepSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
        borderRadius: '20px',
        padding: '50px 30px',
        maxWidth: '900px',
        margin: '80px auto',
        boxShadow: '0 25px 50px rgba(2, 132, 199, 0.15)',
        fontFamily: 'Inter, sans-serif',
        border: '1px solid rgba(2, 132, 199, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background circles */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, rgba(2, 132, 199, 0) 70%)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(2, 132, 199, 0) 70%)',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '800',
          marginBottom: '20px',
          textAlign: 'center',
          color: '#0369a1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <span style={{
            display: 'inline-flex',
            width: '50px',
            height: '50px',
            background: '#0284c7',
            color: 'white',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 5px 15px rgba(2, 132, 199, 0.3)'
          }}>🚀</span>
          Your Next Step
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: '#083344',
          lineHeight: '1.7',
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <strong style={{ color: '#0369a1' }}>Complete the Operate Private Checklist</strong> and book your private session.
          Our expert counselor will evaluate your legal and asset profile to determine if this is the right next step for your journey.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'rgba(2, 132, 199, 0.1)',
            padding: '16px 25px',
            borderRadius: '12px',
            color: '#0369a1',
            fontWeight: '600',
            fontSize: '1.2rem',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <span style={{
              background: '#0284c7',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>💰</span>
            <span>Course Investment: <span style={{ fontWeight: '800', color: '#075985' }}>$49</span></span>
          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: '0 15px 30px rgba(2, 132, 199, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
              color: 'white',
              border: 'none',
              padding: '18px 32px',
              fontSize: '1.2rem',
              borderRadius: '12px',
              boxShadow: '0 15px 30px rgba(2, 132, 199, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              justifyContent: 'center'
            }}
            onClick={() => alert("Redirecting to booking page...")}
          >
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>📞</span>
            Book Private Counselor Session
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section style={styles.section}>
        <div style={styles.container} className="fade-in">
          <div style={styles.text}>
            <h2 style={styles.title}>SENIOR: Private Business Credit</h2>
            <p style={styles.subtitle}>
              Build $200K+ in Business Credit — No SSN. No PG. No Banks.
            </p>
            <p style={styles.description}>
              This isn't just funding. It's financial sovereignty. You'll learn how to build business credit using <strong>UBOT Trusts</strong>,
              fix your personal credit through our "<strong>I Want Remedy Now</strong>" system, and set up Private Merchant Processing —
              no banks, no KYC, no shutdowns.
            </p>

            <div style={styles.sectionBlock}>
              <h3 style={styles.heading}>What You'll Master:</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>✔ Structure UBOTs to unlock vendor and card accounts (Tier 1—4)</li>
                <li style={styles.li}>✔ Dispute & fix your public credit file lawfully (no third-party repair scams)</li>
                <li style={styles.li}>✔ Improve personal credit for credit cards, personal loans & mortgages</li>
                <li style={styles.li}>✔ Accept payments privately with non-KYC merchant gateways</li>
                <li style={styles.li}>✔ Stack funding at 0% APR to launch and scale fast</li>
              </ul>
            </div>

            {/* <div style={styles.sectionBlock}>
              <h3 style={styles.heading}>Next Step:</h3>
              <p style={{ marginBottom: '12px' }}>
                Book your <strong>$49 Roadmap Session</strong>, complete your Business Credit Scorecard, and meet your assigned counselor to:
              </p>
              <ul style={styles.ul}>
                <li style={styles.li}>🔍 Review your goals and credit profile</li>
                <li style={styles.li}>🚀 Choose the best funding path</li>
                <li style={styles.li}>💳 Set up your private payment system</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <NextStepSection />
    </>
  );
};

export default AboutPrivateBusiness;
