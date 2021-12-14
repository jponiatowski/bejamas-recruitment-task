import React from "react";
import styled from "styled-components";

import SortIcon from "icons/Sort";
import ArrowIcon from "icons/Arrow";

interface SortByProps {
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  onSortByChange?: (e?: React.SyntheticEvent) => void;
  onOrderChange?: (e?: React.SyntheticEvent) => void;
}

const SortBy: React.FC<SortByProps> = ({
  className,
  onSortByChange,
  onOrderChange,
}) => {
  const handleSortByChange = () => {
    typeof onSortByChange !== "undefined" && onSortByChange();
  };

  const handleOrderChange = () => {
    typeof onOrderChange !== "undefined" && onOrderChange();
  };

  return (
    <Flex className={className}>
      <SortIconWrapper onClick={handleOrderChange}>
        <SortIcon />
      </SortIconWrapper>
      <Label>Sort By</Label>
      <Select name="sortBy" onClick={handleSortByChange}>
        <Option value="price">Price</Option>
        <Option value="alphabetical">Alphabetical</Option>
      </Select>
      {/* TODO: clickable arrow */}
      <ArrowIconWrapper>
        <ArrowIcon />
      </ArrowIconWrapper>
    </Flex>
  );
};

const Select = styled.select`
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  width: fit-content;
  appearance: none;
  margin-right: 13px;

  &:focus-visible {
    outline: none;
  }
`;

const Option = styled.option`
  width: fit-content;
`;

const Label = styled.div`
  font-size: 22px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.gray};
  margin-right: 15px;
`;

const SortIconWrapper = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 7px;
  cursor: pointer;
`;

const ArrowIconWrapper = styled.div`
  width: 16px;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export default SortBy;
