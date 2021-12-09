import React from "react";
import styled from "styled-components";

import { zIndex } from "constants/zIndex";
import CloseIcon from "icons/Close";
import Button from "components/Button";

interface FiltersMenuContainerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const BUTTONS_CONTAINER_HEIGHT = 111;

export const FiltersMenuContainer: React.FC<FiltersMenuContainerProps> = ({
  children,
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <>
      <FiltersMenuContainerCompoenet isOpen={isOpen}>
        <Test>
          <MobileHeader>
            <span>Filter</span>
            <CloseIconWrapper onClick={onClose}>
              <CloseIcon />
            </CloseIconWrapper>
          </MobileHeader>
          {children}
        </Test>
        <ButtonsContainer isOpen={isOpen}>
          <Button variant="secondary">Clear</Button>
          <Button onClick={onSubmit}>Save</Button>
        </ButtonsContainer>
      </FiltersMenuContainerCompoenet>
    </>
  );
};

const Test = styled.div`
  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    height: calc(100vh - 88px);
    width: 100%;
    background-color: #fff;
    overflow: auto;
    margin-top: 88px;
    position: relative;
    padding: 19px 36px calc(19px + ${BUTTONS_CONTAINER_HEIGHT}px) 19px;
    position: relative;
    transition: all 0.2s ease-in;
  }
`;

const ButtonsContainer = styled.div<Pick<FiltersMenuContainerProps, "isOpen">>`
  display: none;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    display: grid;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    grid-template-columns: 1fr 1fr;
    column-gap: 21px;
    height: ${(p) => (p.isOpen ? BUTTONS_CONTAINER_HEIGHT : 0)}px;
    visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
    width: 100%;
    padding: 0 16px;
    border-top: 4px solid #e4e4e4;
    z-index: ${zIndex.MOBILE_FILTERS_MENU_BUTTONS};
    background-color: #fff;
    transition: all 0.2s ease-in;
  }
`;

const MobileHeader = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  font-size: 34px;
  line-height: 37px;
  font-weight: ${(p) => p.theme.fontWeights.bold};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const FiltersMenuContainerCompoenet = styled.div<
  Pick<FiltersMenuContainerProps, "isOpen">
>`
  grid-area: filters;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: ${(p) => (p.isOpen ? "100vh" : "0px")};
    visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
    overflow: ${(p) => (p.isOpen ? "auto" : "hidden")};
    z-index: ${zIndex.MOBILE_FILTERS_MENU};
    transition: all 0.2s ease-in;
  }
`;

const Overlay = styled.div<Pick<FiltersMenuContainerProps, "isOpen">>`
  position: fixed;
  top: 0;
  left: 0;
  height: ${(p) => (p.isOpen ? "100vh" : "0px")};
  width: 100vw;
  background-color: #000;
  opacity: 0.2;
  z-index: ${zIndex.MOBILE_OVERLAY};
`;

const CloseIconWrapper = styled.div`
  width: 22px;
`;

export default FiltersMenuContainer;