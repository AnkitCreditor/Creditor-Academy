import React, { useEffect, useState } from 'react';

const RemedyOfferSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 800) setVisible(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Pulse keyframes injected into the page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseZoom {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.08); }
        }

        .pulse-zoom {
        animation: pulseZoom 2.5s infinite;
        }

        .animate-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(41, 121, 255, 0.4);
        }
    `;
    document.head.appendChild(style);
    return () => {
        document.head.removeChild(style);
    };
    }, []);


  const fadeIn = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    animation: visible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
  };

  return (
    <>
      {/* Take the First Step Section */}
      <section
        style={{
          padding: '80px 6%',
          background: 'linear-gradient(to bottom, #f0f4f8, #e0f2fe)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            background: '#ffffffcc',
            borderRadius: '16px',
            padding: '50px 30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            ...fadeIn,
          }}
        >
          <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '20px' }}>
            <span style={{ color: 'rgb(53, 152, 219)' }}>
              <strong> TAKE THE FIRST STEP TO REMEDY</strong>
            </span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '18px' }}>
            It’s time to stop being the debtor — and start being the decision-maker.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '18px' }}>
            Don’t beg the system for forgiveness.
            <br />
            <span style={{ color: 'rgb(53, 152, 219)' }}>
              <strong>Command your remedy with confidence.</strong>
            </span>
          </p>
          <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '30px' }}>
            Let’s fix your credit the right way — the lawful way — starting now.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 600, marginBottom: '10px' }}>
            <span style={{ color: 'rgb(53, 152, 219)' }}>Creditors Academy</span>
          </p>
          <p style={{ fontSize: '1.05rem', color: '#475569', fontStyle: 'italic' }}>
            Where Knowledge Becomes Power.
          </p>
        </div>
      </section>

      {/* What You'll Learn + Offer */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '60px 6%',
          maxWidth: '1200px',
          margin: 'auto',
          fontFamily: "'Poppins', sans-serif",
          ...fadeIn,
        }}
      >
        {/* What You'll Learn */}
        <div
        style={{
            flex: 1,
            minWidth: '300px',
            paddingRight: '30px',
            marginBottom: '30px',
            animation: visible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
        }}
        >
        <h2 style={{
            fontSize: '2em',
            color: '#0f172a',
            fontWeight: 700,
            marginBottom: '30px',
            borderBottom: '2px solid rgba(0, 86, 179, 0.2)',
            paddingBottom: '10px'
        }}>
            <span style={{ color: '#34495e' }}>
            What You'll <span style={{ color: 'rgb(0, 86, 179)' }}>Learn</span>
            </span>
        </h2>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
            { title: 'Step-by-step Credit Repair Blueprint', desc: 'Remove negative items and rebuild credit step-by-step.' },
            { title: 'Credit Monitoring Tools & Strategies', desc: 'Track and protect your credit using expert tools.' },
            { title: 'Debt Negotiation Techniques', desc: 'Learn how to settle debts legally and save thousands.' },
            { title: 'Building Positive Credit History', desc: 'Establish habits that boost long-term credit health.' },
            { title: 'Your Legal Rights & Protections', desc: 'Understand and use credit laws to your advantage.' },
            ].map((item, idx) => (
            <li
                key={idx}
                style={{
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                background: '#f9fafe',
                padding: '18px 20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <span
                style={{
                    marginRight: '16px',
                    background: '#28a745',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(40,167,69,0.3)',
                    flexShrink: 0
                }}
                >
                <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                    <path d="M13.485 1.929a1 1 0 010 1.414L6.414 10.414 2.515 6.515a1 1 0 10-1.414 1.414l4.95 4.95a1 1 0 001.414 0l7.95-7.95a1 1 0 10-1.414-1.414z" />
                </svg>
                </span>
                <div style={{ color: '#334155' }}>
                <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '0.95rem', color: '#64748b' }}>{item.desc}</div>
                </div>
            </li>
            ))}
        </ul>
        </div>


        {/* Offer Box */}
        <div style={{ flex: 1, minWidth: '400px', paddingLeft: '30px', paddingTop: '100px'}}>
          <div
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '30px 20px',
              borderRadius: '16px',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '25px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,123,255,0.2)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0,153,255,0.7), rgba(0,191,255,0.5))',
                borderRadius: '16px',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <svg width="60" height="40" viewBox="0 0 24 16" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
                <rect x="2" y="2" width="20" height="12" rx="2" fill="white" opacity="0.9" />
                <rect x="6" y="6" width="12" height="2" fill="#00bfff" />
                <rect x="6" y="10" width="8" height="1" fill="#00bfff" opacity="0.7" />
              </svg>

              <div
                style={{
                  marginTop: '15px',
                  fontWeight: 'bold',
                  fontSize: '1.4em',
                  animation: 'pulseZoom 2s infinite',
                }}
              >
                Credit Score: <span style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '2px 10px',
                  borderRadius: '20px'
                }}>750+</span>
              </div>
            </div>
          </div>

          <h3 style={{ margin: '10px 0', fontSize: '1.5em', textAlign: 'center', color: '#000', position: 'relative' }}>
            <span style={{ position: 'relative', zIndex: 2, padding: '0 10px', background: 'white' }}>
              Transform Your Financial Future
            </span>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #00bfff, transparent)',
              zIndex: 1
            }} />
          </h3>

          <p style={{ color: '#666', marginBottom: '15px', textAlign: 'center', fontSize: '1.05em' }}>
            Unlock the path to better credit—offline, hands-on, and fully supported.
          </p>

          <div style={{ position: 'relative', margin: '25px 0', textAlign: 'center' }}>
            <div style={{
              fontSize: '2.8em',
              fontWeight: 'bold',
              color: '#00bfff',
              animation: 'pulseZoom 2.5s infinite'
            }}>
              <span style={{ color: 'rgb(53, 152, 219)' }}>$399</span>
            </div>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '20%',
              background: '#ff4757',
              color: 'white',
              padding: '3px 15px',
              borderRadius: '20px',
              fontSize: '0.7em',
              fontWeight: 'bold',
              transform: 'rotate(10deg)',
              boxShadow: '0 3px 8px rgba(255,71,87,0.3)',
            }}>
              SAVE $200
            </div>
            <div style={{
              textDecoration: 'line-through',
              color: '#999',
              fontSize: '1.2em',
              marginTop: '5px',
            }}>
              <strong style={{ color: 'rgb(35, 111, 161)' }}>$597</strong>
            </div>
          </div>

          <a
            href="https://www.creditoracademy.com/page/show/153618?portal_id=14800"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              className="animate-button"
              style={{
                background: 'linear-gradient(to right, #00bfff, #2979ff)',
                color: 'white',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                padding: '16px 20px',
                fontSize: '1.1em',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 5px 15px rgba(41,121,255,0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              Enroll Now – Limited Seats
            </button>
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            fontSize: '0.85em',
            color: '#666'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#2ed573" style={{ marginRight: '8px' }}>
              <path d="M12 2L15 8H21L16 12L19 18L12 14L5 18L8 12L3 8H9L12 2Z" />
            </svg>
            <span style={{ borderRight: '1px solid #ddd', paddingRight: '12px', marginRight: '12px' }}>
              Learn. Apply. Transform.
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffc107" style={{ marginRight: '8px' }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Secure Payment
          </div>
        </div>
      </section>

      {/* Remedy Course Features Section */}
      <div style={{ padding: '20px 6%', background: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>
        {/* Section Title */}
        <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: '15px' }}>
            <span style={{ color: 'rgb(126, 140, 141)' }}>
                <strong>The <span style={{ color: 'rgb(53, 152, 219)' }}>Course</span> They Never Wanted You to Find…</strong>
            </span>
            </h2>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1200px', margin: 'auto' }}>
            {[
            {
                icon: `<path d="M7 10h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 14h2v2H7v-2zm4 0h2v2h-2v-2zM3 4h1V2h2v2h10V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 16h18V8H3v12z" />`,
                title: '1‑Month Guided Journey',
                desc: 'Track progress & daily actions to stay consistent.',
            },
            {
                icon: `<path d="M12 14a4 4 0 0 0 4-4V5a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4zm6-4a6 6 0 0 1-12 0H4a8 8 0 0 0 16 0h-2zM11 19.92V22h2v-2.08A9.97 9.97 0 0 0 20 12h-2a8 8 0 0 1-16 0H2a9.97 9.97 0 0 0 9 7.92z" />`,
                title: '11 Studio Lessons',
                desc: 'Voice-guided, self-paced lessons with clarity.',
            },
            {
                icon: `<path d="M12 2a10 10 0 0 0-10 10c0 4.41 2.85 8.13 6.81 9.45L9 22v-2.06c0-.31.2-.59.49-.68A7.98 7.98 0 0 1 4 12a8 8 0 1 1 16 0c0 3.53-2.3 6.5-5.49 7.26-.29.09-.49.37-.49.68V22l.19-.55A10 10 0 0 0 12 2z" />`,
                title: 'AI Remedy ChatBot',
                desc: 'Instant guidance when you need it most.',
            },
            {
                icon: `<path d="M4 2h14l4 4v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm13 7H7v2h10V9zm0 4H7v2h10v-2zm-4 4H7v2h6v-2z" />`,
                title: 'Pre‑Filled Templates',
                desc: 'Credit disputes, UCCs & acceptance forms done for you.',
            },
            {
                icon: `<path d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1 12H5V6h5.17L12 7.83V8h7v10z" />`,
                title: 'Downloadable Forms',
                desc: 'Negotiation, deletion & discharge paperwork.',
            },
            {
                icon: `<path d="M19 2H8a2 2 0 0 0-2 2v16a1 1 0 0 0 1.6.8L12 18l4.4 2.8A1 1 0 0 0 18 20V4a2 2 0 0 0-2-2zm0 16.92l-3.4-2.16a1 1 0 0 0-1.2 0L10 18.92V4h9v14.92z" />`,
                title: 'Credit Stack Playbooks',
                desc: 'Structured methods for building elite credit profiles.',
            },
            {
                icon: `<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-3.33 0-10 1.66-10 5v3h20v-3c0-3.34-6.67-5-10-5z" />`,
                title: 'Reliable Customer Support',
                desc: 'Real people, real answers — around the clock.',
            },
            {
                icon: `<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 7.82L5.74 9 12 5.18 18.26 9 12 10.82zM11 12h2v9h-2v-9z" />`,
                title: 'Certificate of Completion',
                desc: 'Earn official proof of your Remedy mastery.',
            }
            ].map((card, idx) => (
            <div
                key={idx}
                style={{
                width: '280px',
                background: '#eef5ff',
                borderRadius: '12px',
                padding: '25px 20px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                textAlign: 'center',
                transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
                <div style={{ marginBottom: '15px' }}>
                <svg width="40" height="40" fill="#0056b3" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: card.icon }} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#0056b3', marginBottom: '10px' }}>{card.title}</h4>
                <p style={{ fontSize: '0.95rem', color: '#595f66' }}>{card.desc}</p>
            </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RemedyOfferSection;
