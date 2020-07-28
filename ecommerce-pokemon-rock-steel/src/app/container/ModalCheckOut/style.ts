import styled from "styled-components";

export const Container = styled.div`
  ${(props) => `display: ${props.display};`}
  flex: 1;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 780px) {
    flex-direction: row;
    align-items: flex-start;
    height: 20vh;
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  width: 40%;
  height: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4vw;
  background-color: rgba(255, 255, 255);

  @media (max-width: 780px) {
    flex-direction: row;
    align-items: flex-start;
    height: 20vh;
  }
`;

export const Text = styled.h1`
  text-align: center;
  font-family: Nunito;
  font-size: 30;
  font-weight: 800;
  margin: 10px 0;
`;
