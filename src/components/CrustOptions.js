const CrustOptions = () => {
  return (
    <div className="crust-options-container">
      <h4>Crust options:</h4>

      <div className="crust-options">
        <label>
          Orginal
          <input type="radio" name="pizzaSizeChoice" value="original" />
        </label>

        <label>
          Garlic Butter
          <input type="radio" name="pizzaSizeChoice" value="garlic-butter" />
        </label>

        <label>
          Stuffed Crust
          <input type="radio" name="pizzaSizeChoice" value="stuffed-crust" />
        </label>
      </div>
    </div>
  );
};

export default CrustOptions;
