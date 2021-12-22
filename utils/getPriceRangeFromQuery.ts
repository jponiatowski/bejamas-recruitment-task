import { NextRouter } from "next/router";

import { PriceRange } from "~/types/hasura";
import { PriceRanges } from "~/types/api";

export const getPriceRangeFromQuery = (
  priceRanges: PriceRanges,
  query: NextRouter["query"]
): PriceRange | undefined => {
  const selectedPriceRange = priceRanges.find(
    (pr) =>
      String(pr.greater_than) === query.gt && String(pr.less_than) === query.lt
  );

  return selectedPriceRange;
};
