import { useSelector, useDispatch } from "react-redux";

const OrderSummary = () => {
  const currentOrder = useSelector((state) => state.orders[0].pizza);
  const prices = useSelector((state) => state.options.price);
  const priceSize = prices.size[Number(currentOrder.size)];
  const priceToppings =
    Object.keys(currentOrder.toppings).length * prices.toppings;

  const priceTotal = priceSize + priceToppings;


  const size = useSelector((state) => state.options.size);
  const sizeSelection = useSelector((state) => state.orders[0].pizza.size);
  const renderSizeSelection = size.map((item) => {
   if (item.id === sizeSelection) {
    return item.name;
    };
  });

  const crusts = useSelector((state) => state.options.crusts);
  const crustSelection = useSelector((state) => state.orders[0].pizza.crust); 
  const renderCrustSelection = crusts.map((item) => {
    if (item.id === crustSelection) {
     return item.name;
     };
   });

  return (
  <div className="Summary">
    <div className="sizeSelction">Size: {renderSizeSelection}</div>
    <div className="crustSelection"> Crust: {renderCrustSelection}</div>
    <div className="order-summary">Order Total: ${priceTotal}</div>
  </div>
  );
};

export default OrderSummary;
