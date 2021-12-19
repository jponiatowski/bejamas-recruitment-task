import React from "react";
import styled from "styled-components";

interface PaginationItemProps {
  active?: boolean;
  page: number;
  onPageChange: (page: number) => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  active,
  page,
  onPageChange,
}) => {
  const handlePageChange = () => {
    onPageChange(page);
  };

  return (
    <PaginationItemComponent active={active} onClick={handlePageChange}>
      {page}
    </PaginationItemComponent>
  );
};

const PaginationItemComponent = styled.div<Pick<PaginationItemProps, "active">>`
  font-size: 29px;
  line-height: 32px;
  color: ${(p) => (p.active ? "#000000" : "#b4b4b4")};
  cursor: ${(p) => (p.active ? "not-allowed" : "pointer")};
  margin-left: 15px;

  a {
    color: inherit;
  }

  &:nth-child(2) {
    margin-left: 0;
  }
`;

export default PaginationItem;
