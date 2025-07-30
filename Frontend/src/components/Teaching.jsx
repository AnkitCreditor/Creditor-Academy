import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import img1 from '../assets/anyone.jpg';
import img2 from '../assets/private.jpg';
import img3 from '../assets/IdentitySop.jpg';
import img4 from '../assets/junior.jpg';
import img5 from '../assets/launch.jpg';

const cardData = [
  {
    image: img1,
    title: 'Personal Credit Repair',
    text: 'Dispute, delete, and rebuild negative items using process strategies designed for financial reputation and open credit.',
  },
  {
    image: img2,
    title: 'Become Private',
    text: 'Shift your legal status, file your SPC, get private EINs, and reclaim your sovereignty under the law—with full paperwork and support.',
  },
  {
    image: img3,
    title: 'Operate Private',
    text: 'Run your business through trusts, PMAs, and private contracts to shield assets, minimize taxes, and exit the public system.',
  },
  {
    image: img4,
    title: 'Business-in-a-Box Coaching',
    text: 'Plug-and-play launch plans for real businesses—like car rentals, digital agencies, and tax prep—ready to start in just days.',
  },
  {
    image: img5,
    title: 'Credit Mastery',
    text: 'Unlock secrets in revolving credit, and installment funding to launch your business or side hustle—without using personal savings.',
  },
];

const EmpowermentSlider = () => {
  return (
    <section style={{ background: '#eaf6ff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '60px', color: '#0369a1' }}>
          What He Empowers You With
        </h2>

        <div style={{ position: 'relative' }}>
          <Swiper
            effect="coverflow"
            grabCursor
            loop
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 2.2,
              slideShadows: false,
            }}
            navigation
            modules={[EffectCoverflow, Navigation]}
            style={{
              padding: '40px 20px',
              overflow: 'visible',
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: '260px',
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                  }}
                />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.4' }}>{card.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional: Custom Navigation Style Fix */}
          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #0369a1;
              top: 45%;
            }
            .swiper-button-next {
              right: 10px;
            }
            .swiper-button-prev {
              left: 10px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSlider;
