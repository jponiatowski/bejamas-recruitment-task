import React from "react";
import styled from "styled-components";

import FeaturedProductSection from "views/IndexPage/Sections/FeaturedProduct";

const IndexPage: React.FC = () => {
  return (
    <Main>
      <FeaturedProductSection />
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
