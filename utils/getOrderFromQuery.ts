import { ParsedUrlQuery } from "querystring";
import { TOrder } from "~/hooks/useSortBy";

export const getOrderFromQuery = (query: ParsedUrlQuery): TOrder => {
  if (!query.order) {
    return "asc";
  }

  return query.order as TOrder;
};
