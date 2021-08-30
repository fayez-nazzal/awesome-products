import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);

history.listen((location) => {
  window.ga("set", "page", location.pathname + location.search);
  window.ga("send", "pageview");
});
