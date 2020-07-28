import React from "react";
import { Container, ImgProduct, Text, Button, Type, Price } from "./style";
import Heart from "app/svg/heart";

function ProductItem(props) {
  return (
    <Container>
      <ImgProduct src={props.image} />
      <div>
        <Text>{props.name}</Text>
        <Type>Tipo: {props.type}</Type>
        <Price>R$ {props.price.toFixed(2)}</Price>
      </div>
      <Button
        onClick={() =>
          props.addToCart({
            image: props.image,
            name: props.name,
            type: props.type,
            price: props.price,
          })
        }
      >
        <Heart width={20} heigth={20} />
        COMPRAR
      </Button>
    </Container>
  );
}

export default ProductItem;
