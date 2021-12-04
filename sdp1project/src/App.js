import React from 'react';
import ReactDOM from 'react-dom';
import realestate from './realestate.jpg';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation , Footer, Home, Buyer, Dealer } from "./Components";
function App () {
  return (
    <div className="App">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src = "C:\Users\DELL\sdp1project\src\realestate.jpg\900x400"
              alt=""
      />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/buyer" exact component={() => <Buyer />} />
          <Route path="/dealer" exact component={() => <Dealer />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;