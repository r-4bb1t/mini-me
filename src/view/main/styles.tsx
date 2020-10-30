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
`;

export const ResultContainer = styled.div`
  width: 36rem;
  height: 36rem;
  min-height: 24rem;
  background: #fff;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AssetListContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin-bottom: 1rem;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 700;
  outline: none;
  border: none;
  background: #9af367;
  margin-bottom: 1rem;
  :hover {
    background: #7bc252;
  }
`;

export const SaveArea = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
