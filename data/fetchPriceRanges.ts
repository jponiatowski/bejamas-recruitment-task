import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
} from "@apollo/client";

import PRICE_RANGES_QUERY from "~/graphql/priceRanges.gql";
import { PriceRange, PriceRangesQuery } from "~/types/hasura";

export const fetchPriceRanges = async (
  client: ApolloClient<NormalizedCacheObject>,
  variables?: OperationVariables
): Promise<PriceRange[]> => {
  const { data } = await client.query<PriceRangesQuery>({
    query: PRICE_RANGES_QUERY,
    variables,
  });

  return data.priceRanges.nodes;
};

export default fetchPriceRanges;
