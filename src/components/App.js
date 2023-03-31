import React from "react";
import PizzaSize from "./PizzaSize.js";
import Toppings from "./Toppings.js";
import CrustOptions from "./CrustOptions.js";
import OrderSummary from "./OrderSummary.js";

function App(props) {
  return (
    <div className="pizza-app-container">
      <header className="App-header">
        <h1>Pizza App</h1>
      </header>
      <PizzaSize />
      <CrustOptions />
      <Toppings />
      <OrderSummary />
    </div>
  );
}

export default App;
