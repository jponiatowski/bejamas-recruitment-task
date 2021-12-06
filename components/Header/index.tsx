import React from "react";
import styled from "styled-components";

import BejamasIcon from "icons/Bejamas";
import CartIcon from "icons/Cart";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BejamasIcon />
      <CartIcon />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 4px solid ${(p) => p.theme.colors.gray}; ;
`;

export default Header;
