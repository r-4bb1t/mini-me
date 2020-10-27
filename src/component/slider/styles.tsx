import styled, { css, keyframes } from "styled-components/macro";

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;

export const Layout = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: pink;
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
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.4rem;
    margin-top: -0.2rem;
    width: 0.5rem;
    background-color: white;
    cursor: pointer;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1rem;
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

export const StyledThumb = styled.div`
  height: 1rem;
  line-height: 1rem;
  width: 1rem;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  cursor: grab;
  transition: 0.1s;
  outline: none;
`;

export const StyledTrack = styled.div`
  width: 100%;
  top: 0;
  bottom: 0;
  background: red;
`;

/**/
