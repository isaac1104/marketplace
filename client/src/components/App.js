import React from "react";
import Landing from "./../pages/Landing";
import Home from "./../pages/Home";
import SignUp from "./../pages/SignUp";
import About from "./../pages/About";
import Market from "./../pages/Market";
import Post from "./../pages/Post";
import AddPost from "./../pages/AddPost";
import MyProfile from "./../pages/MyProfile";
import MyPost from "./../pages/MyPost";
import MyComment from "./../pages/MyComment";
import Search from "./../pages/Search";
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
          <Route exact path="/post/:postId" component={Post}/>
          <Route exact path="/add-post" component={AddPost}/>
          <Route exact path="/my-profile" component={MyProfile}/>
          <Route exact path="/my-posts" component={MyPost} />
          <Route exact path="/my-comments" component={MyComment} />
          <Route exact path="/search/:query" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
