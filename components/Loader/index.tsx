import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <div>loading...</div>
    </LoaderContainer>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #656565;
  width: 30px;
  height: 30px;
  animation: ${spin} 2s linear infinite;
  margin-bottom: 8px;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  height: 100%;
  grid-area: photos;
`;

export default Loader;
