import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { IGood } from "../api/good";
import { IRootState } from "../flux";
import { getGoods, deletetGood } from "../flux/reducers/cart";

import { Cart } from "../pages";

const ContactsContainer: FC<IMapStateToProps & IMapDispatchToProps> = (
  props
) => {
  useEffect(() => {
    const getGoodsData = () => props.getGoods();
    getGoodsData();
  }, []);

  return (
    <>
      <Cart goods={props.goods} deletetGood={props.deletetGood}/>
    </>
  );
};

type IMapStateToProps = {
  goods: Array<IGood>;
};
type IMapDispatchToProps = {
  getGoods: () => void;
  deletetGood: (id: number) => void;
};
const MapStateToProps = (state: IRootState): IMapStateToProps => ({
  goods: state.cart.goods,
});
export default connect(MapStateToProps, {
  getGoods, deletetGood
})(ContactsContainer);
