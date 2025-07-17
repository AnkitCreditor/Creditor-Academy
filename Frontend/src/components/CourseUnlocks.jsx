import React from 'react';
import styled from 'styled-components';
import { 
  FaTrophy,
  FaFileDownload,
  FaSearch,
  FaMobileAlt,
  FaBookOpen
} from 'react-icons/fa';
import lmsPreview from '../assets/lms.jpg'; // Make sure to add this image to your assets

const CourseUnlocks = () => {
  const unlockItems = [
    {
      icon: <FaTrophy size={20} />,
      text: "Complete challenges to earn XP and access the modules"
    },
    {
      icon: <FaFileDownload size={20} />,
      text: "Download 100+ templates & contracts"
    },
    {
      icon: <FaSearch size={20} />,
      text: "Join optional reseller mentorship + toolkits"
    },
    {
      icon: <FaMobileAlt size={20} />,
      text: "Access everything on mobile 24/7"
    }
  ];

  return (
    <UnlocksSection>
      <UnlocksContainer>
        {/* Text Column */}
        <TextColumn>
          <SectionTitle>
            This Course Unlocks Inside Your<br />
            <Highlight>Creditor Academy LMS</Highlight>
          </SectionTitle>
          
          <UnlockItems>
            {unlockItems.map((item, index) => (
              <UnlockItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                <UnlockText>{item.text}</UnlockText>
              </UnlockItem>
            ))}
          </UnlockItems>

          <EnrollBadge>
            Enroll once. Operate forever.
          </EnrollBadge>
        </TextColumn>

        {/* Highlight Card */}
        <HighlightCard>
          <PreviewImage src={lmsPreview} alt="LMS Preview" />
          <CardTitle>Inside the LMS Portal</CardTitle>
          <CardDescription>
            Get full access to all modules, templates, and live mentorship tools — all optimized for desktop and mobile. You're not just joining a course, you're unlocking a system built for sovereign service providers.
          </CardDescription>
          <DecorativeIcon>
            <FaBookOpen size={180} />
          </DecorativeIcon>
        </HighlightCard>
      </UnlocksContainer>
    </UnlocksSection>
  );
};

// Styled Components
const UnlocksSection = styled.div`
  padding: 100px 5%;
  background: linear-gradient(to right, #ffffff, #eef5ff);
  font-family: 'Poppins', sans-serif;
`;

const UnlocksContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 40px;
`;

const TextColumn = styled.div`
  flex: 1 1 480px;
  min-width: 300px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 20px;
  line-height: 1.3;
`;

const Highlight = styled.span`
  color: #3498db;
`;

const UnlockItems = styled.div`
  margin-top: 30px;
`;

const UnlockItem = styled.div`
  margin-bottom: 20px;
  padding: 16px 20px;
  background-color: #f4f6f8;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  color: #0056b3;
`;

const UnlockText = styled.div`
  color: #2c3e50;
  font-size: 15px;
`;

const EnrollBadge = styled.div`
  display: inline-block;
  padding: 14px 24px;
  background-color: #eef5ff;
  border: 2px solid #3498db;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 500;
  color: #0056b3;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  cursor: default;

  &:hover {
    background-color: #d6eaff;
    transform: scale(1.02);
  }
`;

const HighlightCard = styled.div`
  flex: 1 1 400px;
  min-width: 300px;
  background: linear-gradient(145deg, #eef5ff, #d8eefe);
  padding: 40px;
  border-radius: 20px;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 16px;
  display: block;
  margin: 0 auto 20px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0056b3;
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #444;
`;

const DecorativeIcon = styled.div`
  position: absolute;
  bottom: -40px;
  right: -40px;
  opacity: 0.05;
  color: #2c3e50;
`;

export default CourseUnlocks;