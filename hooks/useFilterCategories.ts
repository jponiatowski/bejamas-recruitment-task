import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { remove } from "lodash";

import { useIsMobile } from "~/hooks/useIsMobile";

export const useFilterCategories = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<string[]>(
    (router.query.categories as string[]) || []
  );

  useEffect(() => {
    if (!isMobile) {
      handleSubmitCategories();
    }
  }, [categories]);

  const handleToggleCategory = (category: string) => {
    const newCategories = [...categories];

    if (categories.includes(category)) {
      console.log("essa");

      remove(newCategories, (c) => c === category);
    } else {
      newCategories.push(category);
    }
    setCategories(newCategories);
  };

  const handleClearCategories = () => {
    router.push(
      router.asPath.replace(`categories/${categories.join("/")}`, ""),
      undefined,
      { scroll: false }
    );
    setCategories([]);
  };

  const handleSubmitCategories = () => {
    if (
      !Object.keys(router.query).includes("categories") &&
      !categories.length
    ) {
      return;
    }

    if (!Object.keys(router.query).includes("categories")) {
      router.push(
        `${router.asPath}/categories/${categories.join("/")}`,
        undefined,
        { scroll: false }
      );

      return;
    }

    if (!categories.length) {
      router.push(
        router.asPath.replace(/\/categories\/.*\/|\/categories\/.*/, ""),
        undefined,
        { scroll: false }
      );
      return;
    }

    router.push(
      {
        query: {
          ...router.query,
          categories,
        },
      },
      undefined,
      { scroll: false }
    );
  };

  return {
    handleClearCategories,
    handleSubmitCategories,
    handleToggleCategory,
    categories,
  };
};
