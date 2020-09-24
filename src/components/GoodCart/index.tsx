import React, { FC } from "react";

import { Card, Button } from "../common";

type IProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  deletetGood: (id: number) => void;
};

const Good: FC<IProps> = ({ id, name, price, quantity, deletetGood }) => {
  const onDeleteGood = () => deletetGood(id)

  return (
    <Card title={name} actions={[<Button onClick={onDeleteGood}className="button--danger" key="delete">Delete</Button>]}>
      <ul>
        <li>price: {price}$</li>
        <li>puantity: {quantity}</li>
      </ul>
    </Card>
  );
};

export default Good;
