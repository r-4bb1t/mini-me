import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { toPng } from "html-to-image";

import AssetList from "../../component/asset-list";
import Result from "../../component/result";

function Main() {
  const [char, updateChar] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [color, updateColor] = useState([
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
    [0, 50, 50],
  ]);
  const [focus, updateFocus] = useState(0);
  const [r, reRender] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    if (ref.current != null && isClicked) {
      htmlToImage.toPng(ref.current).then(function (dataUrl) {
        download(dataUrl, "a.png");
      });
      setIsClicked(false);
    }
  }, [isClicked]);
  const onButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <S.Layout>
        <S.Contents>
          <S.ResultContainer>
            <S.SaveArea ref={ref}>
              <Result count={8} char={char} color={color} />
            </S.SaveArea>
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
              count={5}
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
              count={6}
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
              count={15}
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
            <AssetList
              count={4}
              title="안경"
              type={6}
              key={6}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
            <AssetList
              count={4}
              title="배경"
              type={7}
              key={7}
              char={char}
              setChar={setChar}
              setColor={setColor}
              color={color}
              focus={focus}
              updateFocus={updateFocus}
            />
          </S.AssetListContainer>
          <S.SaveButton onClick={(e) => onButtonClick()}>저장</S.SaveButton>
        </S.Contents>
      </S.Layout>
    </>
  );
}

export default Main;
