import React from "react";
import styled from "styled-components";

interface DescriptionProps {
  title: string;
  description: string;
}

export const Description: React.FC<DescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <DescriptionContainer>
      <AboutHeader>{`About the ${title}`}</AboutHeader>
      <DescriptionComponent dangerouslySetInnerHTML={{ __html: description }} />
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  grid-area: description;
`;

const AboutHeader = styled.h2`
  font-size: 22px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 9px;
`;

const DescriptionComponent = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: ${(p) => p.theme.colors.grayDark};
  margin-bottom: 30px;

  * {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default Description;
