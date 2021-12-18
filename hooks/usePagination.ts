import { useRouter } from "next/router";
import { limits } from "~/constants/limits";

interface IUsePagination {
  getCurrentPage: () => number;
  getLimit: () => number;
}

export const usePagination = (): IUsePagination => {
  const router = useRouter();

  const getCurrentPage = (): number => {
    if (Object.keys(router.query).includes("page")) {
      return Number(router.query.page);
    }

    return 1;
  };

  const getLimit = (): number => limits.PRODUCTS_PER_PAGE;

  return {
    getCurrentPage,
    getLimit,
  };
};

export default usePagination;
