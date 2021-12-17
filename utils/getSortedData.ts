import { orderBy } from "lodash";
import { Product } from "~/types/api";

export type TSortBy = "price" | "name";
export type TOrder = "asc" | "desc";

interface GetSortedProductsArgs {
  sortBy: TSortBy;
  order: TOrder;
  products: Product[];
}

export const getSortedProducts = ({
  sortBy,
  order,
  products,
}: GetSortedProductsArgs): Product[] => orderBy(products, [sortBy], [order]);
