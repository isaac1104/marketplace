import React from "react";
import Landing from "./../pages/Landing";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
