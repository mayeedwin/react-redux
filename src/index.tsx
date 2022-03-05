import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { store } from "./redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./service-worker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
