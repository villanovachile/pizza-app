import React from 'react';
import PizzaSize from './Pizza-Size.js';
import Crust from './Crust.js';
import Toppings from './Toppings.js';

{/*Testing*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza App</h1>
      </header>
      <PizzaSize />
      <Crust />
      <Toppings />
    </div>
  );
}

export default App;
