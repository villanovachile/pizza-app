const ToppingItem = ({
  toppingName,
  toppingId,
  selection,
  getToppingSelection,
  updateToppingSelection,
}) => {
  return (
    <>
      <div className="topping-name">{toppingName}</div>
      <div className="topping-selection">
        <svg
          viewBox="-2 -2 22 24"
          height="30px"
          width="30px"
          onClick={() => {
            selection !== "left"
              ? updateToppingSelection(toppingId, "left")
              : updateToppingSelection(toppingId, "none");
          }}
        >
          <g transform="rotate(-90, 10, 10)">
            <path
              d="M 0 10 A 10 10 0 0 1 20 10 L 0 10 Z"
              fill={selection === "left" ? "black" : "none"}
              stroke="black"
              strokeWidth="2"
            />
          </g>
        </svg>

        <svg
          viewBox="-2 -2 22 24"
          height="30px"
          width="30px"
          onClick={() => {
            selection !== "whole"
              ? updateToppingSelection(toppingId, "whole")
              : updateToppingSelection(toppingId, "none");
          }}
        >
          <g transform="rotate(-90, 10, 10)">
            <path
              d="M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z"
              fill={selection === "whole" ? "black" : "none"}
              stroke="black"
              strokeWidth="2"
            />
          </g>
        </svg>

        <svg
          viewBox="-2 -2 22 24"
          height="30px"
          width="30px"
          onClick={() => {
            selection !== "right"
              ? updateToppingSelection(toppingId, "right")
              : updateToppingSelection(toppingId, "none");
          }}
        >
          <g transform="rotate(90, 10, 10)">
            <path
              d="M 0 10 A 10 10 0 0 1 20 10 L 0 10 Z"
              fill={selection === "right" ? "black" : "none"}
              stroke="black"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default ToppingItem;
