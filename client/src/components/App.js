import React from "react";
import Landing from "./../pages/Landing";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
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
          <Route exact path="/login" component={Login}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/market" component={Market}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
