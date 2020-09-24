import { IGood } from "../../api/good";

export default {
  getGoods: (goods: Array<IGood>) =>
    ({ type: "GOOD/GET_GOODS", goods } as const),
  createGood: (good: IGood) =>
    ({ type: "GOOD/CREATE_GOOD", good } as const),
  incrementGood: (id: number) =>
    ({
      type: "GOOD/INCREMENT_GOOD",
      id,
    } as const),
  deleteGood: (id: number) => ({ type: "GOOD/DELETE_GOOD", id } as const),
};
