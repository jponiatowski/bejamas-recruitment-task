import { ParsedUrlQuery } from "querystring";

export const getCategoriesFromQuery = async (
  query: ParsedUrlQuery
): Promise<string[] | undefined> => {
  if (!Object.keys(query).includes("categories")) {
    return;
  }

  return Array.isArray(query.categories)
    ? query.categories
    : ([query.categories] as string[]);
};
