import React from "react";
import styled from "styled-components";

export const Details: React.FC = () => {
  return (
    <DetailsContainer>
      <DetailsHeader>Details</DetailsHeader>
      <Detail>Size: 1020 x 1020 pixel</Detail>
      <Detail>Size: 20 mb</Detail>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  grid-area: details;
`;

const DetailsHeader = styled.h2`
  text-align: right;
  font-size: 22px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 9px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    text-align: left;
    margin-bottom: 23px;
  }
`;

const Detail = styled.div`
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 17px;
  text-align: right;
  margin-bottom: 7px;
  color: ${(p) => p.theme.colors.grayDark};

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

export default Details;
