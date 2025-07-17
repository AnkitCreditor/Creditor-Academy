import React from 'react';
import styled from 'styled-components';
import { 
  FaListUl,
  FaExchangeAlt,
  FaBitcoin,
  FaMoneyBillWave,
  FaFolderOpen,
  FaUserTie
} from 'react-icons/fa';

const WhatYouWillLearn = () => {
  const learnItems = [
    {
      icon: <FaListUl size={32} />,
      title: "Accept Payments Privately",
      description: "Learn how to accept payments without relying on traditional banking systems."
    },
    {
      icon: <FaExchangeAlt size={32} />,
      title: "Legal Invoicing with PMA",
      description: "Create legally sound invoices and contracts under a Private Membership Association."
    },
    {
      icon: <FaBitcoin size={32} />,
      title: "Crypto, ACH & Hybrid Use",
      description: "Use cryptocurrency, ACH, and hybrid systems to remain compliant and private."
    },
    {
      icon: <FaMoneyBillWave size={32} />,
      title: "Build a Client Payment System",
      description: "Develop a professional offering and accept payments directly from clients."
    },
    {
      icon: <FaFolderOpen size={32} />,
      title: "Launch Your Merchant Business",
      description: "Start your own compliant merchant model with minimal technical setup."
    },
    {
      icon: <FaUserTie size={32} />,
      title: "Monetize This Skill",
      description: "Turn your knowledge into an income stream with proven business techniques."
    }
  ];

  return (
    <LearnSection>
      <LearnContainer>
        <SectionHeading>
          <GradientText>What You Will Learn</GradientText>
        </SectionHeading>
        <SectionSubtitle>
          By the end of this course, you'll have mastered these real-world skills:
        </SectionSubtitle>
        
        <LearnGrid>
          {learnItems.map((item, index) => (
            <LearnCard key={index}>
              <IconContainer>{item.icon}</IconContainer>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </LearnCard>
          ))}
        </LearnGrid>
      </LearnContainer>
    </LearnSection>
  );
};

// Styled Components
const LearnSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(to right, #eef5ff, #ffffff);
  font-family: 'Poppins', sans-serif;
`;

const LearnContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 10px;
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #0056b3, #3498db);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #595f66;
  margin-bottom: 50px;
`;

const LearnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const LearnCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
  color: #0056b3;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #595f66;
  font-size: 16px;
  line-height: 1.5;
`;

export default WhatYouWillLearn;