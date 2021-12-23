import React from "react";
import styled from "styled-components";

import FiltersIcon from "icons/Filters";
import SectionHeader from "components/SectionHeader";
import SortByComponent from "components/SortBy";
import FiltersMenu, { FiltersMenuContainer } from "components/FiltersMenu";
import Product from "components/Product";
import Pagination from "components/Pagination";
import { lockPageScroll } from "utils/lockPageScroll";
import { unlockPageScroll } from "utils/unlockPageScroll";
import { useSortBy } from "~/hooks/useSortBy";
import getPriceRangeLabel from "~/utils/getPriceRangeLabel";
import { useFilters } from "~/hooks/useFilters";
import { useFetchProducts } from "~/hooks/useFetchProducts";
import { limits } from "~/constants/limits";
import Loader from "~/components/Loader";
import NoProducts from "~/components/NoProducts";

const sortByOptions = [
  { value: "price", label: "Price" },
  { value: "name", label: "Alphabetical" },
];

const PremiumPhotos: React.FC = () => {
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const {
    priceRanges,
    categories,
    selectedCategories,
    selectedPriceRange,
    handleSubmit,
    handleClear,
    handleChangeCategory,
    handleChangePriceRange,
  } = useFilters({ resetPagination: () => setCurrentPage(1) });
  const { sortBy, order, handleChangeOrder, handleSortBy } = useSortBy({
    resetPagination: () => setCurrentPage(1),
  });
  const { products, productsCount, loading, fetchMore } = useFetchProducts({
    offset: (currentPage - 1) * limits.PRODUCTS_PER_PAGE,
    categories: selectedCategories.length ? selectedCategories : undefined,
    lte: selectedPriceRange?.less_than || undefined,
    gte: selectedPriceRange?.greater_than || undefined,
    order_by: {
      [sortBy]: order,
    },
  });

  const onPageChange = (page: number) => {
    fetchMore();
    setCurrentPage(page);
  };

  const handleOpenFilters = (): void => {
    setFiltersOpen(true);
    lockPageScroll();
  };

  const handleCloseFilters = (): void => {
    setFiltersOpen(false);
    unlockPageScroll();
  };
  return (
    <Layout>
      <Header>
        <StyledSectionHeader label="Photography" sublabel="Premium Photos" />
        <StyledSortBy
          valueSortBy={sortBy}
          valueOrder={order}
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
        onClear={handleClear}
        isOpen={filtersOpen}
      >
        <FiltersMenu
          title="Category"
          values={selectedCategories}
          options={categories.map(({ slug, name }) => ({
            value: slug,
            label: name,
          }))}
          onChange={handleChangeCategory}
        />
        <FiltersMenu
          title="Price range"
          values={selectedPriceRange?.id}
          onChange={handleChangePriceRange}
          options={priceRanges.map((pr) => ({
            value: pr.id,
            label: getPriceRangeLabel(pr),
          }))}
        />
      </FiltersMenuContainer>
      {loading && <Loader />}
      {!loading && !products.length && <NoProducts />}

      <PhotoGrid>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </PhotoGrid>

      <Pagination
        onPageChange={onPageChange}
        productsCount={productsCount}
        currentPage={currentPage}
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
