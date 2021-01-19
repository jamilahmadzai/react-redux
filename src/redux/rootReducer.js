import { combineReducers } from "redux";

import shoesReducer from "./shoes/shoesReducer";
import jacketReducer from "./jacket/jacketReducer";

const rootReducer = combineReducers({
  shoes: shoesReducer,
  jacket: jacketReducer,
});

export default rootReducer;
