import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import FiltersIcon from "icons/Filters";
import SectionHeader from "components/SectionHeader";
import SortByComponent from "components/SortBy";
import FiltersMenu, { FiltersMenuContainer } from "components/FiltersMenu";
import Product from "components/Product";
import Pagination from "components/Pagination";
import { lockPageScroll } from "utils/lockPageScroll";
import { unlockPageScroll } from "utils/unlockPageScroll";
import { Product as ProductType } from "types/api";
import { getSortedProducts, TSortBy, TOrder } from "~/utils/getSortedData";
import { usePagination } from "~/hooks/usePagination";

const MOCKED_DATA = {
  category: [
    { label: "People", value: "People" },
    { label: "Premium", value: "Premium" },
    { label: "Pets", value: "Pets" },
    { label: "Food", value: "Food" },
    { label: "Landmarks", value: "Landmarks" },
    { label: "Cities", value: "Cities" },
    { label: "Nature", value: "Nature" },
  ],
  priceRange: [
    {
      label: "Lower than $20",
      value: "1",
    },
    {
      label: "$20 - $100",
      value: "2",
    },
    {
      label: "$100 - $200",
      value: "3",
    },
    {
      label: "More than $200",
      value: "4",
    },
  ],
};

const sortByOptions = [
  { value: "price", label: "Price" },
  { value: "name", label: "Alphabetical" },
];

interface PremiumPhotosProps {
  products: ProductType[];
  productsCount?: number;
}

const PremiumPhotos: React.FC<PremiumPhotosProps> = ({
  products,
  productsCount,
}) => {
  const router = useRouter();
  const { getCurrentPage, getLimit } = usePagination();
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(
    (router.query.sortBy as TSortBy) || "price"
  );
  const [order, setOrder] = React.useState(
    (router.query.order as TOrder) || "asc"
  );

  // TODO: poprawic
  React.useEffect(() => {
    if (router.query.sortBy) {
      setSortBy(router.query.sortBy as TSortBy);
    }
  }, [router.query.sortBy]);

  const handleChangeOrder = (): void => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    router.push(
      {
        query: { ...router.query, order },
      },
      undefined,
      { shallow: true }
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
      { shallow: true }
    );
  };

  const handleOpenFilters = (): void => {
    setFiltersOpen(true);
    lockPageScroll();
  };

  const handleCloseFilters = (): void => {
    setFiltersOpen(false);
    unlockPageScroll();
  };

  const handleSubmit = (): void => {
    console.log("submit");
  };

  return (
    <Layout>
      <Header>
        <StyledSectionHeader label="Photography" sublabel="Premium Photos" />
        <StyledSortBy
          value={sortBy}
          onChangeOrder={handleChangeOrder}
          onChangeSortBy={handleSortBy}
          options={sortByOptions}
        />
        <FilterIconWrapperMobile onClick={handleOpenFilters}>
          <FiltersIcon />
        </FilterIconWrapperMobile>
      </Header>
      <FiltersMenuContainer
        onSubmit={handleSubmit}
        onClose={handleCloseFilters}
        isOpen={filtersOpen}
      >
        <FiltersMenu title="Category" options={MOCKED_DATA.category} />
        <FiltersMenu title="Price range" options={MOCKED_DATA.priceRange} />
      </FiltersMenuContainer>
      <PhotoGrid>
        {getSortedProducts({ products, sortBy, order }).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </PhotoGrid>
      <Pagination
        currentPage={getCurrentPage()}
        limit={getLimit()}
        count={productsCount || 0}
      />
    </Layout>
  );
};

const FilterIconWrapperMobile = styled.div`
  display: none;
  width: 29px;
  height: 29px;
  cursor: pointer;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  grid-area: header;
`;

const PhotoGrid = styled.div`
  grid-area: photos;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, 280px);
  margin-left: 50px;
  justify-content: end;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    margin-left: 0;
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const StyledSortBy = styled(SortByComponent)`
  grid-area: sorting;
  justify-self: end;
  align-self: center;
`;

const StyledSectionHeader = styled(SectionHeader)`
  align-self: center;
`;

const Layout = styled.section`
  display: grid;
  grid-template-areas: "header header" "filters photos" "filters pagination";
  grid-template-columns: 1fr 3fr;
  padding-top: 65px;
  row-gap: 63px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-top: 55px;
    grid-template-areas: "header" "photos" "pagination";
    grid-template-columns: 1fr;

    justify-items: center;
  }
`;

export default PremiumPhotos;
