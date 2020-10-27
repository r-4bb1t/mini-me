import styled, { css, keyframes } from "styled-components/macro";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  //font-weight: 700;
  font-size: 1.4rem;
  background-color: #ddd;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #eee;
`;

interface BoxProps {
  isSelected: boolean;
}

export const Box = styled.div<BoxProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => (props.isSelected ? "#9af367" : "white")};
`;

interface ImageSliceProps {
  index: number;
  src: string;
  hue: number;
  sat: number;
  bri: number;
}

export const ImageSlice = styled.div<ImageSliceProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: calc(0px - 60px * ${(props) => props.index});
  filter: hue-rotate(calc(${(props) => props.hue} * 3.6deg)) saturate(calc(${(props) => props.sat}% * 2))
    brightness(calc(${(props) => props.bri}% * 2)) contrast(calc(max(200% - ${(props) => props.bri}% * 2, 100%)));
`;
