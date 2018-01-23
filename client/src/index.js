import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";
import { loadState, saveState } from "./sessionStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(reduxThunk)));

store.subscribe(() => {
  saveState({
    logInUser: store.getState().logInUser
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById("root"));
