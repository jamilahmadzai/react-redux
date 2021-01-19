import { BUY_SHOES } from "./shoesTypes";

const initialState = {
  numOfShoes: 100,
};

const shoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHOES:
      return {
        ...state,
        numOfShoes: state.numOfShoes - action.payload,
      };
    default:
      return state;
  }
};

export default shoesReducer;
