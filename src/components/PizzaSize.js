import { useSelector, useDispatch } from "react-redux";
import { updateSize } from "../state/ordersSlice";


const PizzaSize = () => { 
  const dispatch = useDispatch();

  //const size = useSelector((state) => state.options.size);

  const size = useSelector((state) => state.options.size);
  const sizeSelection = useSelector((state) => state.orders[0].pizza.size); 

  // const updatePizzaSizeSelection = (sizeId, value) => {
  //   dispatch(updateSize({ id: sizeId, value: value }));
  // };

 const updatePizzaSizeSelection = (sizeId) => dispatch(updateSize({ sizeId })); 

  const handlePizzaSizeChange = (e) => {
    const sizeId = parseInt(e.target.value);
    updatePizzaSizeSelection(sizeId);
  };

  return (
    <div className="size-options-container">
      <h4>Choose your pizza size:</h4>

      <div className="size-options">
        {size.map((size) => (
          <label key={size.id}>
            {size.name}
            <input
              type="radio"
              name="pizzaSizeChoice"
              value={size.id}
              checked={size.id === sizeSelection}
              onChange={handlePizzaSizeChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default PizzaSize;
