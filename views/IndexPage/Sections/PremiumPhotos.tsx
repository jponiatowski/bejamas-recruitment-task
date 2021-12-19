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
import { Categories, Product as ProductType } from "types/api";
import { useSortBy } from "~/hooks/useSortBy";
import { useFilterCategories } from "~/hooks/useFilterCategories";

const MOCKED_DATA = {
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
  categories: Categories;
  productsCount?: number;
}

const PremiumPhotos: React.FC<PremiumPhotosProps> = ({
  products,
  productsCount,
  categories,
}) => {
  const { sortedProducts, sortBy, handleChangeOrder, handleSortBy } =
    useSortBy(products);
  const {
    categories: categoriesFilters,
    handleToggleCategory,
    handleSubmitCategories,
    handleClearCategories,
  } = useFilterCategories();
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const handleOpenFilters = (): void => {
    setFiltersOpen(true);
    lockPageScroll();
  };

  const handleCloseFilters = (): void => {
    setFiltersOpen(false);
    unlockPageScroll();
  };

  const handleSubmit = (): void => {
    handleSubmitCategories();
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
        onClear={handleClearCategories}
        isOpen={filtersOpen}
      >
        <FiltersMenu
          title="Category"
          values={categoriesFilters}
          options={categories.map(({ slug, name }) => ({
            value: slug,
            label: name,
          }))}
          onChange={handleToggleCategory}
        />
        <FiltersMenu
          title="Price range"
          values={[]}
          options={MOCKED_DATA.priceRange}
        />
      </FiltersMenuContainer>
      <PhotoGrid>
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </PhotoGrid>
      <Pagination count={productsCount || 0} />
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
