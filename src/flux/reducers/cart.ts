import { InferActionsTypes, ThunkType } from "../index";
import { messageSuccess } from "../../utils/message";
import action from "../actions/cart";
import { IGood } from "../../api/good";
import api from "../../api/cart";

const initialState = {
  goods: [] as Array<IGood>,
};
type IState = typeof initialState;
type IActions = InferActionsTypes<typeof action>;
type T = ThunkType<IActions>;

export default (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case "CART/GET_GOODS":
      return {
        ...state,
        goods: action.goods,
      };
    case "CART/ADD_GOOD":
      return {
        ...state,
        goods: [...state.goods, action.good],
      };
    case "CART/DELETE_GOOD":
      return {
        ...state,
        goods: state.goods.filter((g) => g.id !== action.id),
      };
    default:
      return state;
  }
};

export const getGoods = (): T => async (dispatch) => {
  const data = await api.getGoods();
  dispatch(action.getGoods(data));
};
export const addGood = (good: IGood): T => async (dispatch) => {
  await api.addGood(good);
  dispatch(action.addGood(good));
  messageSuccess("Good was added in cart");
};
export const deletetGood = (id: number): T => async (dispatch) => {
  await api.deleteGood(id);
  dispatch(action.deleteGood(id));
  messageSuccess("Good was deleted from cart");
};
