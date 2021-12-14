import React from "react";
import styled from "styled-components";
import NextImage from "next/image";

import Button from "components/Button";

interface ProductProps {
  image: {
    src: string;
    alt: string;
  };
  category: string;
  title: string;
  price: number;
  bestSeller?: boolean;
}

const Product: React.FC<ProductProps> = ({ image, category, title, price }) => {
  return (
    <ProductContainer>
      <Photo>
        <NextImage
          width={280}
          height={390}
          src={image.src}
          alt={image.alt}
          layout="responsive"
        />
        <BestSeller>Best Seller</BestSeller>
        <StyledButton>Add to cart</StyledButton>
      </Photo>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Price>{`$${price}`}</Price>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const BestSeller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  line-height: 22px;
  padding: 6px 19px;
  background-color: #fff; ;
`;

const Photo = styled.div`
  width: 280px;
  height: 390px;
  position: relative;
  margin-bottom: 8px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const Category = styled.div`
  font-size: 22px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.grayDark};
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 34px;
  line-height: 37px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 29px;
  line-height: 32px;
  color: ${(p) => p.theme.colors.grayDark};
`;

export default Product;
