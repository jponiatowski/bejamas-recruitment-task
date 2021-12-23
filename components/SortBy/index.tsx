import React from "react";
import styled from "styled-components";

import SortIcon from "icons/Sort";
import { TSortBy, TOrder } from "~/hooks/useSortBy";
interface SortByProps {
  valueSortBy: TSortBy;
  valueOrder: TOrder;
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  onChangeSortBy?: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
  onChangeOrder?: (order: TOrder) => void;
}

const SortBy: React.FC<SortByProps> = ({
  valueSortBy,
  valueOrder,
  options,
  className,
  onChangeSortBy,
  onChangeOrder,
}) => {
  const handleSortByChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    typeof onChangeSortBy !== "undefined" && onChangeSortBy(e);
  };

  const handleOrderChange = () => {
    const newOrder = valueOrder === "asc" ? "desc" : "asc";
    typeof onChangeOrder !== "undefined" && onChangeOrder(newOrder);
  };

  return (
    <Flex className={className}>
      <SortIconWrapper onClick={handleOrderChange}>
        <SortIcon />
      </SortIconWrapper>
      <Label>Sort By</Label>
      <Select value={valueSortBy} name="sortBy" onChange={handleSortByChange}>
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </Flex>
  );
};

const Select = styled.select`
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  appearance: none;
  margin-right: 13px;
  background-position: right 5px top 50%;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyMCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAyTDEwIDEwTDE4IDIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPgo=");
  background-repeat: no-repeat;
  min-width: 155px;
  width: auto;

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

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export default SortBy;
