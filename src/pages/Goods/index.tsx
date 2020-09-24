import React, { FC } from "react";

import "./index.sass";

import { IGood } from "../../api/good";

import { Good, AddGood } from "../../components";

type IProps = {
  goods: Array<IGood>;
  createGood: (name: string, price: string, quantity: string) => void;
  incrementGood: (id: number, quantity: number) => void;
  deletetGood: (id: number) => void;
  addToCard: (good: IGood) => void;
};
const Goods: FC<IProps> = ({
  goods,
  createGood,
  incrementGood,
  deletetGood,
  addToCard,
}) => {
  const goodsData = goods.map((g) => (
    <Good
      {...g}
      key={g.id}
      incrementGood={incrementGood}
      deletetGood={deletetGood}
      addToCard={addToCard}
    />
  ));

  return (
    <div className="goods__wrapper">
      <div className="page__title">
        <h1>Goods</h1>
      </div>
      <AddGood createGood={createGood} />
      <div className="goods">{goodsData}</div>
    </div>
  );
};

export default React.memo(Goods);
