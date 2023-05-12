import { updateTopping } from "../state/ordersSlice";
import { useSelector, useDispatch } from "react-redux";
import ToppingItem from "./ToppingItem";

const Toppings = () => {
  const dispatch = useDispatch();

  const toppings = useSelector((state) => state.options.toppings);
  const toppingSelections = useSelector((state) => state.orders[0].pizza.toppings);

  const updateToppingSelection = (toppingId, selection) => {
    dispatch(updateTopping({ toppingIds: [toppingId], selection: selection }));
  };

  return (
    <div className="toppings-container">
      {toppings.map((topping) => (
        <div className="topping-items" key={topping.name}>
          <ToppingItem
            toppingName={topping.name}
            toppingId={topping.id}
            selection={toppingSelections[topping.id]}
            updateToppingSelection={updateToppingSelection}
          />
        </div>
      ))}
    </div>
  );
};

export default Toppings;
