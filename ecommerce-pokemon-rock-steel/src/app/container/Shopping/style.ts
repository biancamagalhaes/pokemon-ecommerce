import styled from "styled-components";

export const Container = styled.div`
  width: 24vw;
  height: 87vh;
  border-left: solid 1px rgba(0, 0, 0, 0.1);
  ${(props: { display: boolean }) => `display:${props.display};`}
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  align-self: flex-end;
  background-color: rgba(255, 255, 255, 0.95);

  @media (max-width: 780px) {
    width: 100vw;
    height: 77vh;
  }
`;

export const Button = styled.button`
  width: 100%;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.44);
  border-radius: 3px;
  border: none;
  font-family: Nunito;
  font-weight: bold;
  ${(props) =>
    `background-color: ${props.disabled ? "rgba(0, 0, 0, 0.44)" : "crimson"};`}
  color: white;
  padding: 7px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  ${(props) => `cursor: ${props.disabled ? "auto" : "pointer"};`}
`;

export const TotalText = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-family: Nunito;
`;

export const TextTitle = styled.h2`
  color: rgba(142, 140, 140);
  font-family: Nunito;
  font-size: 25px;
  margin: 17px;
  margin-bottom: 0;
`;

export const TitleTotalPrice = styled.h1`
  margin: 0;
  font-weight: 900;
  font-family: Nunito;
  font-size: 19px;
`;

export const Alert = styled.h6`
  margin: 17px 17px 0px;
  font-family: Nunito;
`;

export const ContainerItems = styled.div`
  max-height: 60vh;
  overflow-y: auto;
`;

export const ContainerPrice = styled.div`
  margin: 17px 17px 0px;
`;
