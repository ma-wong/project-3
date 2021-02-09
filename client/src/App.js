import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navhead from "./components/Nav";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from './pages/Home';
import Create from "./pages/Create";
import Account from './pages/Account';
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";
import Browse from './pages/Browse';
import ConfirmEmail from './pages/ConfirmEmailPage'
import TagView from './pages/TagView'
import Footer from "./components/Footer";
import MyBlocks from './pages/MyBlocks';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResestPassword';

import "./pageStyles/universal.css";

function App() {

  return (
    <>
    <Router>
      <div>
      <Navhead />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/tag/:tag" component={TagView} />
          <Route exact path="/results" component={SearchResults} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/confirm" component={ConfirmEmail} />
          <Route exact path="/myblocks" component={MyBlocks}/>
          <Route exact path = "/forgot" component={ForgotPassword} />
          <Route exact path = "/reset" component={ResetPassword} />
          <Route component={NoMatch} />
        </Switch>
        </div>
    </Router>
 </>
  );
}

export default App;