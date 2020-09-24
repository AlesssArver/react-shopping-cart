import { IGood } from "../../api/good";

export default {
  getGoods: (goods: Array<IGood>) => ({ type: "CART/GET_GOODS", goods } as const),
  addGood: (good: IGood) => ({ type: "CART/ADD_GOOD", good } as const),
  deleteGood: (id: number) => ({ type: "CART/DELETE_GOOD", id } as const),
};
