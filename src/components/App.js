import React from 'react';
import PizzaSize from './Pizza-Size.js';
import Crust from './Crust.js';
import Toppings from './Toppings.js';
import Selection from './Selection.js';
import SelectedItems from './SelectedItems.js';
import Order from './Order.js';

{/*Testing*/}



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza App</h1>
      </header>
    <div className="container">
      <div className="column">
        <Selection data={props.data}>
        {/*Renders order options on the left side of the page*/}
        </Selection>
      </div>
      <div className="column">
        <SelectedItems>
        {/*Renders selected items on the right side of the page*/}
        </SelectedItems>
      </div>
    </div>
      <div className="order">
        <Order>
        {/*Order component for the bottom of the page*/}
        </Order>
      </div>
    </div>
  );
}

export default App;
