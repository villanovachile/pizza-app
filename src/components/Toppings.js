import React from 'react';

function Toppings() {
    return(
        <>
            <p> 
                Choose your Toppings: 
                <br />
                <label>
                    <input type="radio" name="toppingsChoice" value="sauce" />         
                    Sauce
                </label> 
                <br />
                <label>
                    <input type="radio" name="toppingsChoice" value="pepperoni" />
                    Pepperoni
                </label> 
                <br />
                <label>
                    <input type="radio" name="toppingsChoice" value="onion" />
                    Onion
                </label>
                <br />
                <label>
                    <input type="radio" name="toppingsChoice" value="sausage" />
                    Sausage
                </label>
                <br />
                <label>
                    <input type="radio" name="toppingsChoice" value="pineapple" />
                    Pineapple
                </label>
         </p>

        </>
    )
}

export default Toppings;