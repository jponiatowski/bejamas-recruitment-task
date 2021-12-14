import type { NextPage } from "next";
import Head from "next/head";

import client from "data/apollo-client";
import IndexPageView from "views/IndexPage";
import PRODUCTS_QUERY from "graphql/products.gql";
import FEATURED_PRODUCT_QUERY from "graphql/featuredProduct.gql";
import {
  ProductsQueryQuery as Products,
  FeaturedProductQuery as FeaturedProduct,
} from "types/api";

export const getStaticProps = async () => {
  const products = await client.query({
    query: PRODUCTS_QUERY,
  });
  const featuredProduct = await client.query({ query: FEATURED_PRODUCT_QUERY });

  return {
    props: {
      products: products.data,
      featuredProduct: featuredProduct.data,
    },
  };
};

export interface HomeProps {
  products: Products;
  featuredProduct: FeaturedProduct;
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
