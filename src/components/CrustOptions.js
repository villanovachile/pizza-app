import { useSelector, useDispatch } from "react-redux";
import { updateCrust } from "../options/optionsSlice";

const CrustOptions = () => {
  const dispatch = useDispatch();

  const crust = useSelector((state) => state.options.crust);

  const updateCrustSelection = (crustId, value) => {
    dispatch(updateCrust({ id: crustId, value: value }));
  };

  const handleCrustChange = (e) => {
    const crustId = parseInt(e.target.value);
    crust.map((crust) =>
      crust.id === crustId
        ? updateCrustSelection(crust.id, true)
        : updateCrustSelection(crust.id, false)
    );
  };

  return (
    <div className="crust-options-container">
      <h4>Crust options:</h4>

      <div className="crust-options">
        {crust.map((crust) => (
          <label key={crust.id}>
            {crust.name}
            <input
              type="radio"
              name="pizzaCrustChoice"
              value={crust.id}
              checked={crust.value}
              onChange={(e) => {
                handleCrustChange(e);
              }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CrustOptions;
