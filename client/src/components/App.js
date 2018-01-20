import React from "react";
import Landing from "./Landing";
import Home from "./../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
