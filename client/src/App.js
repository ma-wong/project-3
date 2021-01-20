import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home"

function App() {
  return (
    <Home
    loggedIn="false"/>
  );
}

export default App;