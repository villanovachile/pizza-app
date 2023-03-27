import React from 'react';
import PizzaSize from './Pizza-Size.js';
import Crust from './Crust.js';
import Toppings from './Toppings.js';
import index from '../index.css';

function Selection(props){
    return(
        <div className="orderItems" >
            <h1>Here's Your Order!</h1>
            <PizzaSize data={ props.data.pizzaSize } />
            <Crust data={ props.data.crustStyle } />
            <Toppings data={ props.data.toppings } />
        </div>
    );
}

export default Selection;