import React, { useEffect, useState } from "react";
import plusIcon from "./../assests/+.png";
import minusIcon from "./../assests/-.png";
import resetIcon from "./../assests/reset.png";

export default function Counter() {
  // states for component
  const [maxLimit, setMaxLimit] = useState(10);
  const [warning, setWarning] = useState(false);
  const [value, setValue] = useState(0);

  // useEffect to watch limits and warnings
  useEffect(() => {
    console.log("useEffect", value, maxLimit);
    if (value >= Number(maxLimit)) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [value, maxLimit]);

  //event handler functions
  const handleChange = (action) => {
    if (action === "inc") {
      setValue((prevVal) => {
        if (prevVal >= maxLimit) return prevVal;
        else return prevVal + 1;
      });
    } else if (action === "dec") {
      setValue((prevVal) => {
        if (prevVal === 0) return prevVal;
        else return prevVal - 1;
      });
    }
  };

  const handleResetCounter = () => {
    setValue(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-header">COUNTER</div>
      <div className="counter-body">
        <img
          src={resetIcon}
          alt="reset"
          width="30px"
          className="resetIcon"
          onClick={handleResetCounter}
        />
        <div
          className="counter-btn"
          onClick={() => {
            handleChange("inc");
          }}
        >
          <img
            className="counter-btn-icon"
            src={plusIcon}
            width="80px"
            alt="plus"
          />
        </div>
        <div className="counter-value">{value}</div>
        <div
          className="counter-btn"
          onClick={() => {
            handleChange("dec");
          }}
        >
          <img
            className="counter-btn-icon"
            src={minusIcon}
            width="60px"
            alt="minus"
          />
        </div>
      </div>
      <div className="config">
        <div className="config-container">
          <div className="config-container-item">
            <span className="config-label"> Modify Max Limit : </span>
            <input
              className="config-input"
              value={maxLimit}
              onChange={(e) => {
                setMaxLimit(e.target.value);
                setWarning(false);
              }}
            />
          </div>
        </div>
      </div>
      {warning && (
        <div className="warrning">
          <span>Limit reached !</span>
          <button className="reset-btn" onClick={handleResetCounter}>
            Reset <img src={resetIcon} alt="" width="10px" />
          </button>
        </div>
      )}
    </div>
  );
}
