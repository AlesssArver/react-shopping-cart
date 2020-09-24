import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { IGood } from "../api/good";
import { IRootState } from "../flux";
import {
  getGoods,
  createGood,
  incrementGood,
  deletetGood,
} from "../flux/reducers/good";
import { addGood } from "../flux/reducers/cart";

import { Goods } from "../pages";

const ContactsContainer: FC<IMapStateToProps & IMapDispatchToProps> = (
  props
) => {
  useEffect(() => {
    const getGoodsData = () => props.getGoods();
    getGoodsData();
  }, []);

  return (
    <>
      <Goods
        goods={props.goods}
        createGood={props.createGood}
        incrementGood={props.incrementGood}
        deletetGood={props.deletetGood}
        addToCard={props.addToCard}
      />
    </>
  );
};

type IMapStateToProps = {
  goods: Array<IGood>;
};
type IMapDispatchToProps = {
  getGoods: () => void;
  createGood: (name: string, price: string, quantity: string) => void;
  incrementGood: (good: IGood) => void;
  deletetGood: (id: number) => void;
  addToCard: (good: IGood) => void;
};
const MapStateToProps = (state: IRootState): IMapStateToProps => ({
  goods: state.good.goods,
});
export default connect(MapStateToProps, {
  getGoods,
  createGood,
  incrementGood,
  deletetGood,
  addToCard: addGood,
})(ContactsContainer);
