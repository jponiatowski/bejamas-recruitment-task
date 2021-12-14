import React from "react";
import styled from "styled-components";

import FiltersIcon from "icons/Filters";
import SectionHeader from "components/SectionHeader";
import SortBy from "components/SortBy";
import FiltersMenu, { FiltersMenuContainer } from "components/FiltersMenu";
import Product from "components/Product";
import Pagination from "components/Pagination";
import { lockPageScroll } from "utils/lockPageScroll";
import { unlockPageScroll } from "utils/unlockPageScroll";

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
  products: [
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.51,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.5,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.5,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.5,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.5,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
    {
      title: "Green Moss on Gray Rock",
      category: "Nature",
      price: 9.5,
      bestSeller: true,
      image: {
        src: "https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Green Moss on Gray Rock",
      },
    },
  ],
};

const PremiumPhotos: React.FC = () => {
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
    console.log("submit");
  };

  return (
    <Layout>
      <Header>
        <StyledSectionHeader label="Photography" sublabel="Premium Photos" />
        <StyledSortBy options={[]} />
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
        {MOCKED_DATA.products.map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </PhotoGrid>
      <Pagination currentPage={1} limit={6} count={18} />
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

const StyledSortBy = styled(SortBy)`
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
