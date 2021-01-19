import { BUY_SHOES } from "./shoesTypes";

export const buyShoes = (number = 1) => {
  return {
    type: BUY_SHOES,
    payload: number,
  };
};
