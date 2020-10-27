import styled from "styled-components/macro";
import { BREAKPOINT } from "../../constant";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  max-width: 36rem;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${BREAKPOINT}px) {
    max-width: 72rem;
    flex-direction: row;
  }
`;

export const ResultContainer = styled.div`
  width: 36rem;
  height: 36rem;
  background: #fff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const AssetListContainer = styled.div`
  width: 36rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;
