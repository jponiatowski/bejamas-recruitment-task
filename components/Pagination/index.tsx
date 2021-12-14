import React from "react";
import styled from "styled-components";

import PaginationItem from "components/Pagination/PaginationItem";
import ArrowIcon from "icons/Arrow";

interface PaginationProps {
  count: number;
  limit: number;
  currentPage: number;
}

interface ArrowIconWrapperProps {
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  limit,
  currentPage,
}) => {
  const pagesCount = React.useMemo(
    () => Math.ceil(count / limit),
    [count, limit]
  );

  if (limit >= count) {
    return null;
  }

  const pages = Array.from(Array(pagesCount), (_, index) => index + 1);

  return (
    <PaginationContainer>
      <ArrowIconWrapper isFirstPage={currentPage === 1}>
        <ArrowIcon />
      </ArrowIconWrapper>
      {pages.map((page, index) => (
        <PaginationItem key={page} active={currentPage === index + 1}>
          {page}
        </PaginationItem>
      ))}
      <ArrowIconWrapper isLastPage={currentPage === pagesCount}>
        <ArrowIcon />
      </ArrowIconWrapper>
    </PaginationContainer>
  );
};

const ArrowIconWrapper = styled.div<ArrowIconWrapperProps>`
  height: 16px;

  /* Arrow left */
  &:first-child {
    transform: rotate(90deg);
    margin-right: 15px;
    cursor: ${(p) => (p.isFirstPage ? "not-allowed" : "pointer")};
  }

  /* Arrow right */
  &:last-child {
    transform: rotate(-90deg);
    margin-left: 15px;
    cursor: ${(p) => (p.isLastPage ? "not-allowed" : "pointer")};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: pagination;
  width: 100%;
`;

export default Pagination;
