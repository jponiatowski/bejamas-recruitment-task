import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
} from "@apollo/client";

import PRODUCTS_QUERY from "~/graphql/products.gql";
import { ProductsQuery as ProductQuery } from "~/types/hasura";

export const fetchProducts = async (
  client: ApolloClient<NormalizedCacheObject>,
  variables: OperationVariables
) => {
  const { data } = await client.query<ProductQuery>({
    query: PRODUCTS_QUERY,
    variables,
  });

  return {
    products: data.products.nodes,
  };
};
