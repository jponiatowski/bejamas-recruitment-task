import { useEffect, useState } from "react";
import { NextRouter } from "next/router";

import { PriceRange } from "~/types/hasura";
import { PriceRanges } from "~/types/api";
import { getPriceRangeFromQuery } from "~/utils/getPriceRangeFromQuery";

export const useFilterPrice = ({
  priceRanges,
  isMobile,
  router,
  resetPagination,
}: {
  priceRanges: PriceRanges;
  isMobile: boolean;
  router: NextRouter;
  resetPagination: () => void;
}) => {
  const [priceRange, setPriceRange] = useState<PriceRange | undefined>(
    getPriceRangeFromQuery(priceRanges, router.query)
  );

  useEffect(() => {
    if (!isMobile) {
      resetPagination();
      handleSubmitPriceRange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceRange]);

  const getQueryParams = (
    priceRange: PriceRange,
    query: NextRouter["query"]
  ): Record<string, string | string[] | undefined> => {
    const newQuery = { ...query };

    delete newQuery.lt;
    delete newQuery.gt;

    if (!priceRange) {
      return newQuery;
    }

    if (!priceRange.greater_than) {
      return {
        ...newQuery,
        lt: String(priceRange.less_than),
      };
    }

    if (!priceRange.less_than) {
      return {
        ...newQuery,
        gt: String(priceRange.greater_than),
      };
    }

    return {
      ...newQuery,
      gt: String(priceRange.greater_than),
      lt: String(priceRange.less_than),
    };
  };

  const handleChangePriceRange = (id: PriceRange["id"]) => {
    if (id === priceRange?.id) {
      setPriceRange(undefined);
    } else {
      setPriceRange(priceRanges.find((pr) => pr.id === id));
    }
  };

  const handleClearPriceRange = () => {
    setPriceRange(undefined);
  };

  const handleSubmitPriceRange = () => {
    if (!priceRange) {
      return;
    }

    router.push(
      {
        query: getQueryParams(priceRange, router.query),
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  return {
    selectedPriceRange: priceRange,
    handleSubmitPriceRange,
    handleChangePriceRange,
    handleClearPriceRange,
  };
};
