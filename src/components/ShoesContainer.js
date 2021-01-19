import React, { useState } from "react";
import { connect } from "react-redux";
import { buyShoes } from "../redux/index";

function ShoesContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>
        {props.numOfShoes > 0
          ? `Number of pair of shoes in stock: ${props.numOfShoes}`
          : "Out of stock"}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          return props.buyShoes(number), setNumber(1);
        }}
      >
        Buy {number} Pair
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfShoes: state.shoes.numOfShoes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShoes: (number) => dispatch(buyShoes(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesContainer);
