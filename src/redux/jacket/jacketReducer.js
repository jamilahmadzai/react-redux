import { BUY_JACKET } from "./jacketType";

const initialState = {
  numOfJackets: 50,
};

const jacketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JACKET:
      return {
        ...state,
        numOfJackets: state.numOfJackets - action.payload,
      };
    default:
      return state;
  }
};

export default jacketReducer;
