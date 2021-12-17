import React from "react";
import styled from "styled-components";

import SortIcon from "icons/Sort";
import ArrowIcon from "icons/Arrow";
import { TSortBy } from "~/utils/getSortedData";

interface SortByProps {
  value: TSortBy;
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  onChangeSortBy?: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
  onChangeOrder?: (e?: React.SyntheticEvent) => void;
}

const SortBy: React.FC<SortByProps> = ({
  value,
  options,
  className,
  onChangeSortBy,
  onChangeOrder,
}) => {
  const handleSortByChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    typeof onChangeSortBy !== "undefined" && onChangeSortBy(e);
  };

  const handleOrderChange = () => {
    typeof onChangeOrder !== "undefined" && onChangeOrder();
  };

  return (
    <Flex className={className}>
      <SortIconWrapper onClick={handleOrderChange}>
        <SortIcon />
      </SortIconWrapper>
      <Label>Sort By</Label>
      <Select value={value} name="sortBy" onChange={handleSortByChange}>
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
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
