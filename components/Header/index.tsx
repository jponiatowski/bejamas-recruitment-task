import React from "react";
import styled from "styled-components";

import BejamasIcon from "icons/Bejamas";
import CartIcon from "icons/Cart";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BejamasIconWrapper>
        <BejamasIcon />
      </BejamasIconWrapper>
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
    </HeaderContainer>
  );
};

const BejamasIconWrapper = styled.div`
  width: 159px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 124px;
  }
`;

const CartIconWrapper = styled.div`
  width: 54px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 32px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 4px solid ${(p) => p.theme.colors.gray};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-bottom: 32px;
  }
`;

export default Header;
