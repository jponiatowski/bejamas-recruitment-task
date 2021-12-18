import React from "react";
import styled, { css } from "styled-components";
import NextImage from "next/image";

import Button from "components/Button";
import { Product as ProductType } from "types/api";
import { useAppDispatch } from "~/store/hooks";
import { addProduct } from "store";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [showCartButton, setShowCartButton] = React.useState(false);
  const dispatch = useAppDispatch();

  const { image, category, name, price, bestseller } = product;

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  const handleShowCartButton = () => {
    setShowCartButton(true);
  };

  const handleHideCartButton = () => {
    setShowCartButton(false);
  };

  return (
    <ProductContainer>
      <Photo
        onMouseEnter={handleShowCartButton}
        onMouseLeave={handleHideCartButton}
      >
        <NextImage
          width={280}
          height={390}
          src={image.src}
          alt={image.alt}
          layout="responsive"
        />
        {bestseller && <BestSeller>Best Seller</BestSeller>}
        {
          <StyledButton onClick={handleAddProduct} show={showCartButton}>
            Add to cart
          </StyledButton>
        }
      </Photo>
      <Category>{category.name}</Category>
      <Title>{name}</Title>
      <Price>{`$${price}`}</Price>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const StyledButton = styled(Button)<{ show: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.1s linear;

  * > {
    display: none;
  }

  ${(p) =>
    p.show
      ? css`
          height: fit-content;
          padding: 13px 39px;
        `
      : css`
          height: 0px;
          padding: 0px;
        `};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    height: fit-content;
    padding: 13px 39px;
  }
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
