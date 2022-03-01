import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import CATEGORIES_QUERY from "~/graphql/categories.gql";
import PRICE_RANGES_QUERY from "~/graphql/priceRanges.gql";
import { useFilterCategories } from "./useFilterCategories";
import { useFilterPrice } from "./useFilterPrice";
import { useIsMobile } from "~/hooks/useIsMobile";
import { CategoriesQuery, PriceRangesQuery } from "~/types/hasura";

export const useFilters = ({
  resetPagination,
}: {
  resetPagination: () => void;
}) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { data: categoriesData } = useQuery<CategoriesQuery>(CATEGORIES_QUERY);
  const { data: priceRangeData } =
    useQuery<PriceRangesQuery>(PRICE_RANGES_QUERY);

  const {
    categories,
    handleClearCategories,
    handleSubmitCategories,
    handleChangeCategory,
  } = useFilterCategories({ router, resetPagination });

  const {
    selectedPriceRange,
    handleClearPriceRange,
    handleSubmitPriceRange,
    handleChangePriceRange,
  } = useFilterPrice({
    priceRanges: priceRangeData?.priceRanges.nodes || [],
    isMobile,
    router,
    resetPagination,
  });

  const handleClear = () => {
    handleClearPriceRange();
    handleClearCategories();

    const newQuery = { ...router.query };
    delete newQuery.categories;
    delete newQuery.lt;
    delete newQuery.gt;

    router.push(
      {
        query: {
          ...newQuery,
        },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  const handleSubmit = () => {
    handleSubmitCategories();
    handleSubmitPriceRange();
  };

  return {
    priceRanges: priceRangeData?.priceRanges.nodes || [],
    categories: categoriesData?.categories.nodes || [],
    selectedCategories: categories,
    selectedPriceRange,
    handleChangeCategory,
    handleChangePriceRange,
    handleSubmit,
    handleClear,
  };
};
