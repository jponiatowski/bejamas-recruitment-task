import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import FEATURED_PRODUCT_QUERY from "~/graphql/featuredProduct.gql";
import { FeaturedProductQuery } from "~/types/hasura";

export const fetchFeaturedProduct = async (
  client: ApolloClient<NormalizedCacheObject>
) => {
  const { data } = await client.query<FeaturedProductQuery>({
    query: FEATURED_PRODUCT_QUERY,
  });

  return {
    featuredProduct: data.product[0],
  };
};
