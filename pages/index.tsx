import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { fetchProductsCount, fetchProducts, fetchCategories } from "~/data/";
import IndexPageView from "~/views/IndexPage";
import { Product, FeaturedProduct, Categories } from "~/types/api";
import { limits } from "~/constants/limits";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await fetchCategories();
  const productsCount = await fetchProductsCount({
    categories: categories.map(({ slug }) => slug),
  });
  const { products, featuredProduct } = await fetchProducts({
    limit: limits.PRODUCTS_PER_PAGE,
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

export interface HomeProps {
  featuredProduct: FeaturedProduct[];
  products: Product[];
  categories: Categories;
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
