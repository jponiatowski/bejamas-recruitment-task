import React from "react";
import styled from "styled-components";

interface PaginationItemProps {
  active: boolean;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  active,
  children,
}) => {
  return (
    <PaginationItemComponent active={active}>
      {children}
    </PaginationItemComponent>
  );
};

const PaginationItemComponent = styled.div<PaginationItemProps>`
  font-size: 29px;
  line-height: 32px;
  color: ${(p) => (p.active ? "#000000" : "#b4b4b4")};
  cursor: ${(p) => (p.active ? "not-allowed" : "pointer")};
  margin-left: 15px;

  &:nth-child(2) {
    margin-left: 0;
  }
`;

export default PaginationItem;
