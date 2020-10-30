import styled, { css } from "styled-components/macro";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
`;

interface PartsProps {
  index: number;
  src: string;
  hue: number;
  sat: number;
  bri: number;
  isBackground: boolean;
}

export const Parts = styled.div<PartsProps>`
  z-index: ${(props) => (props.isBackground ? 0 : 1)};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: calc(0px - 180px * ${(props) => props.index});
  transition: 0s;
  filter: hue-rotate(calc(${(props) => props.hue} * 3.6deg)) saturate(calc(${(props) => props.sat}% * 2))
    brightness(calc(${(props) => props.bri}% * 2));
`;
