import React from "react";

//react-router-dom
//BrowserRouter - identifica que estaremos usando navegação por browser
//Switch - permite apenas um acesso por vez
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Employees from "./pages/employees";
import Products from "./pages/products";
import Timing from "./pages/timing";
import Card from "./components/cards/CardUI";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    {/*retirar essa Route - Products*/}
    <Route path="/products/:id" component={Product} />
    <Route path="/employees/" component={Employees} />
    <Route path="/products/" component={Products} />
    <Route path="/timing/" component={Timing} />
  </Switch>
);

export default Routes;
