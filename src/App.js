import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop.page";
import Header from "../src/components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
