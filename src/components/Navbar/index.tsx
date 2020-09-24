import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

import "./index.sass";

type IProps = { goodsQuantity: number };
const Navabar: FC<IProps> = ({ goodsQuantity }) => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <Link to="/goods" className="link">
        <Typography>Товары</Typography>
      </Link>
      <Link to="/cart" className="link">
        <Typography>Корзина {goodsQuantity}</Typography>
      </Link></div> 
    </div>
  );
};

export default Navabar;
