import React, { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import GlobalStyle from "./styles/GlobalStyle";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
