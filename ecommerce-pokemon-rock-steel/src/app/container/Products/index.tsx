import React, { useEffect } from "react";
import { Grid, Text } from "./style";
import {
  getProducts,
  fetchPokemonsRock,
  fetchPokemonsSteel,
  addProductInShoppingCart,
  Pokemon,
} from "app/ducks/pokemons";
import { connect } from "react-redux";
import ProducItem from "app/components/ProducItem";
import { Ring } from "react-awesome-spinners";

function Products(props) {
  useEffect(() => {
    props.fetchPokemonsRock().then(() => props.fetchPokemonsSteel());
  }, []);
  return (
    <Grid>
      <div style={{ alignSelf: "center" }}>
        {props.loading && <Ring color={"crimson"} />}
      </div>

      {!props.loading ? (
        props.products.length > 0 ? (
          props.products.map((item, index) => (
            <ProducItem
              key={index}
              image={item.image}
              name={item.name}
              type={item.type}
              price={item.price}
              addToCart={(product: Pokemon) =>
                props.addProductInShoppingCart(product)
              }
            />
          ))
        ) : (
          <Text>{"Nenhum item encontrado"}</Text>
        )
      ) : null}
    </Grid>
  );
}

export default connect(getProducts, (dispatch: any) => ({
  fetchPokemonsRock: () => dispatch(fetchPokemonsRock()),
  fetchPokemonsSteel: () => dispatch(fetchPokemonsSteel()),
  addProductInShoppingCart: (product: Pokemon) =>
    dispatch(addProductInShoppingCart(product)),
}))(Products);
