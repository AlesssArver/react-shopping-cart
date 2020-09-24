import React, { FC } from "react";

import "./index.sass";

import { IGood } from "../../api/good";

import { Button, Card } from "../common";

type IProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  incrementGood: (id: number, quantity: number) => void;
  deletetGood: (id: number) => void;
  addToCard: (good: IGood) => void;
};

const Good: FC<IProps> = ({
  id,
  name,
  price,
  quantity,
  incrementGood,
  deletetGood,
  addToCard,
}) => {
  const onIncrement = () => incrementGood(id, quantity++);
  const onDecrement = () => incrementGood(id, quantity--);

  const onAddToCard = () => addToCard({ id, name, price, quantity });

  return (
    <Card className="good-card" title={name}>
      <ul>
        <li>price: {price}$</li>
        <li>puantity: {quantity}</li>
      </ul>
      <div className="buttons__wrapper">
        <Button onClick={onDecrement} size="small">
          -
        </Button>
        <Button onClick={onIncrement} size="small">
          +
        </Button>
      </div>
      <Button className="good-card--button" onClick={onAddToCard}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default Good;
