import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Routes from "./routes";
import HeaderMenu from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
