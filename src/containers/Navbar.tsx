import React, { FC } from "react";
import { connect } from "react-redux";

import { IGood } from "../api/good";
import { IRootState } from "../flux";

import { Navbar } from "../components";

const NavbarContainer: FC<IMapStateToProps> = ({ goods }) => {
  return (
    <>
      <Navbar goodsQuantity={goods.length} />
    </>
  );
};

type IMapStateToProps = {
  goods: Array<IGood>;
};
const MapStateToProps = (state: IRootState): IMapStateToProps => ({
  goods: state.cart.goods,
});
export default connect(MapStateToProps)(NavbarContainer);
