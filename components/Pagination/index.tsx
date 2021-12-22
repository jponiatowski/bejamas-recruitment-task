import React from "react";
import styled from "styled-components";

import PaginationItem from "components/Pagination/PaginationItem";
import ArrowIcon from "icons/Arrow";
import usePagination from "~/hooks/usePagination";
import { limits } from "~/constants/limits";

interface PaginationProps {
  currentPage: number;
  productsCount: number;
  onPageChange: (page: number) => void;
}

interface ArrowIconWrapperProps {
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  productsCount,
  onPageChange,
}) => {
  const {
    pages,
    isFirstPage,
    isLastPage,
    pageChange,
    goToNextPage,
    goToPreviousPage,
  } = usePagination({ productsCount, currentPage, onPageChange });

  if (productsCount <= limits.PRODUCTS_PER_PAGE) {
    return <Placeholder />;
  }

  return (
    <PaginationContainer>
      <ArrowIconWrapper isFirstPage={isFirstPage} onClick={goToPreviousPage}>
        <ArrowIcon />
      </ArrowIconWrapper>
      {pages.map((page, index) => (
        <PaginationItem
          key={page}
          active={currentPage === index + 1}
          page={page}
          onPageChange={pageChange}
        />
      ))}
      <ArrowIconWrapper isLastPage={isLastPage} onClick={goToNextPage}>
        <ArrowIcon />
      </ArrowIconWrapper>
    </PaginationContainer>
  );
};

const Placeholder = styled.div`
  height: 32px;
`;

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
