import React, { useState } from "react";
import { connect } from "react-redux";
import { buyJacket } from "../redux/";

function JacketComponent(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>
        {" "}
        {props.numOfJacket > 0
          ? `Number of Jackets in store: ${props.numOfJacket}`
          : "Out of Stock"}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          return props.buyJacket(number), setNumber(1);
        }}
      >
        Buy {number} Jacket
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfJacket: state.jacket.numOfJackets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyJacket: (number) => dispatch(buyJacket(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JacketComponent);
