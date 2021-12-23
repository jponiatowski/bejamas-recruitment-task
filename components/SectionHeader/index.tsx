import React from "react";
import styled from "styled-components";

interface SectionHeaderProps {
  label: string;
  sublabel?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  sublabel,
  className,
}) => {
  return (
    <Flex className={className}>
      <Label>{label}</Label>
      {sublabel && <Sublabel>{sublabel}</Sublabel>}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
`;

const Label = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: 30px;
  line-height: 33px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const Sublabel = styled.h3`
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: 30px;
  line-height: 33px;
  color: ${(p) => p.theme.colors.gray};

  &::before {
    content: "/";
    font-weight: ${(p) => p.theme.fontWeights.bold};
    color: ${(p) => p.theme.colors.black};
    margin: 0 10px;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    font-size: 18px;
    line-height: 20px;

    &::before {
      margin: 0 4px;
    }
  }
`;

export default SectionHeader;
