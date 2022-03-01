import {
  FeaturedProductQuery,
  ProductsQuery,
  CategoriesQuery,
  PriceRangesQuery,
} from "./hasura";

export type Product = ProductsQuery["products"]["nodes"][number];
export type FeaturedProduct = FeaturedProductQuery["product"][number];
export type Categories = CategoriesQuery["categories"]["nodes"];
export type PriceRanges = PriceRangesQuery["priceRanges"]["nodes"];
