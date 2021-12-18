import React from "react";
import styled from "styled-components";
import NextImage from "next/image";

import { FeaturedProduct } from "types/api";

interface RecommendedProducts {
  recommendedProducts: FeaturedProduct["recommendeds"];
}

export const RecommendedProducts: React.FC<RecommendedProducts> = ({
  recommendedProducts,
}) => {
  if (!recommendedProducts.length) {
    return null;
  }

  return (
    <RecommendedProductsContainer>
      <RecommendedHeader>People also buy</RecommendedHeader>
      <RecommendedGrid>
        {recommendedProducts.map((product) => (
          <Figure key={product.productByRecommendedProductId.id}>
            <NextImage
              src={product.productByRecommendedProductId.image.src}
              alt={product.productByRecommendedProductId.image.alt}
              width={117}
              height={147}
              layout="responsive"
            />
          </Figure>
        ))}
      </RecommendedGrid>
    </RecommendedProductsContainer>
  );
};

const Figure = styled.figure`
  width: 117px;
  height: 147px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 97px;
    height: 122px;
  }
`;

const RecommendedProductsContainer = styled.div`
  grid-area: recommended;
  margin-bottom: 54px;
`;
const RecommendedHeader = styled.h2`
  text-align: right;
  font-size: 22px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 27px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

const RecommendedGrid = styled.div`
  justify-content: end;
  display: grid;
  grid-template-columns: repeat(3, 117px);
  grid-gap: 30px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    justify-content: start;
    grid-template-columns: repeat(auto-fill, 97px);
  }
`;

export default RecommendedProducts;
