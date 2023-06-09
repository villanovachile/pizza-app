import { useSelector, useDispatch } from "react-redux";

const OrderSummary = () => {
  const currentOrder = useSelector((state) => state.orders[0].pizza);
  const prices = useSelector((state) => state.options.price);
  const priceSize = prices.size[Number(currentOrder.size)];
  const priceToppings =
    Object.keys(currentOrder.toppings).length * prices.toppings;

  const priceTotal = priceSize + priceToppings;


  const size = useSelector((state) => state.options.size);
  const toppings = useSelector((state) => state.options.toppings);
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


  const currentToppings = () => {
    let tempToppings = [];
    toppings.map((topping) => {

      Object.entries(currentOrder.toppings).map(([id, partition]) => {
      
      if (Number(id) === topping.id) {
        tempToppings.push(`${topping.name} (${partition})`);
      }
      });
    });

  return tempToppings.join(", ");

  };



  return (
  <div className="Summary">
    <div className="sizeSelction">Size: {renderSizeSelection}</div>
    <div className="crustSelection"> Crust: {renderCrustSelection}</div>
    <div className="toppingsSelection"> Toppings: {currentToppings()}</div>
    <div className="order-summary">Order Total: ${priceTotal}</div>
  </div>
  );
};

export default OrderSummary;
