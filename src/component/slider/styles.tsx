import styled, { css, keyframes } from "styled-components/macro";

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;

export const Layout = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

interface SliderProps {
  index: string;
  hue?: number;
}

export const RangeInput = styled.input<SliderProps>`
  animation: ${fadein} 0.5s;
  width: 90%;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  border-bottom: 1px solid #ddd;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 2.4rem;
    margin-top: -0.2rem;
    width: 1rem;
    background-color: #ddd;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 2rem;
    background: ${(props) =>
      props.index === "hue"
        ? `linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )`
        : props.index === "sat"
        ? `linear-gradient(
        90deg,
        hsl(calc(${props.hue} * 3.6), 0%, 50%) 0%,
        hsl(calc(${props.hue} * 3.6), 100%, 50%) 100%
    )`
        : `linear-gradient(
        90deg,
        hsl(calc(${props.hue} * 3.6), 100%, 0%) 0%,
        hsl(calc(${props.hue} * 3.6), 100%, 50%) 50%,
        hsl(calc(${props.hue} * 3.6), 100%, 100%) 100%
    )`};
  }
`;
