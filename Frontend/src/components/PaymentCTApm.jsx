import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
            <CTAButton to="/masterclass">
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

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subheading = styled.p`
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  max-width: 720px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 15px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
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

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #333333;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background-color: #1f7ae0;
  color: #ffffff;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 12px rgba(31, 122, 224, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export default PaymentCTA;