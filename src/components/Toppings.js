import { updateTopping } from "../options/optionsSlice";
import { useSelector, useDispatch } from "react-redux";
import ToppingItem from "./ToppingItem";

const Toppings = () => {
  const dispatch = useDispatch();

  const toppings = useSelector((state) => state.options.toppings);

  const updateToppingSelection = (toppingName, selection) => {
    dispatch(updateTopping({ name: toppingName, selection: selection }));
  };

  //   updateToppingSelection("pepperoni", "right");

  const getToppingSelection = (toppingName) => {
    const topping = toppings.find((t) => t.name === toppingName);
    if (topping) {
      return topping.selection;
    } else {
      return null;
    }
  };

  //   console.log("Pepperoni selection:", getToppingSelection("pepperoni"));

  return (
    <div className="toppings-container">
      {toppings.map((topping) => (
        <div className="topping-items" key={topping.name}>
          <ToppingItem
            topping={topping.name}
            selection={topping.selection}
            getToppingSelection={getToppingSelection}
            updateToppingSelection={updateToppingSelection}
          />
        </div>
      ))}
    </div>
  );
};

export default Toppings;
