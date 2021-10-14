import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
