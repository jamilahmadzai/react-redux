import { BUY_JACKET } from "./jacketType";

export const buyJacket = (number = 1) => {
  return {
    type: BUY_JACKET,
    payload: number,
  };
};
