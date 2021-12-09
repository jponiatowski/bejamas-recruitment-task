import React from "react";
import styled from "styled-components";

import Button from "components/Button";
import {
  Photo,
  Description,
  RecommendedProducts,
  Details,
} from "components/FeaturedProduct";

interface FeaturedProductProps {}

const MOCKED_DATA = {
  //  https://www.pexels.com/photo/green-trees-near-body-of-water-207385/
  title: "Long-coated Brown Dog on Wooden Dock",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  src: "https://images.pexels.com/photos/2791684/pexels-photo-2791684.jpeg",
  alt: "Long-coated Brown Dog on Wooden Dock",
  width: 5472,
  height: 3648,
  recommendedProducts: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      alt: "dog1",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg",
      alt: "dog2",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3198032/pexels-photo-3198032.jpeg",
      alt: "dog3",
    },
  ],
};

const FeaturedProduct: React.FC<FeaturedProductProps> = () => {
  return (
    <Layout>
      <Title>{MOCKED_DATA.title}</Title>
      <AddToCartButton> Add to cart</AddToCartButton>
      <Photo
        src={MOCKED_DATA.src}
        alt={MOCKED_DATA.alt}
        width={MOCKED_DATA.width}
        height={MOCKED_DATA.height}
      />
      <Description
        title={MOCKED_DATA.title}
        description={MOCKED_DATA.description}
      />
      <RecommendedProducts
        recommendedProducts={MOCKED_DATA.recommendedProducts}
      />
      <Details />
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
