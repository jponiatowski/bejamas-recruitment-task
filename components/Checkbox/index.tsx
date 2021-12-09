import React from "react";
import styled from "styled-components";

import CheckIcon from "icons/Check";

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <Box>
      {checked && (
        <CheckIconWrapper>
          <CheckIcon />
        </CheckIconWrapper>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border: 2px solid #000000;
  cursor: pointer;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 37px;
    height: 37px;
  }
`;

const CheckIconWrapper = styled.div`
  width: 15px;
  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 20px;
  }
`;

export default Checkbox;
