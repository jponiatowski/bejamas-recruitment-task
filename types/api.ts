import { ProductFragment, ProductsQueryQuery } from "./hasura";

export type Product = ProductFragment;
export type FeaturedProduct = ProductsQueryQuery["featuredProduct"][number];
