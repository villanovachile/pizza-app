import React from 'react';


function PizzaSize() {
    return (
        <>
         <p> 
            Choose your pizza size: 
            <br />
            <label>
                <input type="radio" name="pizzaSizeChoice" value="small" />         
                Small
             </label> 
             <br />
             <label>
                 <input type="radio" name="pizzaSizeChoice" value="medium" />
                 Medium
             </label> 
             <br />
             <label>
                 <input type="radio" name="pizzaSizeChoice" value="large" />
                 Large
             </label>
         </p>
        </>
     );
}

export default PizzaSize; 