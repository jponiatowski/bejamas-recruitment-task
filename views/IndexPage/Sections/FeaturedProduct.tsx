import React from "react";
import styled from "styled-components";

import Button from "components/Button";
import {
  Photo,
  Description,
  RecommendedProducts,
  Details,
} from "components/FeaturedProduct";
import { useAppDispatch } from "store/hooks";
import { addProduct } from "store";
import { FeaturedProduct as FeatureProductType } from "types/api";

interface FeaturedProductProps {
  featuredProduct: FeatureProductType;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  featuredProduct,
}) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(featuredProduct));
  };

  return (
    <Layout>
      <Title>{featuredProduct.name}</Title>
      <AddToCartButton onClick={handleAddProduct}> Add to cart</AddToCartButton>
      <Photo
        src={featuredProduct.image.src}
        alt={featuredProduct.image.alt}
        width={321}
        height={192}
      />
      <Description
        title={featuredProduct.name}
        description={featuredProduct.description}
      />
      <RecommendedProducts recommendedProducts={featuredProduct.recommendeds} />
      <Details
        width={featuredProduct.image.width}
        height={featuredProduct.image.height}
        size={featuredProduct.image.size}
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
