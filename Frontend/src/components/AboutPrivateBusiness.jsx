import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, CheckCircle, ArrowRight, DollarSign, Phone, 
  Briefcase, Star, Search, BarChart2, Settings,
  Car, Home, CreditCard, MessageSquare, ShoppingCart,
  Droplet, Mic, FileText, Calendar, BookOpen,
  Truck, Box, Camera, Activity, Bookmark,
  Coffee, Scissors, Package, Headphones, PawPrint,
  ChevronDown, ChevronUp
} from 'lucide-react';
import cardaccount from '../assets/cardaccount.jpg';
import pubiccredit from '../assets/publiccredit.jpg';
import luxurypersonal from '../assets/luxurypersonal.jpg';
import acceptpayments from '../assets/acceptpayments.jpg';
import stack from '../assets/stack.jpg';
import begin from '../assets/begin.jpg';

const AboutPrivateBusiness = () => {
    // Color scheme
    const colors = {
        primary: '#0369a1',
        primaryLight: '#e0f2fe',
        secondary: '#0ea5e9',
        dark: '#0c4a6e',
        light: '#ffffff',
        background: '#f8fafc',
        text: '#334155',
        accent: '#38bdf8',
        mutedText: '#64748b',
        success: '#10b981',
        gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)'
    };

    // Icon mapping for business ideas
    const ideaIcons = {
        "Car Rental (Turo, HyreCar)": <Car size={24} />,
        "Airbnb / Rental Arbitrage": <Home size={24} />,
        "Merchant Services / Payment Processing": <CreditCard size={24} />,
        "Coaching / Consulting": <MessageSquare size={24} />,
        "E-commerce / Dropshipping": <ShoppingCart size={24} />,
        "Cleaning Services": <Droplet size={24} />,
        "Podcast / Digital Studio": <Mic size={24} />,
        "Credit Repair / Funding Agency": <FileText size={24} />,
        "Virtual Office / Notary Services": <Calendar size={24} />,
        "Tax Prep & Bookkeeping": <BookOpen size={24} />,
        "Mobile Notary": <FileText size={24} />,
        "Box Truck Freight": <Truck size={24} />,
        "ATMs": <CreditCard size={24} />,
        "Funnel Agency": <Box size={24} />,
        "Event Rentals": <Calendar size={24} />,
        "Dispatching": <Truck size={24} />,
        "360 Photo Booths": <Camera size={24} />,
        "Supplement Brands": <Activity size={24} />,
        "Print-on-Demand": <Package size={24} />,
        "Detailing": <Droplet size={24} />,
        "Subscription Boxes": <Box size={24} />,
        "Virtual Assistants": <Headphones size={24} />,
        "Online Courses": <BookOpen size={24} />,
        "Pet Services & more.": <PawPrint size={24} />
    };

    // Image mapping for feature cards
    const featureImages = [
        cardaccount,
        pubiccredit,
        luxurypersonal,
        acceptpayments,
        stack
    ];

    // Styles definition
    const styles = {
        pageContainer: {
            backgroundColor: colors.background,
            fontFamily: "'Inter', sans-serif",
            minHeight: '100vh'
        },
        heroSection: {
            backgroundColor: colors.dark,
            color: colors.light,
            padding: '120px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)'
        },
        heroContent: {
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
        },
        heroTitle: {
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.2',
            color: colors.light,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        heroSubtitle: {
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: '600',
            color: colors.light,
            opacity: 0.9,
            marginBottom: '40px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
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
            border: `2px solid ${colors.secondary}`,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        playButton: {
            position: 'absolute',
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            padding: '20px',
            backdropFilter: 'blur(5px)',
            transition: 'transform 0.3s ease'
        },
        mainContentSection: {
            padding: '80px 20px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
        },
        infoCard: {
            backgroundColor: colors.light,
            borderRadius: '24px',
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            border: `1px solid ${colors.primaryLight}`,
            position: 'relative',
            overflow: 'hidden'
        },
        infoCardBgPattern: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.6,
            zIndex: 0
        },
        sectionTitle: {
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '700',
            color: colors.dark,
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            position: 'relative',
            paddingBottom: '16px',
            zIndex: 1
        },
        sectionTitleUnderline: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '80px',
            height: '4px',
            backgroundColor: colors.secondary,
            borderRadius: '2px'
        },
        description: {
            fontSize: '18px',
            color: colors.text,
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '800px',
            zIndex: 1,
            position: 'relative'
        },
        highlightedText: {
            color: colors.primary,
            fontWeight: '600',
            backgroundColor: colors.primaryLight,
            padding: '2px 6px',
            borderRadius: '4px'
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            position: 'relative',
            zIndex: 1
        },
        featureItem: {
            backgroundColor: colors.primaryLight,
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: `1px solid ${colors.secondary}`,
            position: 'relative',
            overflow: 'hidden'
        },
        featureImage: {
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '16px',
            border: `1px solid ${colors.secondary}`
        },
        featureIcon: {
            color: colors.primary,
            flexShrink: 0,
            marginTop: '4px',
        },
        featureText: {
            fontSize: '16px',
            color: colors.text,
            lineHeight: '1.6',
            fontWeight: '500'
        },
        businessIdeasSection: {
            marginTop: '60px',
            position: 'relative',
            zIndex: 1
        },
        businessIdeasGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px'
        },
        ideaCard: {
            backgroundColor: colors.light,
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: `1px solid ${colors.primaryLight}`,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        ideaIcon: {
            color: colors.primary,
            backgroundColor: colors.primaryLight,
            padding: '12px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        },
        ideaText: {
            fontSize: '16px',
            fontWeight: '500',
            color: colors.text
        },
        listTitle: {
            fontSize: '22px',
            fontWeight: '600',
            color: colors.dark,
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        ctaSection: {
            backgroundColor: colors.light,
            borderRadius: '24px',
            padding: '60px 40px',
            boxShadow: '0 10px 30px rgba(3, 105, 161, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
            border: `1px solid ${colors.primaryLight}`,
            position: 'relative',
            overflow: 'hidden'
        },
        ctaBgPattern: {
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.6,
            zIndex: 0
        },
        ctaTitle: {
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: '700',
            color: colors.dark,
            marginBottom: '24px',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '16px',
            zIndex: 1
        },
        ctaTitleUnderline: {
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            backgroundColor: colors.secondary,
            borderRadius: '2px'
        },
        ctaDescription: {
            fontSize: '18px',
            color: colors.text,
            lineHeight: '1.6',
            marginBottom: '32px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        },
        checklist: {
            listStyle: 'none',
            padding: 0,
            margin: '0 auto 32px',
            maxWidth: '500px',
            position: 'relative',
            zIndex: 1
        },
        checklistItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '16px',
            color: colors.text,
            marginBottom: '16px',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: colors.primaryLight,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        checklistItemBg: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: colors.success,
            opacity: 0.1,
            transition: 'width 0.6s ease'
        },
        completedItem: {
            backgroundColor: '#f0fdf4',
            color: colors.success,
            fontWeight: '500'
        },
        checkIcon: {
            color: colors.success,
            flexShrink: 0
        },
        uncheckedIcon: {
            color: colors.mutedText,
            flexShrink: 0
        },
        divider: {
            height: '1px',
            backgroundColor: colors.primaryLight,
            margin: '24px auto',
            width: '80%',
            position: 'relative',
            zIndex: 1
        },
        priceTag: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '20px',
            fontWeight: '600',
            color: colors.dark,
            marginBottom: '24px',
            position: 'relative',
            zIndex: 1
        },
        dollarIcon: {
            color: colors.secondary
        },
        ctaButton: {
            background: colors.gradient,
            color: colors.light,
            border: 'none',
            padding: '16px 32px',
            fontSize: '18px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: `0 10px 20px rgba(14, 165, 233, 0.3)`,
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden'
        },
        ctaButtonHover: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.2)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease'
        },
        featureCardContent: {
            position: 'relative',
            zIndex: 2
        },
        expandableSection: {
            marginTop: '24px',
            overflow: 'hidden'
        },
        expandButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: 'none',
            color: colors.primary,
            fontWeight: '600',
            cursor: 'pointer',
            padding: '8px 0',
            marginTop: '16px'
        },
        floatingShapes: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        },
        floatingShape: {
            position: 'absolute',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(20px)'
        },
        imageTextContainer: {
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'nowrap', // Prevent wrapping
            maxWidth: '800px',
            zIndex: 1,
            position: 'relative'
        },
        beginImage: {
            width: '300px', // Fixed width to ensure same-row layout
            height: 'auto',
            borderRadius: '12px',
            border: `1px solid ${colors.secondary}`,
            objectFit: 'cover'
        },
        textContainer: {
            flex: 1, // Allow text to take remaining space
            minWidth: 0 // Prevent overflow issues
        }
    };

    const whatYoullMaster = [
        {
            title: "Structure UBOTs to unlock vendor and card accounts (Tier 1—4)",
            image: cardaccount
        },
        {
            title: "Dispute & fix your public credit file lawfully (no third-party repair scams)",
            image: pubiccredit
        },
        {
            title: "Improve personal credit for credit cards, personal loans & mortgages",
            image: luxurypersonal
        },
        {
            title: "Accept payments privately with non-KYC merchant gateways",
            image: acceptpayments
        },
        {
            title: "Stack funding at 0% APR to launch and scale fast",
            image: stack
        }
    ];

    const top10Ideas = [
        "Car Rental (Turo, HyreCar)",
        "Airbnb / Rental Arbitrage", 
        "Merchant Services / Payment Processing",
        "Coaching / Consulting", 
        "E-commerce / Dropshipping", 
        "Cleaning Services",
        "Podcast / Digital Studio", 
        "Credit Repair / Funding Agency", 
        "Virtual Office / Notary Services",
        "Tax Prep & Bookkeeping"
    ];
    
    const plus15More = [
        "Mobile Notary", 
        "Box Truck Freight", 
        "ATMs", 
        "Funnel Agency", 
        "Event Rentals", 
        "Dispatching",
        "360 Photo Booths", 
        "Supplement Brands", 
        "Print-on-Demand", 
        "Detailing", 
        "Subscription Boxes",
        "Virtual Assistants", 
        "Online Courses", 
        "Pet Services & more."
    ];

    const checklistItems = [
        { text: "Review your goals and credit profile", completed: false },
        { text: "Choose the best funding path", completed: false },
        { text: "Set up your private payment system", completed: true }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const scaleUp = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const [expandedIdeas, setExpandedIdeas] = React.useState(false);

    // Floating shapes for background decoration
    const floatingShapes = [
        { size: '150px', color: colors.primary, top: '10%', left: '5%', animationDelay: '0s' },
        { size: '200px', color: colors.secondary, top: '60%', left: '80%', animationDelay: '2s' },
        { size: '100px', color: colors.accent, top: '30%', left: '70%', animationDelay: '1s' },
        { size: '180px', color: colors.primary, top: '70%', left: '10%', animationDelay: '3s' }
    ];

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <motion.h1
                        style={styles.heroTitle}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.3, 1] }}
                    >
                        SENIOR: Private Business Credit
                    </motion.h1>
                    <motion.p
                        style={styles.heroSubtitle}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.3, 1] }}
                    >
                        Build $200K+ in Business Credit — No SSN. No PG. No Banks.
                    </motion.p>
                    <motion.div
                        style={styles.videoPlaceholder}
                        whileHover={{ scale: 1.02, boxShadow: `0 25px 50px rgba(0, 0, 0, 0.4)` }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
                        onClick={() => alert("Video player will be implemented here.")}
                    >
                        <motion.div 
                            style={styles.playButton}
                            whileHover={{ scale: 1.1 }}
                        >
                            <PlayCircle size={60} color={colors.light} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.2), rgba(14, 165, 233, 0.1))',
                                zIndex: 1
                            }}
                        />
                    </motion.div>
                </div>
                
                {/* Floating background shapes */}
                <div style={styles.floatingShapes}>
                    {floatingShapes.map((shape, index) => (
                        <motion.div
                            key={index}
                            style={{
                                ...styles.floatingShape,
                                width: shape.size,
                                height: shape.size,
                                backgroundColor: shape.color,
                                top: shape.top,
                                left: shape.left
                            }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0]
                            }}
                            transition={{
                                duration: 10 + index * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: parseFloat(shape.animationDelay)
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Main Content Section */}
            <main style={styles.mainContentSection}>
                <motion.div
                    style={styles.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.section 
                        style={styles.infoCard}
                        variants={scaleUp}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={styles.infoCardBgPattern} />
                        
                        <motion.div 
                            style={styles.imageTextContainer}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.img 
                                src={begin} 
                                alt="Financial Sovereignty"
                                style={styles.beginImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            />
                            <div style={styles.textContainer}>
                                <div style={styles.description}>
                                    This isn't just funding. It's <span style={styles.highlightedText}>financial sovereignty</span>.<br />
                                    You'll learn how to build business credit using <span style={styles.highlightedText}>UBOT Trusts</span>, fix your personal credit through our "<span style={styles.highlightedText}>I Want Remedy Now</span>" system, and set up Private Merchant Processing — no banks, no KYC, no shutdowns.
                                </div>
                            </div>
                        </motion.div>
                        
                        <div>
                            <motion.h2 
                                style={styles.sectionTitle}
                                variants={slideUp}
                            >
                                <motion.span
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <CheckCircle size={32} color={colors.secondary} />
                                </motion.span>
                                What You'll Master:
                                <span style={styles.sectionTitleUnderline}></span>
                            </motion.h2>
                            
                            <motion.div
                                style={styles.featuresGrid}
                                variants={containerVariants}
                            >
                                {whatYoullMaster.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        style={styles.featureItem}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            y: -10,
                                            boxShadow: `0 15px 30px rgba(3, 105, 161, 0.15)`
                                        }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <div style={styles.featureCardContent}>
                                            <motion.img 
                                                src={feature.image} 
                                                alt={feature.title}
                                                style={styles.featureImage}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.03 }}
                                            />
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <CheckCircle size={24} style={styles.featureIcon} />
                                                </motion.div>
                                                <p style={styles.featureText}>{feature.title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <div style={styles.businessIdeasSection}>
                            <div>
                                <motion.h2 
                                    style={styles.sectionTitle}
                                    variants={slideUp}
                                >
                                    <motion.span
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <Briefcase size={32} color={colors.secondary} />
                                    </motion.span>
                                    Launch These Businesses Using Business Credit:
                                    <span style={styles.sectionTitleUnderline}></span>
                                </motion.h2>
                                
                                <motion.h3 
                                    style={styles.listTitle}
                                    variants={fadeIn}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <Star size={20} color={colors.secondary} />
                                    </motion.span>
                                    Top 10 Ideas:
                                </motion.h3>
                                <motion.div
                                    style={styles.businessIdeasGrid}
                                    variants={containerVariants}
                                >
                                    {top10Ideas.map((idea, index) => (
                                        <motion.div
                                            key={`top10-${index}`}
                                            style={styles.ideaCard}
                                            variants={itemVariants}
                                            whileHover={{ 
                                                y: -5,
                                                boxShadow: `0 8px 20px rgba(3, 105, 161, 0.15)`
                                            }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <motion.div 
                                                style={styles.ideaIcon}
                                                whileHover={{ rotate: 10 }}
                                            >
                                                {ideaIcons[idea]}
                                            </motion.div>
                                            <p style={styles.ideaText}>{idea}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                
                                <motion.div
                                    style={styles.expandableSection}
                                    initial={{ height: expandedIdeas ? 'auto' : 0 }}
                                    animate={{ height: expandedIdeas ? 'auto' : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <motion.h3 
                                        style={{...styles.listTitle, marginTop: '40px'}}
                                        variants={fadeIn}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Star size={20} color={colors.secondary} />
                                        + 15 More Ideas:
                                    </motion.h3>
                                    <motion.div
                                        style={styles.businessIdeasGrid}
                                        variants={containerVariants}
                                    >
                                        {plus15More.map((idea, index) => (
                                            <motion.div
                                                key={`plus15-${index}`}
                                                style={styles.ideaCard}
                                                variants={itemVariants}
                                                whileHover={{ 
                                                    y: -5,
                                                    boxShadow: `0 8px 20px rgba(3, 105, 161, 0.15)`
                                                }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                <motion.div 
                                                    style={styles.ideaIcon}
                                                    whileHover={{ rotate: 10 }}
                                                >
                                                    {ideaIcons[idea]}
                                                </motion.div>
                                                <p style={styles.ideaText}>{idea}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                                
                                <button 
                                    style={styles.expandButton}
                                    onClick={() => setExpandedIdeas(!expandedIdeas)}
                                >
                                    {expandedIdeas ? (
                                        <>
                                            <ChevronUp size={18} />
                                            Show Less Ideas
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown size={18} />
                                            Show More Ideas
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.section>

                    {/* Next Step / CTA Section */}
                    <motion.section
                        style={styles.ctaSection}
                        variants={scaleUp}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={styles.ctaBgPattern} />
                        <div style={styles.floatingShapes}>
                            {floatingShapes.slice(0, 2).map((shape, index) => (
                                <motion.div
                                    key={`cta-${index}`}
                                    style={{
                                        ...styles.floatingShape,
                                        width: shape.size,
                                        height: shape.size,
                                        backgroundColor: shape.color,
                                        top: shape.top,
                                        left: shape.left
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        x: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 10 + index * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: parseFloat(shape.animationDelay)
                                    }}
                                />
                            ))}
                        </div>
                        
                        <motion.h2 
                            style={styles.ctaTitle}
                            variants={slideUp}
                        >
                            Next Step:
                            <span style={styles.ctaTitleUnderline}></span>
                        </motion.h2>
                        
                        <motion.p 
                            style={styles.ctaDescription}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            Book your $49 Roadmap Session, complete your Business Credit Scorecard, and meet your assigned counselor to:
                        </motion.p>
                        
                        <motion.ul 
                            style={styles.checklist}
                            variants={containerVariants}
                        >
                            {checklistItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    style={{
                                        ...styles.checklistItem,
                                        ...(item.completed ? styles.completedItem : {})
                                    }}
                                    whileHover={{ x: 5 }}
                                    variants={itemVariants}
                                >
                                    {item.completed ? (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 500 }}
                                        >
                                            <CheckCircle size={20} style={styles.checkIcon} />
                                        </motion.div>
                                    ) : (
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '4px',
                                            border: `2px solid ${colors.mutedText}`,
                                            flexShrink: 0
                                        }} />
                                    )}
                                    {item.text}
                                    {item.completed && (
                                        <motion.div 
                                            style={styles.checklistItemBg}
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>
                        
                        <div style={styles.divider}></div>
                        
                        <motion.div 
                            style={styles.priceTag}
                            variants={fadeIn}
                            transition={{ delay: 0.4 }}
                        >
                            <DollarSign size={24} style={styles.dollarIcon} />
                            <span>Session: <strong>$49</strong></span>
                        </motion.div>
                        
                        <motion.button
                            style={styles.ctaButton}
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: `0 15px 30px rgba(14, 165, 233, 0.4)`
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => alert("Redirecting to booking page...")}
                            variants={slideUp}
                            transition={{ delay: 0.6 }}
                        >
                            <Phone size={20} />
                            Contact Us Now to Book Your Slot
                            <ArrowRight size={20} />
                            <motion.span 
                                style={styles.ctaButtonHover}
                                whileHover={{ transform: 'translateX(100%)' }}
                            />
                        </motion.button>
                    </motion.section>
                </motion.div>
            </main>
        </div>
    );
};

export default AboutPrivateBusiness;