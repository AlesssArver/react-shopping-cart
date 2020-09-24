import React from "react";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'

import { CartContainer, GoodContainer } from "./containers";
import NavbarContainer from "./containers/Navbar";

const App = () => {
  return (
    <div className="main__container">
      <NavbarContainer />
       <Suspense fallback={<h1>Loading . . .</h1>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/goods" />} />
          <Route path="/cart" render={() => <CartContainer />} />
          <Route path="/goods" render={() => <GoodsContainer />} />
          <Route path='*' render={() => <div>404 Not Found</div>}/>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
