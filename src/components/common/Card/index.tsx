import React, { FC } from "react";
import { Card } from "antd";
import cn from "classnames";

import "./index.sass";

type IProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  actions?: Array<any>;
};
const MyCard: FC<IProps> = ({ children, className, title, actions }) => {
  return (
    <Card title={title} className={cn('card', className)} actions={actions}>
      {children}
    </Card>
  );
};

export default MyCard;
