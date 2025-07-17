import React from 'react';
import styled from 'styled-components';
import { 
  FaListUl,
  FaMoneyBillWave,
  FaBuilding,
  FaFileContract,
  FaShieldAlt,
  FaBitcoin,
  FaBan,
  FaHandshake,
  FaShoppingCart,
  FaUserTie
} from 'react-icons/fa';

const CourseModulesPM = () => {
  const modules = [
    {
      icon: <FaListUl />,
      title: "1. Broken Bank Processors",
      description: "Why Stripe & PayPal don't work for private operators."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "2. Private Payment Types",
      description: "ACH, eCheck, Crypto, Invoicing — how and when to use."
    },
    {
      icon: <FaBuilding />,
      title: "3. PMA Setup Guide",
      description: "Build your own merchant system under Trust or PMA."
    },
    {
      icon: <FaFileContract />,
      title: "4. Contracts & Templates",
      description: "Pre-built tools for legal and private commerce."
    },
    {
      icon: <FaShieldAlt />,
      title: "5. Fraud Prevention",
      description: "How to stay safe and protect your data."
    },
    {
      icon: <FaBitcoin />,
      title: "6. Accepting Crypto",
      description: "Operate privately with digital assets."
    },
    {
      icon: <FaBan />,
      title: "7. Avoid Shutdowns",
      description: "Avoid aggregator bans and disruptions."
    },
    {
      icon: <FaHandshake />,
      title: "8. Client Agreements",
      description: "Create contracts that protect your business."
    },
    {
      icon: <FaShoppingCart />,
      title: "9. Private eCommerce",
      description: "Tools to run stores outside traditional systems."
    },
    {
      icon: <FaUserTie />,
      title: "10. Become a Reseller",
      description: "Launch a business helping others process privately."
    }
  ];

  return (
    <ModulesSection>
      <SectionTitle>Course Snapshot – 10 Transformational Modules</SectionTitle>
      
      <ModulesGrid>
        {modules.map((module, index) => (
          <ModuleCard key={index}>
            <IconWrapper>{module.icon}</IconWrapper>
            <ModuleTitle>{module.title}</ModuleTitle>
            <ModuleDescription>{module.description}</ModuleDescription>
          </ModuleCard>
        ))}
      </ModulesGrid>
    </ModulesSection>
  );
};

// Styled Components
const ModulesSection = styled.section`
  background: linear-gradient(to right, #d8ecff, #eef7ff);
  padding: 100px 5%;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #0056b3;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ModulesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  box-sizing: border-box;
`;

const ModuleCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,123,204,0.2);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  svg {
    width: 40px;
    height: 40px;
    fill: #007acc;
  }
`;

const ModuleTitle = styled.h3`
  color: #0056b3;
  font-size: 18px;
  margin-bottom: 8px;
`;

const ModuleDescription = styled.p`
  font-size: 14px;
`;

export default CourseModulesPM;