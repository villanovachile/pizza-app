import React from "react";

function PizzaSize() {
  return (
    <div className="pizza-size-container">
      <h4>Choose your pizza size:</h4>
      <div className="pizza-size-options">
        <label>
          Small
          <input type="radio" name="pizzaSizeChoice" value="small" />
        </label>
        <label>
          Medium
          <input type="radio" name="pizzaSizeChoice" value="medium" />
        </label>
        <label>
          Large
          <input type="radio" name="pizzaSizeChoice" value="large" />
        </label>
      </div>
    </div>
  );
}

export default PizzaSize;
