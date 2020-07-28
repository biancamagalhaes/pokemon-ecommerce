import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Middleware } from "redux";
import { RootState } from "app/ducks/state";
import { rootReducer } from "app/ducks";
import thunk from "redux-thunk";

export const logger: Middleware = (store) => (next) => (action) => {
  return next(action);
};

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger, thunk);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any,
    initialState,
    middleware
  ) as Store<RootState>;

  if ((module as any).hot) {
    (module as any).hot.accept("app/ducks", () => {
      const nextReducer = require("app/ducks");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
