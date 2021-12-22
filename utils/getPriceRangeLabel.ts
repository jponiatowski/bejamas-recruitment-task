import { PriceRange } from "~/types/hasura";

export const getPriceRangeLabel = (priceRange: PriceRange): string => {
  if (!priceRange.greater_than) {
    return `Lower than $${priceRange.less_than}`;
  }

  if (!priceRange.less_than) {
    return `More than $${priceRange.greater_than}`;
  }

  return `$${priceRange.greater_than} - $${priceRange.less_than}`;
};

export default getPriceRangeLabel;
