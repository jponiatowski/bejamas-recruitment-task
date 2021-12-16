import React from "react";
import styled from "styled-components";

import FeaturedProductSection from "views/IndexPage/Sections/FeaturedProduct";
import PremiumPhotosSection from "views/IndexPage/Sections/PremiumPhotos";
import { FeaturedProduct, Product } from "types/api";

export interface IndexPageProps {
  featuredProduct: FeaturedProduct[];
  products: Product[];
}

const IndexPage: React.FC<IndexPageProps> = ({ featuredProduct }) => {
  return (
    <Main>
      {featuredProduct.length ? (
        <FeaturedProductSection featuredProduct={featuredProduct[0]} />
      ) : null}
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
