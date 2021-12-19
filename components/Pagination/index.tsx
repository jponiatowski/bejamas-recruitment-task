import React from "react";
import styled from "styled-components";
import { range } from "lodash";
import { useRouter } from "next/router";

import PaginationItem from "components/Pagination/PaginationItem";
import ArrowIcon from "icons/Arrow";
import usePagination from "~/hooks/usePagination";

interface PaginationProps {
  count: number;
}

interface ArrowIconWrapperProps {
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const {
    pages,
    limit,
    currentPage,
    isFirstPage,
    isLastPage,
    handlePageChange,
    handleGoToNextPage,
    handleGoToPreviousPage,
  } = usePagination(count);

  if (count <= limit) {
    return null;
  }

  return (
    <PaginationContainer>
      <ArrowIconWrapper
        isFirstPage={isFirstPage}
        onClick={handleGoToPreviousPage}
      >
        <ArrowIcon />
      </ArrowIconWrapper>
      {pages.map((page, index) => (
        <PaginationItem
          key={page}
          active={currentPage === index + 1}
          page={page}
          onPageChange={handlePageChange}
        />
      ))}
      <ArrowIconWrapper isLastPage={isLastPage} onClick={handleGoToNextPage}>
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
