import React from "react";
import {
  Container,
  ImgProduct,
  Text,
  Button,
  ContentTop,
  Price,
} from "./style";

function Item(props) {
  return (
    <Container>
      <ContentTop>
        <ImgProduct src={props.image} />
        <div>
          <Text>{props.name}</Text>
          <Price>R$ {props.price.toFixed(2)}</Price>
        </div>
      </ContentTop>

      <Button onClick={() => props.removeItem()}>X</Button>
    </Container>
  );
}

export default Item;
