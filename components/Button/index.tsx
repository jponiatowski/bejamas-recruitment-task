import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
}) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

const StyledButton = styled.button<Pick<ButtonProps, "variant">>`
  text-transform: uppercase;
  padding: 13px 39px;
  font-size: 23px;
  line-height: 25px;
  cursor: pointer;
  letter-spacing: 0.07em;

  color: #fff;
  background-color: #000;
  border: none;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: 13px 22px;
  }
`;

export default Button;
