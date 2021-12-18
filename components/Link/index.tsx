import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  disabled?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, disabled, ...rest }) => {
  if (disabled) {
    return <span>{children}</span>;
  }

  return (
    <NextLink {...rest}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
