import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { range } from "lodash";

import client from "~/data/apollo-client";
import IndexPageView from "~/views/IndexPage";
import PRODUCTS_QUERY from "~/graphql/products.gql";
import PRODUCTS_COUNT_QUERY from "~/graphql/productsCount.gql";
import { HomeProps } from "~/pages";
import { limits } from "~/constants/limits";
import {
  ProductsCountQuery,
  ProductsQueryQuery as ProductQuery,
} from "~/types/hasura";

interface IParams extends ParsedUrlQuery {
  page: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<ProductsCountQuery>({
    query: PRODUCTS_COUNT_QUERY,
  });

  const pagesCount = Math.ceil(
    (Number(data.products.aggregate?.count) || 0) / limits.PRODUCTS_PER_PAGE
  );

  return {
    paths: range(1, pagesCount + 1).map((page) => ({
      params: { page: String(page) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HomeProps, IParams> = async (
  ctx
) => {
  const { page } = ctx.params as IParams;

  const { data: productsCount } = await client.query<ProductsCountQuery>({
    query: PRODUCTS_COUNT_QUERY,
  });

  const { data } = await client.query<ProductQuery>({
    query: PRODUCTS_QUERY,
    variables: {
      limit: limits.PRODUCTS_PER_PAGE,
      offset: (Number(page) - 1) * limits.PRODUCTS_PER_PAGE,
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

const HomeByPage: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Bejamas</title>
      </Head>
      <IndexPageView {...props} />
    </>
  );
};

export default HomeByPage;
