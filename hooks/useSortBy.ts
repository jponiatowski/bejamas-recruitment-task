import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { orderBy } from "lodash";
import { Product } from "~/types/api";

export type TSortBy = "price" | "name";
export type TOrder = "asc" | "desc";

interface SortArgs {
  sortBy: TSortBy;
  order: TOrder;
  products: Product[];
}

export const useSortBy = (products: Product[]) => {
  const router = useRouter();
  const [sortBy, setSortBy] = useState("price" as TSortBy);
  const [order, setOrder] = useState("asc" as TOrder);

  const sort = ({ sortBy, order, products }: SortArgs): Product[] =>
    orderBy(products, [sortBy], [order]);

  const handleChangeOrder = (): void => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
  };

  const handleSortBy = (e: React.SyntheticEvent<HTMLSelectElement>): void => {
    const newSortBy = (e.target as HTMLSelectElement).value as TSortBy;

    setSortBy(newSortBy);
  };

  return {
    sortedProducts: sort({ products, sortBy, order }),
    sortBy,
    handleChangeOrder,
    handleSortBy,
  };
};

export default useSortBy;
