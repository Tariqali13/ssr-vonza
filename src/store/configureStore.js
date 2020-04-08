import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
  createStore
);

// const rootReducer = combineReducers({
//   reducers,
// });

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducers, initialState);
}
