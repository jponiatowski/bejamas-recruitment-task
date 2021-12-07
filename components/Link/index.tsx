import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

const Link: React.FC<NextLinkProps> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
