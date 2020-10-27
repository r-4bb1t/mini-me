import React, { useEffect, useState } from "react";
import * as S from "./styles";

import AssetList from "../../component/asset-list";
import Result from "../../component/result";

function Main() {
  const [char, updateChar] = useState([0, 0, 0, 0, 0, 0]);
  const [color, updateColor] = useState([
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
  ]);
  const [focus, updateFocus] = useState(0);
  const [r, reRender] = useState(false);
  const setChar = (type: number, i: number) => {
    let c = char;
    c[type] = i;
    updateChar(c);
    reRender(!r);
  };
  const setColor = (type: number, h: number, s: number, l: number) => {
    console.log(process.env.PUBLIC_URL);
    let c = color;
    let n = [h, s, l];
    c[type] = n;
    updateColor(c);
    reRender(!r);
  };
  return (
    <>
      <S.Layout>
        <S.Contents>
          <S.ResultContainer>
            <Result count={6} char={char} color={color} />
          </S.ResultContainer>
          <S.AssetListContainer>
            <AssetList
              count={1}
              title="피부"
              type={0}
              key={0}
              char={char}
              setChar={setChar}
              color={color}
              setColor={setColor}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={3}
              title="볼"
              type={1}
              key={1}
              char={char}
              setChar={setChar}
              color={color}
              setColor={setColor}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={2}
              title="눈"
              type={2}
              key={2}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={3}
              title="눈썹"
              type={3}
              key={3}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={3}
              title="입"
              type={4}
              key={4}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={5}
              title="머리"
              type={5}
              key={5}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
          </S.AssetListContainer>
        </S.Contents>
      </S.Layout>
    </>
  );
}

export default Main;
