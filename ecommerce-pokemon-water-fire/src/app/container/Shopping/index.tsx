import React from "react";
import {
  Container,
  Button,
  TotalText,
  TextTitle,
  TitleTotalPrice,
  Alert,
  ContainerItems,
  ContainerPrice,
} from "./style";
import Item from "app/components/ItemShopping";
import {
  getShoppingCart,
  removeProductFromShoppingCart,
  removeAllProductsFromShoppingCart,
  actions,
} from "app/ducks/pokemons";
import { connect } from "react-redux";

function Shopping(props) {
  return (
    <Container display={props.openCart ? "flex" : "none"}>
      <div>
        <TextTitle>Meu carrinho</TextTitle>
        <ContainerItems>
          {props.shoppingCart.length > 0 ? (
            props.shoppingCart.map((item, index) => (
              <Item
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
                removeItem={() => props.removeProductFromShoppingCart(index)}
              />
            ))
          ) : (
            <Alert>0 items adicionados</Alert>
          )}
        </ContainerItems>
      </div>
      <ContainerPrice>
        <TitleTotalPrice>Preço total: </TitleTotalPrice>
        <TotalText>R$ {props.totalItems.toFixed(2)}</TotalText>
        <Button
          onClick={() => {
            props.finishCheckout();
            props.removeAllProductsFromShoppingCart();
            setTimeout(() => props.finishCheckout(), 3000);
          }}
          disabled={props.shoppingCart.length > 0 ? false : true}
        >
          Finalizar Compra
        </Button>
      </ContainerPrice>
    </Container>
  );
}

export default connect(getShoppingCart, (dispatch: any) => ({
  removeProductFromShoppingCart: (index: number) =>
    dispatch(removeProductFromShoppingCart(index)),
  finishCheckout: () => dispatch(actions.finishCheckout()),
  removeAllProductsFromShoppingCart: () =>
    dispatch(removeAllProductsFromShoppingCart()),
}))(Shopping);
