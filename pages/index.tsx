import type { NextPage } from "next";
import Head from "next/head";

import client from "data/apollo-client";
import IndexPageView from "views/IndexPage";
import PRODUCTS_QUERY from "graphql/products.gql";
import { Product, FeaturedProduct } from "types/api";

export const getStaticProps = async () => {
  const { data } = await client.query<{
    products: Product[];
    featuredProduct: FeaturedProduct[];
  }>({
    query: PRODUCTS_QUERY,
  });

  return {
    props: {
      products: data.products,
      featuredProduct: data.featuredProduct,
    },
  };
};

export interface HomeProps {
  featuredProduct: FeaturedProduct[];
  products: Product[];
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
