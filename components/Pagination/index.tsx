import React from "react";
import styled from "styled-components";
import { range } from "lodash";
import { useRouter } from "next/router";

import PaginationItem from "components/Pagination/PaginationItem";
import ArrowIcon from "icons/Arrow";
import Link from "~/components/Link";

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
  const router = useRouter();
  const pagesCount = React.useMemo(
    () => Math.ceil(count / limit),
    [count, limit]
  );
  const [isFirstPage, setIsFirstPage] = React.useState(currentPage === 1);
  const [isLastPage, setIsLastPage] = React.useState(
    currentPage === pagesCount
  );
  console.log(currentPage, isFirstPage);

  React.useEffect(() => {
    setIsFirstPage(currentPage === 1);
    setIsLastPage(currentPage === pagesCount);
  }, [currentPage, pagesCount]);

  if (limit >= count) {
    return null;
  }

  const pages = range(1, pagesCount + 1);

  const getPreviousPage = (): number => {
    if (isFirstPage) {
      return currentPage;
    }

    return currentPage - 1;
  };

  const getNextPage = (): number => {
    if (isLastPage) {
      return currentPage;
    }

    return currentPage + 1;
  };

  return (
    <PaginationContainer>
      <ArrowIconWrapper isFirstPage={isFirstPage}>
        <Link
          disabled={isFirstPage}
          href={`/page/${getPreviousPage()}`}
          scroll={false}
        >
          <ArrowIcon />
        </Link>
      </ArrowIconWrapper>
      {pages.map((page, index) => (
        <PaginationItem
          key={page}
          active={currentPage === index + 1}
          page={page}
        />
      ))}
      <ArrowIconWrapper isLastPage={currentPage === pagesCount}>
        <Link
          disabled={isLastPage}
          href={`/page/${getNextPage()}`}
          scroll={false}
        >
          <ArrowIcon />
        </Link>
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
