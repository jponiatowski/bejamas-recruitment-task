import { ProductFragment, ProductsQuery, CategoriesQuery } from "./hasura";

export type Product = ProductFragment;
export type FeaturedProduct = ProductsQuery["featuredProduct"][number];
export type Categories = CategoriesQuery["categories"]["nodes"];
