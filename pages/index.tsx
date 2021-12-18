import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import client from "data/apollo-client";
import IndexPageView from "views/IndexPage";
import PRODUCTS_QUERY from "graphql/products.gql";
import PRODUCTS_COUNT_QUERY from "~/graphql/productsCount.gql";
import { Product, FeaturedProduct } from "types/api";
import {
  ProductsQueryQuery as ProductsQuery,
  ProductsCountQuery,
} from "~/types/hasura";
import { limits } from "~/constants/limits";

export const getStaticProps: GetStaticProps = async () => {
  const { data: productsCount } = await client.query<ProductsCountQuery>({
    query: PRODUCTS_COUNT_QUERY,
  });

  const { data } = await client.query<{
    products: ProductsQuery["products"];
    featuredProduct: ProductsQuery["featuredProduct"];
  }>({
    query: PRODUCTS_QUERY,
    variables: {
      limit: limits.PRODUCTS_PER_PAGE,
    },
  });
  return {
    props: {
      productsCount: productsCount.products.aggregate?.count,
      products: data.products.nodes,
      featuredProduct: data.featuredProduct,
    },
    revalidate: 60,
  };
};

export interface HomeProps {
  featuredProduct: FeaturedProduct[];
  products: Product[];
  productsCount?: number;
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Bejamas</title>
      </Head>
      <IndexPageView {...props} />
    </>
  );
};

export default Home;
