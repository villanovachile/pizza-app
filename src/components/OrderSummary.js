import { useSelector } from "react-redux";

const OrderSummary = () => {
  
  const order = useSelector((state) => state.options);


  const summary = () => {
    console.log(order);
  }


  
  return <div className="order-summary">

    <button onClick={() => summary()}>OUTPUT ORDER</button>
  </div>;
};

export default OrderSummary;
