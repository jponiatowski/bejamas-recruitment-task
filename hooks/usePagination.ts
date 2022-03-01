import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { range } from "lodash";

import { limits } from "~/constants/limits";

export const usePagination = ({
  currentPage,
  productsCount,
  onPageChange,
}: {
  currentPage: number;
  productsCount: number;
  onPageChange: (page: number) => void;
}) => {
  const pagesCount = useMemo(
    () => Math.ceil(productsCount / limits.PRODUCTS_PER_PAGE),
    [productsCount]
  );
  const router = useRouter();
  const [isFirstPage, setIsFirstPage] = useState(currentPage === 1);
  const [isLastPage, setIsLastPage] = useState(currentPage === pagesCount);

  useEffect(() => {
    setIsFirstPage(currentPage === 1);
    setIsLastPage(currentPage === pagesCount);
  }, [currentPage, pagesCount]);

  useEffect(() => {
    router.push(
      {
        query: {
          ...router.query,
          page: currentPage,
        },
      },
      undefined,
      { scroll: false, shallow: true }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const pages = range(1, pagesCount + 1);
  const limit = limits.PRODUCTS_PER_PAGE;

  const pageChange = (page: number) => {
    onPageChange(page);
  };

  const goToNextPage = () => {
    if (isLastPage) {
      return;
    }

    onPageChange(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (isFirstPage) {
      return;
    }

    onPageChange(currentPage - 1);
  };

  return {
    limit,
    pages,
    currentPage,
    pagesCount,
    isFirstPage,
    isLastPage,
    pageChange,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePagination;
