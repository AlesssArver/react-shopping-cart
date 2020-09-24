import React, { FC } from "react";

import { IGood } from "../../api/good";

import "./index.sass";

import GoodCart from "../../components/GoodCart";

type IProps = {
  goods: Array<IGood>;
  deletetGood: (id: number) => void;
};
const Cart: FC<IProps> = ({ goods, deletetGood }) => {
  const goodsData = goods.map((g) => <GoodCart {...g} key={g.id} deletetGood={deletetGood}/>);

  return (
    <div className="goods__wrapper">
      <div className="page__title">
        <h1>Cart</h1>
      </div>
      <div className="goods">{goodsData}</div>
    </div>
  );
};

export default Cart;
