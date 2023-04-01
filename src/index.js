import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./options/store";
import "./index.css";
import App from "./components/App";

const pizzaSize = ["Small", "Medium", "Large"];
const crustStyle = ["Original", "Garlic-Butter", "Cheese-Stuffed"];
const toppings = ["Sauce", "Pepperoni", "Onion", "Sausage", "Pineapple"];

const pizzaData = { pizzaSize, crustStyle, toppings };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App data={pizzaData} />
    </Provider>
  </React.StrictMode>
);
