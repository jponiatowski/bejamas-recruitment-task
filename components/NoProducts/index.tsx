import React from "react";
import styled from "styled-components";

const NoProducts = () => (
  <NoProductsContainer>No products found</NoProductsContainer>
);

const NoProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(p) => p.theme.colors.grayDark};
  font-size: 22px;
`;

export default NoProducts;
