import React from "react";
import styled from "styled-components";

import BejamasIcon from "icons/Bejamas";
import Link from "components/Link";
import Cart from "components/Cart";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BejamasIconWrapper>
        <Link href="/" passHref aria-label="Bejamas">
          <BejamasIcon />
        </Link>
      </BejamasIconWrapper>
      <Cart />
    </HeaderContainer>
  );
};

const BejamasIconWrapper = styled.div`
  width: 159px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 124px;
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
