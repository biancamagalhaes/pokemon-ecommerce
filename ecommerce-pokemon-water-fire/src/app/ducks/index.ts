import { combineReducers, Reducer } from "redux";
import { RootState } from "./state";
import axios from "axios";
import pokemonsReducer from "./pokemons";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export interface Action {
  type: string;
  payload: any;
}

export const reducers: Reducer<RootState> = combineReducers<RootState, any>({
  pokemons: pokemonsReducer,
});

export const rootReducer = (state: RootState, action: any) => {
  return reducers(state, action);
};

axios.defaults.headers = {
  "Content-Type": "application/json",
};

export type Error = any;
