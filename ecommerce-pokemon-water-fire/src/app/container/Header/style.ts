import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 1vh;
  padding-bottom: 2vh;
  height: 10vh;
  background-color: indigo;

  @media (max-width: 780px) {
    flex-direction: row;
    align-items: flex-start;
    height: 20vh;
  }
`;

export const Logo = styled.div`
  max-width: 12vw;

  @media (max-width: 780px) {
    width: 10vw;
  }
`;

export const MarketPlace = styled.div`
  align-items: center;
  display: flex;
  height: 14vh;
  justify-content: flex-end;
  margin-right: 3.5vw;
  cursor: pointer;
`;

export const Search = styled.div`
  width: 45vw;
  height: 5vh;
  margin-left: -20vw;
  margin-top: 1vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  padding: 6px;
  justify-content: space-between;

  @media (max-width: 780px) {
    position: absolute;
    align-self: flex-end;
    margin-left: 0;
    width: 85vw;
    margin-top: 8vh;
  }
`;

export const ContainerLogoSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 62vw;
  align-items: center;

  @media (max-width: 1060px) {
    min-width: 70vw;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const CloseButton = styled.h1`
  color: indigo;
  font-weight: 700;
  font-family: Nunito;
  margin-top: 23;
  font-size: 27;
  align-items: center;
  cursor: pointer;
`;

export const LabelMiddle = styled.label`
  color: rgba(0, 0, 0, 0.25);
  margin: 0 10px;
  text-align: center;
  justify-content: center;
  display: flex;
  font-size: 33px;
  align-items: center;
`;

export const CircleItems = styled.div`
  border-radius: 50px;
  background-color: #a10808;
  width: 24px;
  height: 24px;
  display: flex;
  position: absolute;
  margin-top: -13px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const NumberItems = styled.h1`
  color: white;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 900;
`;
