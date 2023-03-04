import React from 'react';
import PizzaSize from './Pizza-Size.js';
import Crust from './Crust.js';
import Toppings from './Toppings.js';
import index from '../index.css';

function Selection(){
    return(
        <div className="orderItems" >
            <h1>Here's Your Order!</h1>
            <PizzaSize />
            <Crust />
            <Toppings />
        </div>
    );
}

export default Selection;