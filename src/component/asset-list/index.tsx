import React, { useEffect, useState } from "react";
import * as S from "./styles";

import Slider from "../slider";

interface AssetListProps {
  count: number;
  title: string;
  type: number;
  char: number[];
  setChar: (type: number, i: number) => void;
  color: number[][];
  setColor: (type: number, h: number, s: number, l: number) => void;
  focus: number;
  updateFocus: (n: number) => void;
}

function AssetList({ count, type, title, char, setChar, color, setColor, focus, updateFocus }: AssetListProps) {
  const boxClick = (i: number) => {
    setChar(type, i);
  };
  const listClick = () => {
    updateFocus(type);
  };
  return (
    <>
      <S.Layout onClick={(e) => listClick()}>
        <S.Title>{title}</S.Title>
        <S.BoxContainer>
          {[...Array(count)].map((n, i) => (
            <S.Box isSelected={char[type] === i} onClick={(e) => boxClick(i)} key={i}>
              <S.ImageSlice
                src={`process.env.PUBLIC_URL/assets/${type}.png`}
                index={i}
                key={i}
                hue={color[type][0]}
                sat={color[type][1]}
                bri={color[type][2]}
              />
            </S.Box>
          ))}
        </S.BoxContainer>
        {type === focus && (
          <Slider type={type} hue={color[type][0]} sat={color[type][1]} bri={color[type][2]} setColor={setColor} />
        )}
      </S.Layout>
    </>
  );
}

export default AssetList;
