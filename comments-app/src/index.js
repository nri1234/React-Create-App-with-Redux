import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// ------------ inside-app imports ----------------------------------
import * as serviceWorker from "./serviceWorker";
import { reducer } from "./reducer";
import App from "./App";
import { addComment } from "./actions";
import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(addComment("pierwszy komentarz"));
store.dispatch(addComment("drugi komentarz"));

serviceWorker.unregister();
