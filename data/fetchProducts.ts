import { OperationVariables } from "@apollo/client";

import client from "~/data/apollo-client";
import PRODUCTS_QUERY from "~/graphql/products.gql";
import { ProductsQuery as ProductQuery } from "~/types/hasura";

export const fetchProducts = async (variables: OperationVariables) => {
  const { data } = await client.query<ProductQuery>({
    query: PRODUCTS_QUERY,
    variables,
  });

  return {
    products: data.products.nodes,
    featuredProduct: data.featuredProduct,
  };
};
