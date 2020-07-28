import React, { useEffect } from "react";
import { Grid, Text } from "./style";
import {
  getProducts,
  fetchPokemonsWater,
  fetchPokemonsFire,
  addProductInShoppingCart,
  Pokemon,
} from "app/ducks/pokemons";
import { connect } from "react-redux";
import ProducItem from "app/components/ProducItem";
import { Ring } from "react-awesome-spinners";

function Products(props) {
  useEffect(() => {
    props.fetchPokemonsWater().then(() => props.fetchPokemonsFire());
  }, []);
  return (
    <Grid>
      <div style={{ alignSelf: "center" }}>
        {props.loading && <Ring color={"indigo"} />}
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
  fetchPokemonsWater: () => dispatch(fetchPokemonsWater()),
  fetchPokemonsFire: () => dispatch(fetchPokemonsFire()),
  addProductInShoppingCart: (product: Pokemon) =>
    dispatch(addProductInShoppingCart(product)),
}))(Products);
