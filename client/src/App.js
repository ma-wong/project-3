import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Navhead from "./components/Nav";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from './pages/Home';
import SearchBar from './pages/Search'
import Create from "./pages/Create";
import Account from './pages/Account';

function App() {
  return (
    <>
    <Router>
      <div>
      <Navhead />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={SearchBar}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/account" component={Account} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
 </>
  );
}

export default App;




// Morgans Testing Code -----------------
// import React from "react";
// import SearchResults from "./pages/SearchResults";
// import Details from "./pages/Details";

// function App() {
//   return (
//       <div>
//           <Details />
//       </div>
//   )
// }

// export default App;
// ------------------------------------------