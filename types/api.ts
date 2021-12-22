import {
  ProductFragment,
  ProductsQuery,
  CategoriesQuery,
  PriceRangesQuery,
} from "./hasura";

export type Product = ProductFragment;
export type FeaturedProduct = ProductsQuery["featuredProduct"][number];
export type Categories = CategoriesQuery["categories"]["nodes"];
export type PriceRanges = PriceRangesQuery["priceRanges"]["nodes"];
