import React from "react";
import Landing from "./../pages/Landing";
import Home from "./../pages/Home";
import SignUp from "./../pages/SignUp";
import About from "./../pages/About";
import Market from "./../pages/Market";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/market" component={Market}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
