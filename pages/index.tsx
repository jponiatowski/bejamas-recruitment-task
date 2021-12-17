import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import client from "data/apollo-client";
import IndexPageView from "views/IndexPage";
import PRODUCTS_QUERY from "graphql/products.gql";
import { Product, FeaturedProduct } from "types/api";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<{
    products: { nodes: Product[] };
    featuredProduct: FeaturedProduct[];
  }>({
    query: PRODUCTS_QUERY,
    variables: {
      order_by: {
        price: "asc",
      },
    },
  });
  return {
    props: {
      products: data.products.nodes,
      featuredProduct: data.featuredProduct,
    },
    revalidate: 60,
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
