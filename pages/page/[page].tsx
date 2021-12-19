import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { range } from "lodash";

import IndexPageView from "~/views/IndexPage";
import { HomeProps } from "~/pages";
import { limits } from "~/constants/limits";
import { fetchCategories, fetchProducts, fetchProductsCount } from "~/data";

interface IParams extends ParsedUrlQuery {
  page: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories();
  const productsCount = await fetchProductsCount({
    categories: categories.map(({ slug }) => slug),
  });

  const pagesCount = Math.ceil((productsCount || 0) / limits.PRODUCTS_PER_PAGE);

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

  const categories = await fetchCategories();
  const productsCount = await fetchProductsCount({
    categories: categories.map(({ slug }) => slug),
  });
  const { products, featuredProduct } = await fetchProducts({
    limit: limits.PRODUCTS_PER_PAGE,
    offset: (Number(page) - 1) * limits.PRODUCTS_PER_PAGE,
    categories: categories.map(({ slug }) => slug),
  });

  return {
    props: {
      productsCount,
      products,
      featuredProduct,
      categories,
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
