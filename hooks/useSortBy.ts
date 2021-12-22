import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSortByFromQuery } from "~/utils/getSortByFromQuery";
import { getOrderFromQuery } from "~/utils/getOrderFromQuery";

export type TSortBy = "price" | "name";
export type TOrder = "asc" | "desc";

export const useSortBy = () => {
  const router = useRouter();
  const [sortBy, setSortBy] = useState<TSortBy>(
    getSortByFromQuery(router.query)
  );
  const [order, setOrder] = useState<TOrder>(getOrderFromQuery(router.query));

  const handleChangeOrder = (newOrder: TOrder): void => {
    setOrder(newOrder);

    router.push(
      {
        query: { ...router.query, order: newOrder },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  const handleSortBy = (e: React.SyntheticEvent<HTMLSelectElement>): void => {
    const newSortBy = (e.target as HTMLSelectElement).value as TSortBy;
    setSortBy(newSortBy);

    router.push(
      {
        query: { ...router.query, sortBy: newSortBy },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  return {
    sortBy,
    order,
    handleChangeOrder,
    handleSortBy,
  };
};

export default useSortBy;
