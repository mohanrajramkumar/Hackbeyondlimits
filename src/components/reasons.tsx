import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: transparent;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  min-height: 100vh; /* Make the section take full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  margin-left: 2rem; /* Added heavy margin on the left */
  margin-right: 2rem; /* Added heavy margin on the right */
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const Subtitle = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: white;
  display: block;
  margin-bottom: 0.5rem;
`;

const ReasonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem; /* Increased gap between the reasons */
  margin-top: 40px; /* Increased space between heading and reasons */
`;

const ReasonItem = styled.div<{ isRaised: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 180px;
  min-height: 220px; /* Prevent shifting */
  position: relative;
  transition: transform 0.3s ease;

  /* Fix Margin Issue */
  transform: ${({ isRaised }) =>
    isRaised ? "translateY(-10px)" : "translateY(10px)"};
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

const TextWrapper = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
`;

const reasonsData = [
  {
    icon: "🏆",
    text: "Exciting vouchers worth ₹50,000 and other attractive prizes await the top 3 teams.",
    isRaised: false,
  },
  {
    icon: "🎨",
    text: "Special awards for the best innovative idea and UI/UX design.",
    isRaised: true,
  },
  {
    icon: "🎁",
    text: "Exclusive goodies and gift vouchers for all-girls teams.",
    isRaised: false,
  },
  {
    icon: "💡",
    text: "Opportunities for idea development and funding of 25Lakhs for the most innovative ideas by companies.",
    isRaised: true,
  },
  {
    icon: "🤝",
    text: "A chance to connect with industry experts and gain mentorship to elevate your project.",
    isRaised: false,
  },
];

const ReasonsSection: React.FC = () => {
  return (
    <Section>
      <TitleWrapper>
        <Subtitle>Top Five</Subtitle>
        <Title>Reasons to Participate</Title>
      </TitleWrapper>
      <ReasonsWrapper>
        {reasonsData.map((reason, index) => (
          <ReasonItem key={index} isRaised={reason.isRaised}>
            <IconWrapper>{reason.icon}</IconWrapper>
            <TextWrapper>{reason.text}</TextWrapper>
          </ReasonItem>
        ))}
      </ReasonsWrapper>
    </Section>
  );
};

export default ReasonsSection;
