import styled from "styled-components";

export const Container = styled.div`
  min-width: 0%;
  min-height: 12vh;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 9px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImgProduct = styled.img`
  width: 80px;
  height: 80px;
`;

export const Text = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 1px;
  font-size: 15px;
  font-family: Nunito;
  text-transform: capitalize;
`;

export const Button = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 1px;
  font-size: 15px;
  font-family: Nunito;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Price = styled.h1`
  margin: 0px;
  font-weight: 900;
  font-family: Nunito;
  font-size: 19px;
`;
