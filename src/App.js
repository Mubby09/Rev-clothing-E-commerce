import React from "react";
import "./pages/homepage.style.css";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
