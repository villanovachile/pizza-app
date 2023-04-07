import { updateTopping } from "../options/optionsSlice";
import { useSelector, useDispatch } from "react-redux";
import ToppingItem from "./ToppingItem";

const Toppings = () => {
  const dispatch = useDispatch();

  const toppings = useSelector((state) => state.options.toppings);

  const updateToppingSelection = (toppingId, selection) => {
    dispatch(updateTopping({ id: toppingId, selection: selection }));
  };

  const getToppingSelection = (toppingId) => {
    const topping = toppings.find((t) => t.id === toppingId);
    if (topping) {
      return topping.selection;
    } else {
      return null;
    }
  };

  return (
    <div className="toppings-container">
      {toppings.map((topping) => (
        <div className="topping-items" key={topping.name}>
          <ToppingItem
            toppingName={topping.name}
            toppingId={topping.id}
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
