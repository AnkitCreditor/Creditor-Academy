import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const SOVtestimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Lauren R., Florida",
      quote: `"The ID aren't just symbolic — they're powerful. When I wear mine, I'm not guessing anymore. I know."`,
      rating: 5
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Carlos J., Nevada",
      quote: `"New SOV 101 broke down American history in a way no school or law professor ever did. It woke me up."`,
      rating: 5
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Travis P., New York",
      quote: `"This course didn't flood me with forms. It gave me <strong style="color: #e67e22;">foundation</strong>. Now I'm walking into the Private with clarity."`,
      rating: 5
    }
  ];

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'none';
  };

  return (
    <div>
      {/* Video Section */}
      <div style={{ 
        width: '100%', 
        maxWidth: '960px', 
        margin: '40px auto', 
        borderRadius: '20px', 
        overflow: 'hidden', 
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' 
      }}>
        <div style={{ 
          position: 'relative', 
          paddingTop: '56.25%', 
          height: '0' 
        }}>
          <iframe 
            style={{ 
              position: 'absolute', 
              top: '0', 
              left: '0', 
              width: '100%', 
              height: '100%', 
              border: 'none' 
            }} 
            src="https://www.youtube.com/embed/u3CIJLohMS0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            title="Sovereignty 101 Course Video"
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #e6f0ff, #cce0ff)', 
        color: '#2c3e50', 
        padding: '80px 5%', 
        textAlign: 'center', 
        fontFamily: "'Poppins', sans-serif", 
        boxSizing: 'border-box' 
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '50px', 
          position: 'relative', 
          display: 'inline-block' 
        }}>
          <strong>What Our Students Are Saying </strong>
          <span style={{ 
            position: 'absolute', 
            bottom: '-15px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #3498db, #5dade2)', 
            borderRadius: '2px' 
          }}></span>
        </h2>
        
        {/* Testimonial Cards */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '30px', 
          maxWidth: '1100px', 
          margin: '0 auto' 
        }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '15px', 
                padding: '40px 30px', 
                width: '300px', 
                boxSizing: 'border-box', 
                border: '1px solid rgba(52, 152, 219, 0.3)', 
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)', 
                transition: 'transform 0.3s ease' 
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 20px', 
                border: '3px solid #3498db' 
              }}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              
              <div style={{ 
                position: 'relative', 
                marginBottom: '20px' 
              }}>
                <FaQuoteLeft style={{ 
                  position: 'absolute', 
                  top: '-30px', 
                  left: '-10px', 
                  opacity: '0.1', 
                  width: '40px', 
                  color: '#2c3e50' 
                }} />
                <p 
                  style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    fontStyle: 'italic', 
                    marginTop: '0', 
                    position: 'relative', 
                    zIndex: '1', 
                    color: '#34495e' 
                  }}
                  dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                ></p>
              </div>
              
              <p style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#3498db', 
                marginBottom: '0' 
              }}>
                — {testimonial.name}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '15px' 
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} style={{ 
                    color: '#f1c40f', 
                    fontSize: '1.2rem' 
                  }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SOVtestimonials;