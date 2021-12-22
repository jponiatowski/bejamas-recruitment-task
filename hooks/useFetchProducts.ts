import { useQuery, OperationVariables } from "@apollo/client";
import PRODUCTS_QUERY from "~/graphql/products.gql";
import { ProductsQuery } from "~/types/hasura";

export const useFetchProducts = (variables: OperationVariables) => {
  const {
    data,
    loading,
    error,
    fetchMore: fetchMoreApollo,
  } = useQuery<ProductsQuery>(PRODUCTS_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });
  const fetchMore = () => fetchMoreApollo({ variables });

  return {
    productsCount: data?.productsCount?.aggregate?.count || 0,
    products: data?.products?.nodes || [],
    loading,
    error,
    fetchMore,
  };
};
