import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Home from "./containers/Home";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";
import "./style/index.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const Root = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Home />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
