import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface ResultProps {
  count: number;
  char: number[];
  color: number[][];
}

function Result({ count, char, color }: ResultProps) {
  return (
    <>
      <S.Layout>
        <S.BoxContainer>
          {[...Array(count)].map((n, i) => (
            <S.Parts
              src={`/assets/${i}.png`}
              index={char[i]}
              key={i}
              hue={color[i][0]}
              sat={color[i][1]}
              bri={color[i][2]}
            />
          ))}
        </S.BoxContainer>
      </S.Layout>
    </>
  );
}

export default Result;
