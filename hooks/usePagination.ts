import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { range } from "lodash";

import { limits } from "~/constants/limits";

export const usePagination = (productsCount: number) => {
  const pagesCount = useMemo(
    () => Math.ceil(productsCount / limits.PRODUCTS_PER_PAGE),
    [productsCount]
  );

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(currentPage === 1);
  const [isLastPage, setIsLastPage] = useState(currentPage === pagesCount);

  useEffect(() => {
    setIsFirstPage(currentPage === 1);
    setIsLastPage(currentPage === pagesCount);
  }, [currentPage, pagesCount]);

  useEffect(() => {
    if (!Object.keys(router.query).includes("page")) {
      router.push(`/page/${currentPage}${router.asPath}`, undefined, {
        scroll: false,
      });
      return;
    }

    router.push(
      {
        query: {
          ...router.query,
          page: currentPage,
        },
      },
      undefined,
      { scroll: false }
    );
  }, [currentPage]);

  const pages = range(1, pagesCount + 1);
  const limit = limits.PRODUCTS_PER_PAGE;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGoToNextPage = () => {
    if (isLastPage) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  const handleGoToPreviousPage = () => {
    if (isFirstPage) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  return {
    limit,
    pages,
    currentPage,
    pagesCount,
    isFirstPage,
    isLastPage,
    handlePageChange,
    handleGoToPreviousPage,
    handleGoToNextPage,
  };
};

export default usePagination;
