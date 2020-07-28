import styled from "styled-components";

export const Container = styled.div`
  min-width: 15vw;
  min-height: 38vh;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 8px;
  flex-direction: column;
  display: flex;

  @media (max-width: 780px) {
    min-height: 23vh;
  }
`;

export const ImgProduct = styled.img`
  width: 110px;
  height: 110px;
`;

export const Text = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Nunito;
`;

export const Button = styled.button`
  width: 100%;
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
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vh;

  @media (max-width: 780px) {
    margin-bottom: 0vh;
  }
`;

export const FilterText = styled.h1`
  color: rgba(142, 140, 140);
  font-family: Nunito;
  font-size: 25px;
  margin: 10px;
`;

export const ButtonOK = styled.button`
  border: none;
  background-color: #2d70b6;
  color: white;
  border-radius: 5px;
  min-height: 27px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ContainerFilters = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

export const Checkbox = styled.input`
  height: 21px;
  width: 17px;
  margin-left: 10px;
  color: #2d70b6;
  cursor: pointer;
`;

export const Label = styled.div`
  font-family: "Nunito";
  margin-left: 10px;
`;

export const ContainerRemoveFilter = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const LabelRemoveFilter = styled.div`
  font-family: "Nunito";
  margin-left: 10px;
  font-size: 10px;
  cursor: pointer;
`;
