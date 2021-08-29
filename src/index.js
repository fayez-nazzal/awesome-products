import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const injectGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("js", new Date());

  gtag("config", "UA-206070895-1");
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-206070895-1"
    ></script>
    <script>{injectGoogleAnalytics()}</script>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
