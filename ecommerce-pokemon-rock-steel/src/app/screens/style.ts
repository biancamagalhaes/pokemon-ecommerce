import styled from "styled-components";

export const ContainerMiddle = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
