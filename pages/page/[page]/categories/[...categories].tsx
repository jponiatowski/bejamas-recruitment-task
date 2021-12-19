import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { range, flatten } from "lodash";

import { fetchCategories, fetchProducts, fetchProductsCount } from "~/data";
import IndexPageView from "~/views/IndexPage";
import { HomeProps } from "~/pages";
import { limits } from "~/constants/limits";
import { Categories } from "~/types/api";

interface IParams extends ParsedUrlQuery {
  page: string;
  categories: string[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories();

  const getPathsByCategory = async (category: Categories[number]) => {
    const productsCount = await fetchProductsCount({
      categories: [category.id],
    });
    const pagesCount = Math.ceil(
      (productsCount || 0) / limits.PRODUCTS_PER_PAGE
    );

    return range(1, pagesCount + 1).map((page) => ({
      params: { page: String(page), categories: [category.name.toLowerCase()] },
    }));
  };

  return {
    paths: flatten(
      await Promise.all(
        categories.map(async (category) => await getPathsByCategory(category))
      )
    ),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<HomeProps, IParams> = async (
  ctx
) => {
  const { page, categories: categoriesParams } = ctx.params as IParams;

  const productsCount = await fetchProductsCount({
    categories: categoriesParams,
  });
  const categories = await fetchCategories();
  const { products, featuredProduct } = await fetchProducts({
    limit: limits.PRODUCTS_PER_PAGE,
    offset: (Number(page) - 1) * limits.PRODUCTS_PER_PAGE,
    categories: categoriesParams || categories,
  });

  return {
    props: {
      productsCount,
      categories,
      products,
      featuredProduct,
    },
    revalidate: 60,
  };
};

const HomeByPageAndFilters: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Bejamas</title>
      </Head>
      <IndexPageView {...props} />
    </>
  );
};

export default HomeByPageAndFilters;
