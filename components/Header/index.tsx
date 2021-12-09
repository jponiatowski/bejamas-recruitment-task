import React from "react";
import styled from "styled-components";

import BejamasIcon from "icons/Bejamas";
import CartIcon from "icons/Cart";
import Link from "components/Link";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BejamasIconWrapper>
        <Link href="/" passHref>
          <BejamasIcon />
        </Link>
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
  border-bottom: 4px solid ${(p) => p.theme.colors.grayLight};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: 0 18px 32px 18px;
  }
`;

export default Header;
