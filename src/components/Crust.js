import React from 'react';

function Crust() {
    return (
        <>
         <p> 
            Choose your crust style: 
            <br />
            <label>
                <input type="radio" name="crustChoice" value="original" />         
                Original
             </label> 
             <br />
             <label>
                 <input type="radio" name="crustChoice" value="garlicButter" />
                 Garlic-Butter
             </label> 
             <br />
             <label>
                 <input type="radio" name="crustChoice" value="cheeseStuffed" />
                 Cheese-Stuffed
             </label>
         </p>
        </>
     );
}

export default Crust; 