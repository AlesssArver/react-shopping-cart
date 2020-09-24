import { InferActionsTypes, ThunkType } from "../index";
import { messageSuccess } from "../../utils/message";
import action from "../actions/good";
import api, { IGood } from "../../api/good";

const initialState = {
  goods: [] as Array<IGood>,
};
type IState = typeof initialState;
type IActions = InferActionsTypes<typeof action>;
type T = ThunkType<IActions>;

export default (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case "GOOD/GET_GOODS":
      return {
        ...state,
        goods: action.goods,
      };
    case "GOOD/CREATE_GOOD":
      return {
        ...state,
        goods: [action.good, ...state.goods],
      };
    case "GOOD/INCREMENT_GOOD":
      return {
        ...state,
        goods: state.goods.map((g) => {
          if (g.id === action.good.id)
            return {
              ...g,
              name: action.good.name,
              price: action.good.price,
              quantity: action.good.quantity,
            };
          return g;
        }),
      };
    case "GOOD/DELETE_GOOD":
      return {
        ...state,
        goods: state.goods.filter((c) => c.id !== action.id),
      };
    default:
      return state;
  }
};

export const getGoods = (): T => async (dispatch) => {
  const data = await api.getGoods();
  dispatch(action.getGoods(data));
};
export const createGood = (
  name: string,
  price: string,
  quantity: string
): T => async (dispatch) => {
  const priceNumber = parseInt(price);
  const quantityNumber = parseInt(quantity);
  const data = await api.createGood(name, priceNumber, quantityNumber);
  dispatch(action.createGood({ ...data }));
  messageSuccess("Good was added");
};
export const incrementGood = (good: IGood): T => async (dispatch) => {
  const data = await api.incrementGood(
    good.id,
    good.name,
    good.price,
    good.quantity
  );
  dispatch(action.incrementGood(data));
};
export const deletetGood = (id: number): T => async (dispatch) => {
  await api.deleteGood(id);
  dispatch(action.deleteGood(id));
  messageSuccess("Good was deleted");
};
