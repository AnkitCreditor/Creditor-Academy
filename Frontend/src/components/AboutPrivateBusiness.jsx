import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle, ArrowRight, DollarSign, Phone, Briefcase, Star, Search, BarChart2, Settings } from 'lucide-react';

const AboutPrivateBusiness = () => {
    // Styles definition
    const styles = {
        pageContainer: {
            backgroundColor: '#f8fafc',
            fontFamily: "'Inter', sans-serif",
        },
        heroSection: {
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '80px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        },
        heroContent: {
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
        },
        heroTitle: {
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: '1.2',
            color: '#fff',
        },
        heroSubtitle: {
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: '600',
            color: '#0ea5e9',
            marginBottom: '32px',
        },
        videoPlaceholder: {
            maxWidth: '800px',
            margin: '40px auto 0',
            backgroundColor: '#1e293b',
            borderRadius: '16px',
            aspectRatio: '16 / 9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '2px dashed #334155',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        mainContentSection: {
            padding: '80px 20px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        infoCard: {
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
        },
        sectionTitle: {
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        description: {
            fontSize: '18px',
            color: '#334155',
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '800px',
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
        },
        featureItem: {
            backgroundColor: '#f1f5f9',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
        },
        featureIcon: {
            color: '#0ea5e9',
            flexShrink: 0,
            marginTop: '4px',
        },
        featureText: {
            fontSize: '16px',
            color: '#334155',
            lineHeight: '1.6',
        },
        businessIdeasSection: {
            marginTop: '60px',
        },
        businessIdeasContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            '@media (min-width: 768px)': {
                gridTemplateColumns: '1fr 1fr',
            }
        },
        businessList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            columnCount: 2,
            columnGap: '24px',
        },
        businessListItem: {
            fontSize: '15px',
            color: '#475569',
            marginBottom: '12px',
            breakInside: 'avoid-column',
        },
        listTitle: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '20px',
        },
        ctaSection: {
            background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            borderRadius: '24px',
            padding: '60px 40px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 25px 50px rgba(15, 23, 42, 0.2)',
        },
        ctaTitle: {
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: '700',
            marginBottom: '16px',
        },
        ctaDescription: {
            fontSize: '18px',
            color: '#94a3b8',
            marginBottom: '32px',
            maxWidth: '750px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
        },
        nextStepsList: {
            listStyle: 'none',
            padding: 0,
            maxWidth: '500px',
            margin: '0 auto 40px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        nextStepItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '16px',
            color: '#cbd5e1',
        },
        nextStepIcon: {
            color: '#38bdf8'
        },
        ctaButtonWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        },
        ctaButton: {
            background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            fontSize: '18px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 20px rgba(14, 165, 233, 0.3)',
            width: '100%',
            maxWidth: '400px',
            justifyContent: 'center',
        },
        investmentInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#cbd5e1',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '12px 24px',
            borderRadius: '12px'
        }
    };

    const whatYoullMaster = [
        "Structure UBOTs to unlock vendor and card accounts (Tier 1—4)",
        "Dispute & fix your public credit file lawfully (no third-party repair scams)",
        "Improve personal credit for credit cards, personal loans & mortgages",
        "Accept payments privately with non-KYC merchant gateways",
        "Stack funding at 0% APR to launch and scale fast"
    ];

    const top10Ideas = [
        "Car Rental (Turo, HyreCar)", "Airbnb / Rental Arbitrage", "Merchant Services / Payment Processing",
        "Coaching / Consulting", "E-commerce / Dropshipping", "Cleaning Services",
        "Podcast / Digital Studio", "Credit Repair / Funding Agency", "Virtual Office / Notary Services",
        "Tax Prep & Bookkeeping"
    ];
    
    const plus15More = [
        "Mobile Notary", "Box Truck Freight", "ATMs", "Funnel Agency", "Event Rentals", "Dispatching",
        "360 Photo Booths", "Supplement Brands", "Print-on-Demand", "Detailing", "Subscription Boxes",
        "Virtual Assistants", "Online Courses", "Pet Services & more."
    ];


    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <motion.h1
                        style={styles.heroTitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        SENIOR: Private Business Credit
                    </motion.h1>
                    <motion.p
                        style={styles.heroSubtitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Build $200K+ in Business Credit — No SSN. No PG. No Banks.
                    </motion.p>
                    <motion.div
                        style={styles.videoPlaceholder}
                        whileHover={{ scale: 1.02, borderColor: '#0ea5e9' }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => alert("Video player will be implemented here.")}
                    >
                        <PlayCircle size={80} color="#cbd5e1" />
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <main style={styles.mainContentSection}>
                <motion.div
                    style={styles.container}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <section style={styles.infoCard}>
                        <p style={styles.description}>
                            This isn't just funding. It's financial sovereignty.<br />
                            You'll learn how to build business credit using <strong>UBOT Trusts</strong>, fix your personal credit through our "<strong>I Want Remedy Now</strong>" system, and set up Private Merchant Processing — no banks, no KYC, no shutdowns.
                        </p>
                        
                        <h2 style={styles.sectionTitle}>
                            <CheckCircle size={32} color="#0ea5e9" />
                            What You'll Master:
                        </h2>
                        <div style={styles.featuresGrid}>
                            {whatYoullMaster.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    style={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CheckCircle size={24} style={styles.featureIcon} />
                                    <p style={styles.featureText}>{feature}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div style={styles.businessIdeasSection}>
                            <h2 style={styles.sectionTitle}>
                                <Briefcase size={32} color="#0ea5e9" />
                                Launch These Businesses Using Business Credit:
                            </h2>
                            <div style={{...styles.businessIdeasContainer, ...{'@media (min-width: 768px)': {gridTemplateColumns: '1fr 1fr'}}}}>
                                <div>
                                    <h3 style={styles.listTitle}>Top 10 Ideas:</h3>
                                    <ul style={styles.businessList}>
                                        {top10Ideas.map(idea => <li key={idea} style={styles.businessListItem}>✔ {idea}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h3 style={styles.listTitle}>+ 15 More:</h3>
                                    <ul style={styles.businessList}>
                                        {plus15More.map(idea => <li key={idea} style={styles.businessListItem}>✔ {idea}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Step / CTA Section */}
                    <motion.section
                        style={styles.ctaSection}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={styles.ctaTitle}>Next Step:</h2>
                        <p style={styles.ctaDescription}>
                            Book your $49 Roadmap Session, complete your Business Credit Scorecard, and meet your assigned counselor to:
                        </p>
                        <ul style={styles.nextStepsList}>
                            <li style={styles.nextStepItem}><Search size={20} style={styles.nextStepIcon}/> Review your goals and credit profile</li>
                            <li style={styles.nextStepItem}><BarChart2 size={20} style={styles.nextStepIcon}/> Choose the best funding path</li>
                            <li style={styles.nextStepItem}><Settings size={20} style={styles.nextStepIcon}/> Set up your private payment system</li>
                        </ul>
                        <div style={styles.ctaButtonWrapper}>
                            <div style={styles.investmentInfo}>
                                <DollarSign size={24} />
                                <span>Session: <strong>$49</strong></span>
                            </div>
                            <motion.button
                                style={styles.ctaButton}
                                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(14, 165, 233, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => alert("Redirecting to booking page...")}
                            >
                                <Phone size={20} />
                                Contact Us Now to Book Your Slot
                                <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </motion.section>
                </motion.div>
            </main>
        </div>
    );
};

export default AboutPrivateBusiness;