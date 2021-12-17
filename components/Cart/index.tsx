import React from "react";
import styled from "styled-components";
import NextImage from "next/image";

import CartIcon from "icons/Cart";
import CloseIcon from "icons/Close";
import { getCartProducts } from "~/store/selectors/getCartProducts";
import { getIsCartOpen } from "~/store/selectors/getIsCartOpen";
import { zIndex } from "constants/zIndex";
import Button from "components/Button";
import { useAppSelector } from "~/store/hooks";
import { useCart } from "@hooks/useCart";

const Cart: React.FC = () => {
  const cartProducts = useAppSelector(getCartProducts);
  const isOpen = useAppSelector(getIsCartOpen);
  const { handleCloseCart, handleClear, handleToggleCart } = useCart();

  return (
    <Container>
      <CartIconButton onClick={handleToggleCart}>
        <CartIcon />
      </CartIconButton>
      {isOpen ? (
        <CartComponent>
          <CloseIconButton onClick={handleCloseCart}>
            <CloseIcon />
          </CloseIconButton>
          {cartProducts.length ? (
            cartProducts.map((product) => (
              <Product key={product.id}>
                <div>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{`${product.price}`}</ProductPrice>
                </div>
                <ProductImageWrapper>
                  <NextImage
                    src={product.image.src}
                    alt={product.image.alt}
                    layout="responsive"
                    width={product.image.width}
                    height={product.image.height}
                  />
                </ProductImageWrapper>
              </Product>
            ))
          ) : (
            <NoProducts>Brak produktów w koszyku</NoProducts>
          )}
          <StyledButton
            disabled={!cartProducts.length}
            variant="secondary"
            onClick={handleClear}
          >
            Clear
          </StyledButton>
        </CartComponent>
      ) : null}
      {cartProducts.length ? <Badge>{cartProducts.length}</Badge> : null}
    </Container>
  );
};

const NoProducts = styled.div`
  padding: 24px 0;
  margin-bottom: 25px;
  border-bottom: 1px solid #c2c2c2;
  text-align: center;
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  border-bottom: 1px solid #c2c2c2;
  padding: 24px 0;
  margin-bottom: 25px;
`;

const ProductName = styled.div`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 22px;
  white-space: nowrap;
  margin-bottom: 9px;
`;

const ProductPrice = styled.div`
  font-size: 29px;
  line-height: 32px;
  color: #656565;
`;

const ProductImageWrapper = styled.figure`
  width: 150px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  background-color: #000;
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`;

const Container = styled.div`
  position: relative;
`;

const CartComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(calc(100% + 30px));
  padding: 22px 24px;
  border: 4px solid #e4e4e4;
  background: #fff;
  z-index: ${zIndex.CART};
  width: fit-content;
`;

const CartIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 54px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 32px;
  }
`;

const CloseIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 18px;
`;

export default Cart;
