import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
