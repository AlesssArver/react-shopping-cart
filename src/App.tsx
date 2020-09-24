import React from "react";
import { Redirect, Route } from "react-router-dom";

import CartContainer from "./containers/Cart";
import GoodsContainer from "./containers/Good";
import NavbarContainer from "./containers/Navbar";

const App = () => {
  return (
    <div className="main__container">
      <NavbarContainer />
      <Route exact path="/" render={() => <Redirect to="/goods" />} />
      <Route path="/cart" render={() => <CartContainer />} />
      <Route path="/goods" render={() => <GoodsContainer />} />
    </div>
  );
};

export default App;
