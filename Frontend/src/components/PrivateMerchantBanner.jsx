import React from 'react';
import privateMerchantFootball from '../assets/PrivateMerchantFootball.png';
import styled from 'styled-components';

const PrivateMerchantBanner = () => {
  return (
    <div>
      {/* Full-Width Responsive Banner Image */}
      <BannerContainer>
        <BannerImage 
          src={privateMerchantFootball} 
          alt="Private Merchant Football" 
        />
      </BannerContainer>

      {/* Course Introduction Video Section */}
      <VideoSection>
        <SectionTitle>
          <strong>Course Introduction Video</strong>
        </SectionTitle>
        <SectionDescription>
          Take a quick look inside the Sovereignty 101 course — and discover what makes it unlike anything you've seen before.
        </SectionDescription>
        
        <VideoContainer>
          <VideoWrapper>
            <iframe 
              src="https://drive.google.com/file/d/1XI4s_hfp3jqaqEX3wfeRKXe0ev1xml9r/preview" 
              frameBorder="0"
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Private Merchant Course Introduction"
            />
          </VideoWrapper>
        </VideoContainer>
      </VideoSection>
    </div>
  );
};

// Styled Components
const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const VideoSection = styled.section`
  padding: 80px 5%;
  background: linear-gradient(135deg, #e6f0ff, #f8fbff);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  font-size: 1.15rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto 40px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default PrivateMerchantBanner;