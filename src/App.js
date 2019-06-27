import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Routes from "./routes";
import HeaderMenu from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/button";

function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Menu />
      <Footer />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
