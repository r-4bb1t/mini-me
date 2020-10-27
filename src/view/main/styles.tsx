import styled from "styled-components/macro";
import { BREAKPOINT } from "../../constant";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: #e6a0a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  max-width: 36rem;
  max-height: 100vh;
  background: #e6a0a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${BREAKPOINT}px) {
    max-width: 72rem;
    flex-direction: row;
  } //이건 출시할땐 지우자.
`;

export const ResultContainer = styled.div`
  width: 36rem;
  height: 36rem;
  background: #fff;
`;

export const AssetListContainer = styled.div`
  width: 36rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;