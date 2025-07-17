import React from 'react';
import styled from 'styled-components';
import masterclassImage from '../assets/masteclassmembership.png';

const PaymentCTA = () => {
  return (
    <CTASection>
      {/* Decorative Circles */}
      <CircleTop />
      <CircleBottom />
      
      {/* Content */}
      <ContentWrapper>
        <Heading>Ready to Accept Payments Privately — and Build a New Income Stream?</Heading>
        <Subheading>
          Choose your path to unlock the Private Merchant course and begin building your financial sovereignty.
        </Subheading>
        
        <Card>
          <BannerImage src={masterclassImage} alt="Join Masterclass Banner" />
          <CardContent>
            <CardTitle>Join the Master Class</CardTitle>
            <CardDescription>
              Get full access to the Private Merchant course and all premium content when you become a Master Class Member.
            </CardDescription>
            <CTAButton 
              href="https://www.creditoracademy.com/page/show/152454?portal_id=14800" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join the Master Class
            </CTAButton>
          </CardContent>
        </Card>
      </ContentWrapper>
    </CTASection>
  );
};

// Styled Components
const CTASection = styled.section`
  position: relative;
  background: linear-gradient(to right, #f0f8ff, #dceeff, #e6f2ff);
  padding: 100px 5%;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const CircleTop = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 120px;
  height: 120px;
  background: rgba(160, 205, 255, 0.3);
  border-radius: 50%;
  z-index: 1;
`;

const CircleBottom = styled.div`
  position: absolute;
  bottom: -70px;
  right: -70px;
  width: 160px;
  height: 160px;
  background: rgba(160, 205, 255, 0.2);
  border-radius: 50%;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #0056b3;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  max-width: 720px;
  margin: 0 auto 40px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  margin: 0 auto;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const CardContent = styled.div`
  padding: 30px 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #0056b3;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #333333;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background-color: #1f7ae0;
  color: #ffffff;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default PaymentCTA;