import { useState, useEffect } from "react";
import { NextRouter } from "next/router";
import { remove } from "lodash";

import { useIsMobile } from "~/hooks/useIsMobile";

export const useFilterCategories = ({
  router,
  resetPagination,
}: {
  router: NextRouter;
  resetPagination: () => void;
}) => {
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<string[] | string>(
    router.query.categories || []
  );

  useEffect(() => {
    if (!isMobile) {
      handleSubmitCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleChangeCategory = (category: string) => {
    const newCategories = Array.isArray(categories)
      ? [...categories]
      : [categories];

    if (categories.includes(category)) {
      remove(newCategories, (c) => c === category);
    } else {
      newCategories.push(category);
    }
    setCategories(newCategories);
  };

  const handleClearCategories = () => {
    setCategories([]);
  };

  const handleSubmitCategories = () => {
    resetPagination();
    router.push(
      {
        query: {
          ...router.query,
          categories,
        },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  return {
    categories,
    handleClearCategories,
    handleSubmitCategories,
    handleChangeCategory,
  };
};
