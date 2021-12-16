import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const getButtonStylesByVariant = (
  variant: Required<ButtonProps["variant"]>
) => {
  if (variant === "secondary") {
    return css`
      color: #000;
      background-color: #fff;
      border: 3px solid #000;

      &:disabled {
        color: #656565;
        background-color: #fff;
        border: 3px solid #656565;
      }
    `;
  }

  return css`
    color: #fff;
    background-color: #000;
    border: none;
  `;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      className={className}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Pick<ButtonProps, "variant">>`
  text-transform: uppercase;
  padding: 13px 39px;
  font-size: 23px;
  line-height: 25px;
  cursor: pointer;
  letter-spacing: 0.07em;
  height: fit-content;

  &:disabled {
    cursor: not-allowed;
  }

  ${(p) => getButtonStylesByVariant(p.variant)}

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: 13px 22px;
  }
`;

export default Button;
