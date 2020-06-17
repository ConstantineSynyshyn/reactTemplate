import * as React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";

import App from "./App";
import DefaultErrorBoundary from "./DefaultErrorBoundary";

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  //3rd arg is delay: required to let app render
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
