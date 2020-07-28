import styled from "styled-components";

export const Container = styled.div`
  min-width: 22vw;
  min-height: 38vh;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media (max-width: 780px) {
    min-width: 27vw;
  }
`;

export const ImgProduct = styled.img`
  width: 110px;
  height: 110px;
`;

export const Text = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Nunito;
  text-align: center;
  text-transform: capitalize;
`;

export const Type = styled.h4`
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 0px;
  font-family: Nunito;
  text-align: center;
  text-transform: capitalize;
`;

export const Button = styled.button`
  width: 60%;
  min-width: 105px;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.44);
  border-radius: 3px;
  border: none;
  font-family: Nunito;
  font-weight: bold;
  background-color: #2d70b6;
  color: white;
  padding: 7px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Price = styled.h1`
  margin: 0px;
  font-weight: 900;
  font-family: Nunito;
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`;
