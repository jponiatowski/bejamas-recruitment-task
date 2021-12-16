import React from "react";
import styled from "styled-components";
import NextImage from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const DEFAULT_DESKTOP_RATIO = 0.43;
const DEFAULT_MOBILE_RATIO = 0.62;

const getRatio = (width: number, height: number): number => {
  if (height > width) {
    return Math.round((width / height) * 100) / 100;
  }

  return Math.round((height / width) * 100) / 100;
};

export const Photo: React.FC<PhotoProps> = ({ width, height, src, alt }) => {
  return (
    <ImageWrapper ratio={getRatio(width, height)}>
      <Figure>
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          priority
        />
      </Figure>
    </ImageWrapper>
  );
};

const Figure = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div<{ ratio: number }>`
  grid-area: photo;
  margin-top: 27px;
  margin-bottom: 46px;
  position: relative;
  padding-top: ${(p) =>
    (p.ratio < DEFAULT_DESKTOP_RATIO ? p.ratio : DEFAULT_DESKTOP_RATIO) * 100}%;
  overflow: hidden;

  &::after {
    content: "Photo of the day";
    padding: 21px 56px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 20px;
    line-height: 22px;
    font-weight: ${(p) => p.theme.fontWeights.bold};
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-top: ${(p) =>
      (p.ratio < DEFAULT_MOBILE_RATIO ? p.ratio : DEFAULT_MOBILE_RATIO) * 100}%;

    &::after {
      font-size: 15px;
      line-height: 16px;
      padding: 21px 47px;
    }
  }
`;

export default Photo;
