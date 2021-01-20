import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navhead from "./components/Nav";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
    <Router>
      <div>
      <Navhead />
          <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
 </>
  );
}

export default App;