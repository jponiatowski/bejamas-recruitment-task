import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Checkbox from "components/Checkbox";

interface FiltersMenuProps {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  values: string[];
  onChange?: (value: string) => void;
}

const FiltersMenu: React.FC<FiltersMenuProps> = ({
  options,
  title,
  values,
  onChange,
}) => {
  return (
    <Menu>
      <Title>{title}</Title>
      <div>
        {options.map(({ label, value }) => (
          <Option key={value}>
            <Checkbox
              checked={values.includes(value)}
              onClick={() => onChange && onChange(value)}
            />
            <Label key={value}>{label}</Label>
          </Option>
        ))}
      </div>
    </Menu>
  );
};

const Menu = styled.div`
  border-bottom: 1px solid #c2c2c2;
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    border: none;
  }
`;

const Label = styled.div`
  font-size: 22px;
  line-height: 24px;
  margin-left: 23px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 22px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: 43px;
`;

export default FiltersMenu;
