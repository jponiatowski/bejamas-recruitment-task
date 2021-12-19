import { OperationVariables } from "@apollo/client";

import client from "~/data/apollo-client";
import PRODUCTS_COUNT_QUERY from "~/graphql/productsCount.gql";
import { ProductsCountQuery } from "~/types/hasura";

export const fetchProductsCount = async (variables: OperationVariables) => {
  const { data } = await client.query<ProductsCountQuery>({
    query: PRODUCTS_COUNT_QUERY,
    variables,
  });

  return data.products.aggregate?.count;
};
