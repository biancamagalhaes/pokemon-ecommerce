import React from "react";
import { Container, ContainerModal, Text } from "./style";
import { getCheckout } from "app/ducks/pokemons";
import { connect } from "react-redux";
import Pokemon from "app/svg/pokemon";

function ModalCheckout(props) {
  return (
    <Container display={props.finishCheckout ? "flex" : "none"}>
      <ContainerModal>
        <Pokemon width={300} height={100} />
        <img src="/img/pokebola.gif" style={{ height: 80 }} alt="pokeball" />
        <Text>Compra efetuada com sucesso!</Text>
      </ContainerModal>
    </Container>
  );
}

export default connect(getCheckout, () => ({}))(ModalCheckout);
