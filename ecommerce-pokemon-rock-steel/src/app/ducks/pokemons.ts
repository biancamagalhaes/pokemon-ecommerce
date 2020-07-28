import { hen, Hen } from "app/utility/createReducer";
import { createSelector } from "reselect";
import { RootState } from "ducks";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

export type Pokemon = {
  image: string;
  name: string;
  price: number;
  type: string;
};

export interface ProductState {
  products: Array<Pokemon>;
  allProducts: Array<Pokemon>;
  shoppingCart: Array<Pokemon>;
  openCart: boolean;
  finishCheckout: boolean;
  totalItems: number;
  loading: boolean;
}

export type InitialState = ProductState;

const initialState: InitialState = {
  products: [],
  allProducts: [],
  shoppingCart: [],
  totalItems: 0.0,
  finishCheckout: false,
  openCart: false,
  loading: false,
};

const mainSelector = (state: RootState) => state.pokemons;

export const getProducts = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    products: state.products,
    allProducts: state.allProducts,
  };
});

export const getShoppingCart = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    shoppingCart: state.shoppingCart,
    openCart: state.openCart,
    totalItems: state.totalItems,
  };
});

export const getOpenCart = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    openCart: state.openCart,
    numberItems: state.shoppingCart.length,
  };
});

export const getCheckout = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    finishCheckout: state.finishCheckout,
  };
});

class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  listProducts(product: Pokemon) {
    this.state.products = [...this.state.products, product];
  }

  addProductShoppingCart(product: Pokemon) {
    this.state.shoppingCart = [...this.state.shoppingCart, product];
  }

  removeProductShoppingCart(index: number) {
    const cart = this.state.shoppingCart;
    cart.splice(index, 1);
    this.state.shoppingCart = cart;
  }

  openCart(param?: boolean) {
    this.state.openCart = !this.state.openCart;
  }

  totalItems() {
    const prices = this.state.shoppingCart.map((item) => item.price);
    let total = 0;
    if (prices.length > 0) {
      total = prices.reduce((accumulator, item) => accumulator + item);
    }

    this.state.totalItems = total;
  }

  filterProducts(type) {
    if (type === "") {
      this.state.products = this.state.allProducts;
    } else {
      this.state.products = this.state.allProducts.filter(
        (item) => item.type === type
      );
    }
  }

  setAllProducts(product: Pokemon) {
    this.state.allProducts = [...this.state.allProducts, product];
  }

  searchProduct(word: string) {
    if (word === "") {
      this.state.products = this.state.allProducts;
    } else {
      this.state.products = this.state.allProducts.filter(
        (item) => item.name.toUpperCase().indexOf(word.toUpperCase()) > -1
      );
    }
  }

  finishCheckout() {
    this.state.finishCheckout = !this.state.finishCheckout;
  }

  removeAllProductsFromShoppingCart() {
    this.state.shoppingCart = [];
  }
}

//Reducers
export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function removeAllProductsFromShoppingCart(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.openCart(false));
    dispatch(actions.removeAllProductsFromShoppingCart());
    dispatch(actions.totalItems());
  };
}

export function addProductInShoppingCart(
  product: Pokemon
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    dispatch(actions.addProductShoppingCart(product));
    dispatch(actions.totalItems());
  };
}

export function removeProductFromShoppingCart(
  index
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    dispatch(actions.removeProductShoppingCart(index));
    dispatch(actions.totalItems());
  };
}

export function filterProducts(
  type
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    if (type === "rock" || type === "steel" || type === "") {
      dispatch(actions.filterProducts(type));
    }
  };
}

export function fetchPokemonsRock(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`https://pokeapi.co/api/v2/type/6`)
      .then((r: any) => {
        const pokemons = r.data.pokemon;
        pokemons.forEach((item) => {
          dispatch(fetchPokemon(item.pokemon.url, "rock"));
        });

        dispatch(actions.setLoading(false));
      })
      .catch((e) => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function fetchPokemonsSteel(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`https://pokeapi.co/api/v2/type/9`)
      .then((r: any) => {
        const pokemons = r.data.pokemon;
        pokemons.forEach((item: any) => {
          dispatch(fetchPokemon(item.pokemon.url, "steel"));
        });

        dispatch(actions.setLoading(false));
      })
      .catch((e) => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function fetchPokemon(
  url: string,
  type: string
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(url)
      .then((r: any) => {
        if (r.data.sprites.front_shiny !== null) {
          dispatch(
            actions.listProducts({
              name: r.data.name,
              image: r.data.sprites.front_shiny,
              price: r.data.name.length + 0.9,
              type: type,
            })
          );
          dispatch(
            actions.setAllProducts({
              name: r.data.name,
              image: r.data.sprites.front_shiny,
              price: r.data.name.length + 0.9,
              type: type,
            })
          );
        }

        dispatch(actions.setLoading(false));
      })
      .catch((e) => {
        dispatch(actions.setLoading(false));
      });
  };
}
