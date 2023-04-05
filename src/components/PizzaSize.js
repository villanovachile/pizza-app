import { useSelector, useDispatch } from "react-redux";
import { updateSize } from "../options/optionsSlice";


const PizzaSize = () => {
  const dispatch = useDispatch();

  const size = useSelector((state) => state.options.size);

  const updatePizzaSizeSelection = (sizeId, value) => {
    dispatch(updateSize({ id: sizeId, value: value }));
  };

  const handlePizzaSizeChange = (e) => {
    const sizeId = parseInt(e.target.value);
   size.map((size) =>
      size.id === sizeId
        ? updatePizzaSizeSelection(size.id, true)
        : updatePizzaSizeSelection(size.id, false)
    );
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
              checked={size.value}
              onChange={(e) => {
                handlePizzaSizeChange(e);
              }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default PizzaSize;
