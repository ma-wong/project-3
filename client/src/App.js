import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Account from "./pages/Account";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;