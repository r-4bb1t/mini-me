import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface SliderProps {
  type: number;
  hue: number;
  sat: number;
  bri: number;
  setColor: (type: number, h: number, s: number, l: number) => void;
}

function Slider({ type, hue, sat, bri, setColor }: SliderProps) {
  const hueHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(type, Number(e.target.value), sat, bri);
  };
  const satHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(type, hue, Number(e.target.value), bri);
  };
  const briHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(type, hue, sat, Number(e.target.value));
  };
  return (
    <>
      <S.Layout>
        <S.RangeInput type="range" defaultValue={hue} index="hue" onChange={(e) => hueHandleChange(e)} />
        <S.RangeInput type="range" defaultValue={sat} index="sat" hue={hue} onChange={(e) => satHandleChange(e)} />
        <S.RangeInput type="range" defaultValue={bri} index="bri" hue={hue} onChange={(e) => briHandleChange(e)} />
      </S.Layout>
    </>
  );
}

export default Slider;
