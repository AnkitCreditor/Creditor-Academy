
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import img1 from '../assets/anyone.jpg';
import img2 from '../assets/private.jpg';
import img3 from '../assets/BecomePrivateBanner.png';
import img4 from '../assets/junior.jpg';
import img5 from '../assets/launch.jpg';

const EmpowermentSection = () => {
  const cards = [
    {
      img: img1,
      title: 'Business Credit Mastery',
      text: 'Unlock vendor lines, revolving credit, and high-limit cards to fund your business or side hustle—without touching personal savings.'
    },
    {
      img: img2,
      title: 'Personal Credit Repair',
      text: 'Dispute, delete, and rebuild your credit profile using proven strategies that restore your financial reputation and open new doors.'
    },
    {
      img: img3,
      title: 'Become Private',
      text: 'Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.'
    },
    {
      img: img4,
      title: 'Operate Private',
      text: 'Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.'
    },
    {
      img: img5,
      title: 'Business-in-a-Box Coaching',
      text: 'Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.'
    }
  ];

  return (
    <section style={{ padding: '60px 20px', background: '#f0f9ff' }}>
      <h2 style={{
        fontSize: '2.2rem',
        textAlign: 'center',
        marginBottom: '40px',
        fontWeight: '800',
        background: 'linear-gradient(90deg, #075985, #0284c7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        What He Empowers You With
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Navigation]}
        style={{ paddingBottom: '60px' }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: '#fff',
              borderRadius: '20px',
              width: '300px',
              padding: '20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              height: '430px',
              justifyContent: 'space-between'
            }}
          >
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              height: '180px',
              marginBottom: '16px'
            }}>
              <img src={card.img} alt={card.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#0f172a'
            }}>{card.title}</h3>
            <p style={{
              fontSize: '1rem',
              color: '#334155',
              lineHeight: 1.5
            }}>{card.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EmpowermentSection; 
