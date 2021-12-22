import { useQuery } from "@apollo/client";
import FEATURED_PRODUCT_QUERY from "~/graphql/featuredProduct.gql";
import { FeaturedProductQuery } from "~/types/hasura";

export const useFetchFeaturedProduct = () => {
  const { data } = useQuery<FeaturedProductQuery>(FEATURED_PRODUCT_QUERY);

  return {
    featuredProduct: data?.product[0],
  };
};
