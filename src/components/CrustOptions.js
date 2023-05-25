import { useSelector, useDispatch } from "react-redux";
import { updateCrust } from "../state/ordersSlice";

const CrustOptions = () => {
  const dispatch = useDispatch();

  const crusts = useSelector((state) => state.options.crusts);
  const crustSelection = useSelector((state) => state.orders[0].pizza.crust);

  const updateCrustSelection = (crustId) => dispatch(updateCrust({ crustId }));

  const handleCrustChange = (e) => {
    const crustId = parseInt(e.target.value);
    updateCrustSelection(crustId);
  };

  return (
    <div className="crust-options-container">
      <h4>Crust options:</h4>

      <div className="crust-options">
        {crusts.map((crust) => (
          <label key={crust.id}>
            {crust.name}
            <input
              type="radio"
              name="pizzaCrustChoice"
              value={crust.id}
              checked={crust.id === crustSelection}
              onChange={handleCrustChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CrustOptions;
