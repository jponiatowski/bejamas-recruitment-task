import type { GetServerSideProps } from "next";

import IndexPageView from "~/views/IndexPage";
import { limits } from "~/constants/limits";
import { getCategoriesFromQuery } from "~/utils/getCategoriesFromQuery";
import {
  fetchCategories,
  fetchFeaturedProduct,
  fetchPriceRanges,
  fetchProducts,
} from "~/data";
import { initializeApollo, addApolloState } from "~/data/apollo-client";
import { getSortByFromQuery } from "~/utils/getSortByFromQuery";
import { getOrderFromQuery } from "~/utils/getOrderFromQuery";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const apolloClient = initializeApollo();

  const page = query.page ? Number(query.page) : 1;

  await fetchCategories(apolloClient);
  await fetchPriceRanges(apolloClient);
  await fetchFeaturedProduct(apolloClient);
  await fetchProducts(apolloClient, {
    offset: (page - 1) * limits.PRODUCTS_PER_PAGE,
    categories: await getCategoriesFromQuery(query),
    lte: query?.lt,
    gte: query?.gt,
    order_by: {
      [getSortByFromQuery(query)]: getOrderFromQuery(query),
    },
  });
  return addApolloState(apolloClient, {
    props: {},
  });
};

export default IndexPageView;
