import React from "react";
import styled from "styled-components";

import Button from "components/Button";
import {
  Photo,
  Description,
  RecommendedProducts,
  Details,
} from "components/FeaturedProduct";
import { HomeProps } from "pages/index";

interface FeaturedProductProps extends Pick<HomeProps, "featuredProduct"> {}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  featuredProduct: { product },
}) => {
  return (
    <Layout>
      <Title>{product[0].name}</Title>
      <AddToCartButton> Add to cart</AddToCartButton>
      <Photo
        src={product[0].image.src}
        alt={product[0].image.alt}
        width={321}
        height={192}
      />
      <Description
        title={product[0].name}
        description={product[0].description}
      />
      <RecommendedProducts recommendedProducts={product[0].recommendeds} />
      <Details
        width={product[0].image.width}
        height={product[0].image.height}
        size={product[0].image.size}
      />
    </Layout>
  );
};

const Layout = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 174px;
  grid-template-areas: "title button" "photo photo" "description recommended" "description details";
  padding-bottom: 65px;
  border-bottom: 4px solid ${(p) => p.theme.colors.grayLight};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas: "title" "photo" "button" "description" "recommended" "details";
  }
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 35px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  grid-area: title;
  align-self: center;
`;

const AddToCartButton = styled(Button)`
  grid-area: button;
  width: fit-content;
  justify-self: end;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
export default FeaturedProduct;
