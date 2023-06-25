import { useSelector } from "react-redux";

const BASE_PIZZA_PRICE = {
  "Small": 600,
  "Medium": 900,
  "Large": 1100,
}

const OrderSummary = () => {

  const sizes = useSelector((state) => state.options.size);
  const sizeSelection = useSelector((state) => state.orders[0].pizza.size);
  const size = sizes.find((item) => item.id === sizeSelection);

  const crusts = useSelector((state) => state.options.crusts);
  const crustSelection = useSelector((state) => state.orders[0].pizza.crust);
  const crust = crusts.find((item) => item.id === crustSelection);

  const toppings = useSelector((state) => state.orders[0].pizza.toppings);

  const prices = useSelector((state) => state.prices);

  let total = BASE_PIZZA_PRICE[size.name] + prices[crust.id][size.name];

  for (let toppingId in toppings) {
    total += prices[toppingId][size.name];
  }

  const formattedTotal = (total / 100).toFixed(2);

  return (
    <div className="Summary">
      <div className="sizeSelction">Size: {size.name}</div>
      <div className="crustSelection"> Crust: {crust.name}</div>
      <div className="order-summary">Order Total: {formattedTotal}</div>
    </div>
  );
};

export default OrderSummary;
