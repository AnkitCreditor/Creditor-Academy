import React from 'react';
import styled from 'styled-components';
import { 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaCheck 
} from 'react-icons/fa';

const PrivateMerchantSection = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Accept Payments Privately. <br />
            Launch a Merchant Business. <br />
            <Highlight>Bring Others Into Your Private Gateway.</Highlight>
          </HeroTitle>
          <HeroDescription>
            <strong>A revolutionary course</strong> that teaches you to set up your own private payment processing system — <em>outside traditional banks</em>, beyond Stripe & PayPal. Discover a powerful new income stream.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Two Column Section */}
      <TwoColumnSection>
        {/* Problem Card */}
        <ProblemCard>
          <ProblemTitle>
            <FaExclamationTriangle />
            The Problem: Merchant Accounts Are Broken
          </ProblemTitle>
          <ProblemList>
            <li><FaCheck /> Frozen payments</li>
            <li><FaCheck /> Chargebacks with no recourse</li>
            <li><FaCheck /> KYC headaches and data exposure</li>
            <li><FaCheck /> Account shutdowns without warning</li>
            <li><FaCheck /> Zero control. High risk</li>
          </ProblemList>
          <ProblemConclusion>
            Whether you're selling online, accepting client payments, or operating as a PMA, you're at the mercy of Stripe, PayPal, Square and others. <br /><br />
            <strong>What happens when they say you're "too risky"?</strong><br />
            You lose your income overnight.
          </ProblemConclusion>
        </ProblemCard>

        {/* Solution Card */}
        <SolutionCard>
          <SolutionTitle>
            <FaCheckCircle />
            The Solution: Become Your Own Merchant
          </SolutionTitle>
          <SolutionList>
            <li><FaCheck /> Accept payments via Trust or PMA</li>
            <li><FaCheck /> Use ACH, Crypto, Invoices & Direct Transfer</li>
            <li><FaCheck /> Build a business or become a reseller</li>
          </SolutionList>
          <SolutionConclusion>
            This course doesn't just show you how to get paid.<br />
            <strong>It gives you a full private commerce system</strong> — with real docs and real business strategy.
          </SolutionConclusion>
        </SolutionCard>
      </TwoColumnSection>
    </>
  );
};

// Styled Components
const HeroSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(to bottom, #f8fafc, #e0f2fe);
  font-family: 'Segoe UI', sans-serif;
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: auto;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.3;
`;

const Highlight = styled.span`
  color: #0ea5e9;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #475569;
  max-width: 800px;
  margin: 0 auto;

  strong {
    color: #0ea5e9;
  }
`;

const TwoColumnSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 80px 5%;
  background: linear-gradient(to bottom, #e0f2fe, #f0f9ff);
  gap: 40px;
  font-family: 'Segoe UI', sans-serif;
`;

const CardBase = styled.div`
  flex: 1;
  min-width: 320px;
  background: #ffffff;
  border-radius: 14px;
  padding: 40px 30px;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProblemCard = styled(CardBase)`
  box-shadow: 0 16px 40px rgba(239, 68, 68, 0.15);
  border-left: 6px solid #ef4444;
`;

const SolutionCard = styled(CardBase)`
  box-shadow: 0 16px 40px rgba(14, 165, 233, 0.15);
  border-left: 6px solid #0ea5e9;
`;

const ProblemTitle = styled.h2`
  font-size: 2em;
  color: #ef4444;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const SolutionTitle = styled.h2`
  font-size: 2em;
  color: #0ea5e9;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const ListBase = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1rem;

  li {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;

const ProblemList = styled(ListBase)`
  color: #444;

  svg {
    fill: #ef4444;
  }
`;

const SolutionList = styled(ListBase)`
  color: #334155;

  svg {
    fill: #0ea5e9;
  }
`;

const ProblemConclusion = styled.p`
  margin-top: 25px;
  font-weight: 500;
  color: #991b1b;
  line-height: 1.6;

  strong {
    color: #dc2626;
  }
`;

const SolutionConclusion = styled.p`
  margin-top: 25px;
  font-weight: 500;
  color: #0f172a;
  line-height: 1.6;

  strong {
    color: #0ea5e9;
  }
`;

export default PrivateMerchantSection;