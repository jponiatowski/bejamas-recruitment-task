import { ParsedUrlQuery } from "querystring";
import { TSortBy } from "~/hooks/useSortBy";

export const getSortByFromQuery = (query: ParsedUrlQuery): TSortBy => {
  if (!query.sortBy) {
    return "name";
  }

  return query.sortBy as TSortBy;
};
