import CATEGORIES_QUERY from "~/graphql/categories.gql";
import client from "~/data/apollo-client";
import { CategoriesQuery } from "~/types/hasura";

export const fetchCategories = async () => {
  const { data } = await client.query<CategoriesQuery>({
    query: CATEGORIES_QUERY,
  });

  return data.categories.nodes;
};

export default fetchCategories;
