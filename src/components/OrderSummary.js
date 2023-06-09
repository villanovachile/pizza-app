import { useSelector, useDispatch } from "react-redux";

const OrderSummary = () => {
  const currentOrder = useSelector((state) => state.orders[0].pizza);
  const prices = useSelector((state) => state.options.price);
  const priceSize = prices.size[Number(currentOrder.size)];
  const priceToppings =
    Object.keys(currentOrder.toppings).length * prices.toppings;

  const priceTotal = priceSize + priceToppings;

  return <div className="order-summary">Order Total: ${priceTotal}</div>;
};

export default OrderSummary;
