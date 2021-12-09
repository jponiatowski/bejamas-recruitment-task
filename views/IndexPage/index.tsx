import React from "react";
import styled from "styled-components";

import FeaturedProductSection from "views/IndexPage/Sections/FeaturedProduct";
import PremiumPhotosSection from "views/IndexPage/Sections/PremiumPhotos";

const IndexPage: React.FC = () => {
  return (
    <Main>
      <FeaturedProductSection />
      <PremiumPhotosSection />
    </Main>
  );
};

const Main = styled.main`
  padding-top: 58px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-top: 32px;
  }
`;

export default IndexPage;
